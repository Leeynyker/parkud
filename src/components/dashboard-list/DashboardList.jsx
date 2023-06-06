import { usersTest, userColumns, userActions } from "./usersTest"
import { useEffect, useState } from 'react'
import { icons } from "../icons/icons"
import { Modal, Button } from "semantic-ui-react";
import useFetchAPI from "../../hooks/fetchUsers"
import useFetchParkings from "../../hooks/fetchParkings"
import './dashboardList.css'
import BookingModal from "../modals/Booking.modal";

export default function DashboardList({ toShow, data }) {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalID, setModalID] = useState(null);
  const [rows, setRows] = useState([]);
  const { deleteUser } = useFetchAPI()
  const { deleteParking } = useFetchParkings();
  useEffect(() => {
    // console.log(data);
    if (toShow === 'parkings') {
      setRows(data.map((item) => [{ id: item.idParqueadero, data: [item.nombreParqueadero, item.horarioServicio, `$${item.tarifa}`, item.cantidadDeCupos] }]))
    }
    if (toShow === 'staff') {
      setRows(data.map((item) => [{ id: item.id, data: [item.nombres, item.username, item.rol.nombreRol] }]))
    }
    if (toShow === 'user') {
      setRows(data.map((item) => [{ id: item.id, data: [item.nombres, item.username, item.puntosAcumulados, item.placaVehiculo] }]))
    }
  }, [data])

  function handleDelete(id) {
    let deleteFunction = toShow !== 'parkings' ? deleteUser : deleteParking;
    deleteFunction(id)
      .then(res => {
        if (res) {
          let filtrado = rows.filter((r) =>
            r[0].id !== id
          )
          setRows(filtrado)
        }
      });
  }


  function showModal(userId) {
    setModalID(userId);
    setModalOpen(true);
  }

  return (
    <section className="dashboard-list">
      {/* Se ponen los encabezados de la tabla */}
      <div className="row">
        {/* Se buscan en los títulos plantilla */}
        {userColumns[toShow].map((column, index) =>
          <h4 className="names" key={`${index}column`}>{column}</h4>
        )}
      </div>

      {/* Se pone la información en la tabla */}
      <div className="dashboard-content">
        {rows.length !== 0 && rows?.map((element, index) =>
          <div className="row" key={`row${index}`}>
            {/* {console.log(element[0])} */}
            {element[0]?.data?.map((value, index) => <span key={`parq${index}`}>{value}</span>)}
            {userActions[toShow]?.length &&
              <span className="separated">
                {userActions[toShow].map((accion, i) => <button key={`icon${index},${i}`} onClick={accion === 'verReservas' ? () => showModal(element[0].id) : () => handleDelete(element[0].id)}>{icons[accion]}</button>)}
              </span>
            }

          </div>
        )}
      </div>
      <BookingModal modalOpen={modalOpen} setModalOpen={setModalOpen} id={modalID}/>
    </section>
  )
}