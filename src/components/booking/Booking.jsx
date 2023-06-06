import React from "react";
import { Button } from "semantic-ui-react";
import './booking.css'
export default function Booking({
  direccion,
  cupos,
  tarifa,
  horario,
}) {
  return (
    <div>
      <div className="data-park">
        {/* <h4>{nombre}</h4> */}
        <p className="data">Dirección: {direccion}</p>
        <p className="data">{cupos} cupos libres</p>
        <p className="data">Tarifa: ${tarifa}</p>
        <p className="data">
          Horario: {horario}
        </p>
        {/* {puntos && <p>Puntos PAR-KUD: {puntos}</p>} */}
      </div>
      <Button className="degraded-orange">Reservar</Button>
    </div>
  );
}
