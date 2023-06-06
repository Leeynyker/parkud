import Map from "../maps/Map";
import "./parking-card.css";
import { Link } from "wouter";
import { Modal, Button } from "semantic-ui-react";
import React, { useState } from "react";
import Booking from "../booking/Booking";

export default function ParkingCard({
  // idParqueadero,
  // nombreParqueadero,
  // direccion,
  // cupos,
  // tarifa,
  // apertura,
  // cierre,
  // img,
  // puntos = null,
  parqueadero
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = () => {
    setModalData({
      parqueadero
    });
    setModalOpen(true);
  };

  return (
    <div className="parking-card">
      <div className="parking-info">
        <div className="main-info">
          <Link to={`/parking/${parqueadero.idParqueadero}`}>
            <h4>{parqueadero.nombreParqueadero}</h4>
          </Link>
          <span>{parqueadero.ubicacion.direccion}</span>
        </div>
        <span>{parqueadero.cupos} cupos libres</span>
        <span>Tarifa: ${parqueadero.tarifa}</span>
        <span>{`${parqueadero.horarioServicio}`}</span>
        {/* {puntos && (
          <span className="puntos">{`Puntos PAR-KUD: ${puntos}`}</span>
        )} */}
        <button className="degraded-orange button-booking" onClick={handleOpenModal}>Reservar</button>
      </div>
      <div className="parking-img single-element">
        <div className="simulador-img">
          <Map direccion={parqueadero.ubicacion.direccion}/>
        </div>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} style={{ width: '800px' }}>
        {modalData && (
          <>
            <Modal.Header>{parqueadero.nombreParqueadero}</Modal.Header>
            <Modal.Content>
              <Booking
                nombre={parqueadero.nombreParqueadero}
                direccion={parqueadero.ubicacion.direccion}
                cupos={parqueadero.cupos}
                tarifa={parqueadero.tarifa}
                horario={parqueadero.horarioServicio}
                id={parqueadero.idParqueadero}
                // cierre={cierre}
                // puntos={puntos}
              />
              {/* <p>Dirección: {modalData.direccion}</p> */}
              {/* Agrega el resto de los datos de la tarjeta aquí */}
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => setModalOpen(false)}>Cerrar</Button>
              {/* Agrega el botón de reserva aquí */}
            </Modal.Actions>
          </>
        )}
      </Modal>
    </div>
  );
}
