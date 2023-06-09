import { sidebarOptions } from "./sidebar-options"
import { Link } from "wouter"
import './sidebar.css';

export default function Sidebar() {
  const role = localStorage.getItem('role')
  const currentRole = sidebarOptions[role]

  return (
    <section className="sidebar">
      {currentRole.map((option, index) => <Link href={`/dashboard/${option.url}`} key={index}>{option.nombre}</Link>)}
    </section>
  )
}