import DashboardList from "../../components/dashboard-list/DashboardList";
import Stats from "../stats/Stats";
import Navbar from "../../components/header/Navbar";
import SidebarStats from "../../components/sidebarStats/SidebarStats";
import Sidebar from "../../components/sidebar/Sidebar";
import '../styles/adminDashboard.css'
import '../styles/forms-inner.css'
import RegisterModal from "../../components/modals/Register.modal";
import { avalaibleToAdd } from "./avalaibleToAdd";
import useFetchParkings from "../../hooks/fetchParkings";
import useFetchAPI from "../../hooks/fetchUsers";
import { useEffect, useState } from "react";


export default function AdminDashboard({ toShow }) {

  const currentRole = localStorage.getItem('role');
  const { getParkings } = useFetchParkings();
  const { getUsers, getAdmins } = useFetchAPI();
  const [data, setData] = useState([])

  useEffect(() => {
    if (toShow === 'parkings') getParkings().then((response) => setData(response))
    if (toShow === 'user') getUsers().then((response) => setData(response))
    if (toShow === 'staff') getAdmins().then((response) => setData(response))
  }, [toShow])


  return (
    <>
      <Navbar />
      <div className="dashboard-body">
        <Sidebar />
        <div className="single-element">
          {
            // Si la condición es verdadera y se cumple avalaibleToAdd[currentRole][toShow]
            avalaibleToAdd[currentRole][toShow] ? (
              // Renderiza el componente RegisterModal con la prop toShow
              <RegisterModal toShow={avalaibleToAdd[currentRole][toShow]} setData={setData}/>
            ) : null // Si no se cumple la condición, renderiza null
          }
          <DashboardList toShow={toShow} data={data} />
        </div>
      </div>
    </>
  )
}