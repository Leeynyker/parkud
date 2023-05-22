import { Link } from "wouter"
import ParkudPoints from '../parkud-points/ParkudPoints'
import { navBarOptions } from "./navbar-options"
import './navbar.css';
import { useContext } from "react";
import LoggedContext from "../../context/Logged.context";

export default function Navbar() {
  const {role} = useContext(LoggedContext)
  const options = navBarOptions[role];

  return (
  <div className="parkud-header">
    <div className="parkud">
      <h2>PAR-</h2><h2>KUD</h2>
    </div>
    <div className="options">
      {options.map((option, index) => <Link key={`navOption${index}`} to={option.url}>{option.name}</Link>)}
      <div className="user-options">
        <ParkudPoints />
        <button className="user-icon">
        </button>
      </div>
    </div>
  </div >
  )
}