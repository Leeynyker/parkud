import DashboardList from "../../components/dashboard-list/DashboardList";
import Navbar from "../../components/header/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import '../styles/adminDashboard.css'
import '../styles/forms-inner.css'
import BarChart from "../../components/charts/bar-chart/BarChart";
import PieChart from "../../components/charts/pie-chart/PieChart";

import React, { useEffect , useState } from 'react';





export default function Stats( { data } ) {

    const keys = Object.keys(data);
    const values = Object.values(data);
  
    

    const[barChartData, charUserData] = useState({
        labels: keys,
        datasets: [{
            label: "$COP Vendido por Día",
            data: values,
            backgroundColor: ["#FF8000"],
            borderWidth: 2, 
            borderColor: "white" 
        }]
    })
    
    const[pieChartData, pieUserData] = useState({
      labels: keys,
      datasets: [{
          label: "% Ocupación por Día",
          data: values,
          backgroundColor: ["#FF8000"],
          borderWidth: 2, 
          borderColor: "white" 
      }]
  })

  return (
    
    <div style={{ width: '400px', height: '300px' }}>
        <BarChart chartData={barChartData} />
        <PieChart chartData={pieChartData} />
    </div>

  )
}