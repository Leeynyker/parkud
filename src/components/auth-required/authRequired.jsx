import { useContext } from "react"
import LoggedContext from "../../context/Logged.context"
import { Redirect } from "wouter";

const validRoles = {
  admin: 'admin',
  staff: 'staff',
  user: 'user'
}

function AdminRequired({ children }) {
  const { role } = useContext(LoggedContext)
  return (
    <>
      {role === validRoles.admin ? children : <Redirect to='/' />}
    </>
  )
}

function StaffRequired({ children }) {
  const { role } = useContext(LoggedContext)
  return (
    <>
      {role === validRoles.admin || role === validRoles.staff ? children : <Redirect to='/' />}
    </>
  )
}

export { AdminRequired, StaffRequired }