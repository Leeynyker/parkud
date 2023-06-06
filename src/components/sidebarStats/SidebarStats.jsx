
import { Link } from "wouter"
import './sidebarStats.css';
import { useContext } from "react";
import LoggedContext from "../../context/Logged.context";

export default function Sidebar() {


  return (
    <section className="sidebar">
      <Link href={""}>Fecha</Link>
      <Link href={""} >01/02/2023 - 05/02/2023</Link>
      <Link href={""}>Parqueadero</Link>
      <Link href={""}>Movistar Arena</Link>
      {/*currentRole.map((option, index) => <Link href={`/dashboard/${option.url}`} key={index}>{option.nombre}</Link>)*/}
    </section>
  )
}