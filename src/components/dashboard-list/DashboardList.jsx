import { usersTest, userColumns } from "./usersTest"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "wouter"
import './dashboardList.css'

export default function DashboardList() {

  return (
    <section className="dashboard-list">
      <div className="row">
        <h4 classname='names'>{userColumns[0]}</h4>
        <h4 classname='names'>{userColumns[1]}</h4>
        <h4 className="short names">{userColumns[2]}</h4>
        <h4 className="short names">{userColumns[3] ? userColumns[3] : '-'}</h4>
        <h4 className="short names">Acciones</h4>
      </div>
      <div className="dashboard-content">
        {usersTest.map((row, index) => {
          return (
            <div className="row" key={index}>
              <span>{row[0]}</span>
              <span>{row[1]}</span>
              <span className="short">{row[2]}</span>
              <span className="short">{row[3] ? row[3] : '-'}</span>
              <span className="short separated">
                <Link to='#'><FontAwesomeIcon icon={faPenToSquare} /></Link>
                <Link to='#'><FontAwesomeIcon icon={faTrashCan} /></Link>
              </span>
            </div>
          )
        })}

      </div>
    </section>
  )
}