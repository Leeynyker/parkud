import DashboardList from "../../components/dashboard-list/DashboardList";
import Navbar from "../../components/header/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import '../styles/adminDashboard.css'
import '../styles/forms-inner.css'
import BarChart from "../../components/charts/bar-chart/BarChart";

import React, { useEffect , useState } from 'react';





export default function Stats( { data } ) {

    const keys = Object.keys(data);
    const values = Object.values(data);
  
    

    const[userData, setUserData] = useState({
        labels: keys,
        datasets: [{
            label: "Ventas por día",
            data: values
        }]
    })
    

  return (
    
    <div style={{ width: '400px', height: '300px' }}>
        <BarChart chartData={userData} />
    </div>

  )
}