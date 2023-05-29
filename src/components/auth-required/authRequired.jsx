import { useContext } from "react"
import LoggedContext from "../../context/Logged.context"
import { Redirect } from "wouter";

const validRoles = {
  admin: 'Admin',
  gerente: 'Gerente',
  cliente: 'Cliente'
}

function AdminRequired({ children }) {
  const role = localStorage.getItem('role')
  return (
    <>
      {role === validRoles.admin || role === validRoles.gerente ? children : <Redirect to='/login' />}
    </>
  )
}

function UserRequired({ children }){
  const role = localStorage.getItem('role')
  return (
    <>
      {role === validRoles.cliente || role === validRoles.admin || role === validRoles.gerente ? children : <Redirect to='/login' />}
    </>
  )
}

export { AdminRequired, UserRequired }