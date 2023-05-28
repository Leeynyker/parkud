import axios from "axios"
import { ENDPOINT } from "../util/api";
import { useContext } from "react";
import LoggedContext from "../context/Logged.context";

export default function useFetchAPI() {

  const {setToken} = useContext(LoggedContext);

  const registerUser = (datos) => {
    axios.post(ENDPOINT + '/usuario/guardar', datos)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const getUser = (datos) =>{
    axios.post(ENDPOINT + '/generar-token', datos)
      .then((response) => {
        setToken(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return { registerUser, getUser }
}