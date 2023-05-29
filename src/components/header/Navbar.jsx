import { Link, useLocation } from "wouter"
import ParkudPoints from '../parkud-points/ParkudPoints'
import { navBarOptions } from "./navbar-options"
import './navbar.css';

export default function Navbar() {
  const role = localStorage.getItem('role')
  const options = navBarOptions[role];
  const [location, navigate] = useLocation();

  function cerrarSesion(){
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className="parkud-header">
      <div className="parkud">
        <h2>PAR-</h2><h2>KUD</h2>
      </div>
      <div className="options">
        {options.map((option, index) => <Link key={`navOption${index}`} to={option.url}>{option.name}</Link>)}
        <div className="user-options">
          <ParkudPoints />
          <button className='cerrar-sesion' onClick={cerrarSesion}>Cerrar sesión</button>
        </div>
      </div>
    </div >
  )
}