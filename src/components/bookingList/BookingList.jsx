import './bookingList.css';

export default function BookingList({ data }) {

  console.log(data);

  return (
    <section className="dashboard-list booking-list">
      <div className="row">
        <h4 className="names">Usuario</h4>
        <h4 className="names">Espacio</h4>
        <h4 className="names">Horario</h4>
      </div>
      <div className="dashboard-content">
        {data.length && data.map((row, index) =>
          <div className="row" key={`rowReserva${index}`}>
            {row.map((value, index) => <span key={`reserva${index}`}>{value}</span>)}
          </div>
        )}
      </div>
    </section>
  )
}