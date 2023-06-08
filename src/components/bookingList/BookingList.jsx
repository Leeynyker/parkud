import Detail from '../modals/Detail.modal';
import './bookingList.css';
import { useState } from 'react';

export default function BookingList({ data, clickable=false, tarifas }) {

  const [currentHorario, setCurrentHorario] = useState('')
  const [currentTarifa, setCurrentTarifa] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  function abrirModal(index){
    setCurrentHorario(data[index][2])
    setCurrentTarifa(tarifas[index])
    setModalOpen(true)
  }

  return (
    <section className="dashboard-list booking-list">
      <div className="row">
        <h4 className="names">Usuario</h4>
        <h4 className="names">Espacio</h4>
        <h4 className="names">Horario</h4>
        {clickable && <h4>Ver factura</h4>}
      </div>
      <div className="dashboard-content">
        {data.length && data.map((row, index) =>
          <div className="row" key={`rowReserva${index}`}>
            {row.map((value, index) => <span key={`reserva${index}`}>{value}</span>)}
            {clickable && <button onClick={() => (abrirModal(index))}>Ver factura</button>}
          </div>
        )}
      </div>
    <Detail horario={currentHorario} tarifa={currentTarifa} setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </section>
  )
}