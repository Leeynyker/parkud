import BookingList from "../bookingList/BookingList";
import { useEffect, useState } from "react"
import useFetchParkings from "../../hooks/fetchParkings"
import { Modal, Button } from "semantic-ui-react";

export default function BookingModal({modalOpen, setModalOpen, id}){
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const { getBookings } = useFetchParkings();

  useEffect(() => {
    getBookings().then((response) => setBookings(response))
  }, [id])

  useEffect(()=>{
    console.log(bookings);
    const temp = bookings.filter((data) => data.espacioDeParqueadero.parqueadero.idParqueadero === id)
    const data = temp.map((element) => {
      let fechaTemp = element.fecha.split('T')[0]
      return [element.usuario.username, element.espacioDeParqueadero.codigoEspacioParqueadero, `${fechaTemp} / ${element.horaEntrada}-${element.horaSalida}`]
    })
    setFiltered(data)
  }, [bookings])
  return(
    <Modal open={modalOpen} onClose={() => setModalOpen(false)} style={{ width: '900px' }}>
        {filtered.length && (
          <>
            <Modal.Header>Reservas</Modal.Header>
            <Modal.Content>
              <BookingList data={filtered}/>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => setModalOpen(false)}>Cerrar</Button>
              {/* Agrega el botón de reserva aquí */}
            </Modal.Actions>
          </>
        )}
      </Modal>
  );  
}