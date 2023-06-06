import axios from "axios";
import { ENDPOINT } from "../util/api";

export default function useFetchParkings(){
  const token = localStorage.getItem('token');

  const getSpaceParking = async function(id){
    const url = `${ENDPOINT}/parqueadero/listarEspaciosDeUnParqueadero/${id}`;
    const response  = axios({
      method: "GET",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if(response.status === 200){
        return response.data;
      }
    })
    return response;
  }

  const getParkings = async function(){
    const url = `${ENDPOINT}/parqueadero/listarParqueaderos/`;
    const response  = axios({
      method: "GET",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if(response.status === 200){
        return response.data;
      }
    })
    return response;
  }

  const addReserva = async function(data){
    const url = `${ENDPOINT}/detalleDeReserva/guardar/`;
    const response  = axios({
      method: "post",
      url: url,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if(response.status === 200){
        return response.data;
      }
    })
    return response;
  }

  const getBookings = async function(){
    const url = `${ENDPOINT}/detalleDeReserva/listarTodos/`;
    const response  = axios({
      method: "GET",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if(response.status === 200){
        return response.data;
      }
    })
    return response;
  }
  const addParking = async function(data){
    const url = `${ENDPOINT}/parqueadero/guardar/`;
    const response  = axios({
      method: "post",
      url: url,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if(response.status === 200){
        return response.data;
      }
    })
    return response;
  }

  const addParkingSlots = async function(data){
    const url = `${ENDPOINT}/espacioDeParqueadero/guardar/`;
    return axios({
      method: 'post',
      url: url,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      return res.status === 200;
    }).catch((error) => {
      console.log(error);
      return false;
    })
  }

  async function deleteParking(id){
    return axios({
      method: 'delete',
      url: ENDPOINT + '/parqueadero/eliminar/' + id,
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

  return { getParkings, addParking, deleteParking, addParkingSlots, getSpaceParking, addReserva, getBookings}
}