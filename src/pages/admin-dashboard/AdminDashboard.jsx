import DashboardList from "../../components/dashboard-list/DashboardList";
import Navbar from "../../components/header/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import '../styles/adminDashboard.css'
import '../styles/forms-inner.css'
import RegisterModal from "../../components/modals/Register.modal";
import { avalaibleToAdd } from "./avalaibleToAdd";


export default function AdminDashboard( {toShow}) {

  const currentRole = localStorage.getItem('role');

  return (
    <>
      <Navbar />
      <div className="dashboard-body">
        <Sidebar />
        <div className="single-element">
          <>
            {avalaibleToAdd[currentRole][toShow] ? <RegisterModal toShow={avalaibleToAdd[currentRole][toShow]} /> : null}  
            <DashboardList toShow={toShow}/>
          </>
        </div>
      </div>
    </>
  )
}