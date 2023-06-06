import axios from "axios";
import { ENDPOINT } from "../util/api";

export default function useFetchParkings(){
  const token = localStorage.getItem('token');

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

  const addParking = async function(data){
    const url = `${ENDPOINT}/parqueadero/guardar/`;
    console.log(url);
    const response  = axios({
      method: "post",
      url: url,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if(response.status === 200){
        return true;
      }
    })
    return response;
  }

  return { getParkings, addParking }
}