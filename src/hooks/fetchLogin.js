import axios from "axios"
import { HOST } from "./variables"

export default function useLogin(){
  const fetchLogin = ({ user, pass }) => {
    axios.post(HOST, {user, pass})
      .then((res) =>{
        console.log(res);
      })
  }

  return { fetchLogin }
}