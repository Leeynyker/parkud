import { usersTest, userColumns, userActions } from "./usersTest"
import { Link } from "wouter"
import { useEffect, useState } from 'react'
import { icons } from "../icons/icons"
import './dashboardList.css'

export default function DashboardList({ toShow, data }) {

  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (toShow === 'parkings') {
      setRows(data.map((item, index) => [item.nombreParqueadero, item.horarioServicio, `$${item.tarifa}`, item.cantidadDeCupos]))
    }
    if (toShow === 'staff') {
      setRows(data.map((item, index) => [item.nombres, item.username, item.rol.nombreRol]))
    }
    if (toShow === 'user') {
      setRows(data.map((item, index) => [item.nombres, item.username, item.puntosAcumulados, item.placaVehiculo]))
    }
  }, [data])




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
            {/* {console.log(element)} */}
            {element?.map((value, index) => <span key={`parq${index}`}>{value}</span>)}
            <span className="separated">
              {userActions[toShow].map((accion, i) => <Link key={`icon${index},${i}`} to='#'>{icons[accion]}</Link>)}
            </span>
          </div>
        )}
      </div>

    </section>
  )
}