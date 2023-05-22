import './parking-card.css';
import { Link } from 'wouter';

export default function ParkingCard({ id, nombre, direccion, cupos, tarifa, apertura, cierre, img, puntos = null }) {

  return (
    <div className="parking-card">
      <div className="parking-info">
        <div className="main-info">
          <Link to={`/parking/${id}`}><h4>{nombre}</h4></Link>
          <span>{direccion}</span>
        </div>
        <span>{cupos} cupos libres</span>
        <span>Tarifa: ${tarifa}</span>
        <span>{`${apertura} - ${cierre}`}</span>
        {puntos &&
          <span className="puntos">{`Puntos PAR-KUD: ${puntos}`}</span>
        }
      </div>
      <div className="parking-img single-element">
        {/* <img src={img} alt={`Parqueadero ${direccion}`} /> */}
        <div className="simulador-img">
          
        </div>
      </div>
    </div>
  )
}