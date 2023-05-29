import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './parkudPoints.css'

export default function ParkudPoints() {

  const puntos = localStorage.getItem('puntos');

  return (
    <div className="parkud-points">
      <FontAwesomeIcon icon={faCircle} />
      <h4>{ puntos }</h4>
    </div>
  )
}