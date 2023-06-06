import axios from "axios"
import { ENDPOINT } from "../util/api";
import { useContext } from "react";
import LoggedContext from "../context/Logged.context";

export default function useFetchAPI() {

  const { setToken } = useContext(LoggedContext);

  const registerUser = async (datos) => {
    const res = await axios.post(ENDPOINT + '/usuario/guardar/', datos)
      .then((response) => {
        console.log(response);
        if (response.status === 200) return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      })
    return res;
  }

  const getUser = async (datos) => {
    return axios.post(ENDPOINT + '/generar-token', datos)
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.token;
          setToken(response);
          localStorage.setItem('token', token)
          return true;
        }
        return false;

      })
      .catch((error) => {
        console.log(error);
        return false
      })
  }

  async function deleteUser(userId){
    return axios({
      method: 'delete',
      url: ENDPOINT + '/usuario/eliminarPorId/' + userId,
      headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then((response) => {
      if (response.status === 200) return response.data
      return false;
    }).catch((error) => {
      console.log(error);
      return false;
    })
  }

  const getUsers = async () => {
    return axios({
      method: 'get',
      url: `${ENDPOINT}/usuario/listarUsuarios/`,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then((response) => {
        if (response.status === 200) {
          return response.data.filter((obj) => obj.rol.rolId === 4);
        }
        return false;

      })
      .catch((error) => {
        console.log(error);
        return false
      })
  }

  const getAdmins = async () => {
    return axios({
      method: 'get',
      url: `${ENDPOINT}/usuario/listarUsuarios/`,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then((response) => {
        if (response.status === 200) {
          return response.data.filter((obj) => obj.rol.rolId === 1);
        }
        return false;

      })
      .catch((error) => {
        console.log(error);
        return false
      })
  }

  const getDataUser = async () => {
    return axios({
      method: "get",
      url: ENDPOINT + '/actual-usuario',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    }).then((response) => {
      if (response.status === 200) {
        console.log(response);
        const id = response.data.id;
        const correo = response.data.username;
        const rol = response.data.rol.nombreRol;
        const puntos = response.data.puntosAcumulados;
        localStorage.setItem('id', id)
        localStorage.setItem('mail', correo)
        localStorage.setItem('role', rol)
        localStorage.setItem('puntos', puntos)
        return true;
      }
      return false;
    })
      .catch((error) => {
        console.log(error);
        return false
      })
  }

  return { registerUser, getUser, getDataUser, getUsers, getAdmins, deleteUser }
}