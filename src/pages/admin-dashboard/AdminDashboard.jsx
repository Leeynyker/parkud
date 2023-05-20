import DashboardList from "../../components/dashboard-list/DashboardList";
import Navbar from "../../components/header/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import '../styles/adminDashboard.css'

export default function AdminDashboard({role, toShow}) {
  
  return (
    <>
      <Navbar />
      <div className="dashboard-body">
        <Sidebar role={role}/>
        <div className="single-element">
          <>
            <button className="add-user">Agregar usuario</button>
            <DashboardList toShow={toShow}/>
          </>
        </div>
      </div>
    </>
  )
}