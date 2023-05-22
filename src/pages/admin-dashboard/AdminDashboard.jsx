import DashboardList from "../../components/dashboard-list/DashboardList";
import Navbar from "../../components/header/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import '../styles/adminDashboard.css'
import '../styles/forms-inner.css'
import RegisterModal from "../../components/modals/Register.modal";



export default function AdminDashboard( {toShow}) {
  

  return (
    <>
      <Navbar />
      <div className="dashboard-body">
        <Sidebar />
        <div className="single-element">
          <>
            <RegisterModal />
            <DashboardList toShow={toShow}/>
          </>
        </div>
      </div>
    </>
  )
}