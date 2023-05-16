import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './parkudPoints.css'

export default function ParkudPoints() {

  return (
    <div className="parkud-points">
      <FontAwesomeIcon icon={faCircle} />
      <h4>1500</h4>
    </div>
  )
}