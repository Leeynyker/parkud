import { usersTest, userColumns, userActions } from "./usersTest"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "wouter"
import './dashboardList.css'

export default function DashboardList({ toShow }) {

  const iconos = {
    editar: <FontAwesomeIcon icon={faPenToSquare} />,
    eliminar: <FontAwesomeIcon icon={faTrashCan} />
  }

  return (
    <section className="dashboard-list">
      {/* Se ponen los encabezados de la tabla */}
      <div className="row">
        {userColumns[toShow].map((column, index) =>
          <h4 className="names" key={`${index}column`}>{column}</h4>
        )}
      </div>

      {/* {Se pone la información en la tabla} */}
      <div className="dashboard-content">
        {usersTest[toShow].map((element, index) =>
          <div className="row" key={`row${index}`}>
            {element.map((value, index) => <span key={`parq${index}`}>{value}</span> )}
            <span className="separated">
              {userActions[toShow].map((accion, i) => <Link key={`icon${index},${i}`} to='#'>{iconos[accion]}</Link>)}
            </span>
          </div>
        )}
      </div>

    </section>
  )
}