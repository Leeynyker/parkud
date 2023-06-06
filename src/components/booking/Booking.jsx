import React from "react";
import { Button, Form } from "semantic-ui-react";
import "./booking.css";
import useFetchParkings from "../../hooks/fetchParkings";
// import {getSpa}
import { useEffect, useState } from "react";
// import { Button, Form } from 'semantic-ui-react';

export default function Booking({ direccion, cupos, tarifa, horario, id }) {
  const [spaceParking, setSpaceParkings] = useState([]);
  const { getSpaceParking, addReserva } = useFetchParkings();
  const [fecha, setFecha] = useState("");
  const [horaEntrada, setHoraEntrada] = useState("");
  const [horaSalida, setHoraSalida] = useState("");
  useEffect(() => {
    getSpaceParking(id).then((response) => {
      const filtrado = response.filter((objeto) => objeto.ocupado === false);
      setSpaceParkings(filtrado);
      // console.log(response);
    });
  }, []);

  const handleSubmit = () => {
    const place = spaceParking[0].idEspacioParqueadero;
    const user = localStorage.id;
    const reserva = {
      fecha: fecha,
      horaEntrada: horaEntrada,
      horaSalida: horaSalida,
      usuario: {
        id: user,
      },
      espacioDeParqueadero: {
        idEspacioParqueadero: place,
      },
    };
    addReserva(reserva).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <div className="data-park">
        {/* <h4>{nombre}</h4> */}
        <p className="data">Dirección: {direccion}</p>
        <p className="data">{cupos} cupos libres</p>
        <p className="data">Tarifa: ${tarifa}</p>
        <p className="data">Horario: {horario}</p>
        {/* {puntos && <p>Puntos PAR-KUD: {puntos}</p>} */}
      </div>
      <Form style={{width: '70%', margin: 'auto'}} >
        <div className="form-input">
          Fecha
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="form-input">
          Hora de entrada
          <input
            type="time"
            value={horaEntrada}
            onChange={(e) => setHoraEntrada(e.target.value)}
          />
        </div>
        <div className="form-input">
          Hora de salida
          <input
            type="time"
            value={horaSalida}
            onChange={(e) => setHoraSalida(e.target.value)}
          />
        </div>
        <button className="degraded-orange button-booking"  onClick={handleSubmit}>Reservar</button>
      </Form>
      {/* <Button onClick={handleSubmit} className="degraded-orange">
        Reservar
      </Button> */}
    </div>
  );
}
