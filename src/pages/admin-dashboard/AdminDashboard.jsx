import DashboardList from "../../components/dashboard-list/DashboardList";
import Stats from "../stats/Stats";
import Navbar from "../../components/header/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import '../styles/adminDashboard.css'
import '../styles/forms-inner.css'
import RegisterModal from "../../components/modals/Register.modal";
import { avalaibleToAdd } from "./avalaibleToAdd";
import useFetchParkings from "../../hooks/fetchParkings";
import { useEffect, useState } from "react";


export default function AdminDashboard( {toShow}) {

  const currentRole = localStorage.getItem('role');
  const { getParkings } = useFetchParkings();
  const [data, setData] = useState([])

  useEffect(()=>{
    getParkings().then((response)=> setData(response))
  },[toShow])
  const jsonData = {
    "02/02/2023": "10000",
    "03/02/2023": "200000",
    "04/02/2023": "100000",
    "05/02/2023": "5000",
    "01/02/2023": "80000"
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-body">
        <Sidebar />
        <div className="single-element">
          <>
            {avalaibleToAdd[currentRole][toShow] ? <RegisterModal toShow={avalaibleToAdd[currentRole][toShow]} /> : null}  
            <DashboardList toShow={toShow} data={data}/>
          </>

{/*          
          {avalaibleToAdd[currentRole][toShow] ? (
            // Condición 1: Si toShow es igual a 'user', 'parkings' o 'staff'
            <>
              {
                // Si la condición es verdadera y se cumple avalaibleToAdd[currentRole][toShow]
                avalaibleToAdd[currentRole][toShow] ? (
                  // Renderiza el componente RegisterModal con la prop toShow
                  <RegisterModal toShow={avalaibleToAdd[currentRole][toShow]} />
                ) : null // Si no se cumple la condición, renderiza null
              }
              <DashboardList toShow={toShow} />
            </>
           ) : 
          

          toShow === 'stats' ? (
              // Condición 2: Si toShow es igual a 'stats'
              // Renderiza el componente Login
              <Stats data={jsonData}/>
            ) : null // Si ninguna condición se cumple, renderiza null
          } */}


        </div>
      </div>
    </>
  )
}