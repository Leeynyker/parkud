import { sidebarOptions } from "./sidebar-options"
import { Link } from "wouter"
import './sidebar.css'

export default function Sidebar() {
  const currentRole = sidebarOptions['admin']
  return (
    <section className="sidebar">
      {currentRole.map((option, index) => <Link to={`/admin/${option}`}>{option}</Link>)}
    </section>
  )
}