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

  return { getParkings }
}