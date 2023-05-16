import { Link } from "wouter"
import ParkudPoints from '../parkud-points/ParkudPoints'
import './navbar.css'

export default function Navbar() {
  return (
  <header>
    <div className="parkud">
      <h2>PAR-</h2><h2>KUD</h2>
    </div>
    <div className="options">
      <Link to='/'>Estadísticas</Link>
      <Link to='/'>Reportes</Link>
      <Link to='/'>Administración</Link>
      <div className="user-options">
        <ParkudPoints />
        <button className="user-icon">

        </button>
      </div>
    </div>
  </header>
  )
}