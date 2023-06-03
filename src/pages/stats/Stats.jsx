import DashboardList from "../../components/dashboard-list/DashboardList";
import Navbar from "../../components/header/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import '../styles/adminDashboard.css'
import '../styles/forms-inner.css'

import React, { useEffect } from 'react';

import RegisterModal from "../../components/modals/Register.modal";



export default function Stats( { data } ) {

    const keys = Object.keys(data);
    const values = Object.values(data);
  
    const chartData = {
      labels: keys,
      datasets: [
        {
          label: 'Valores',
          data: values,
          backgroundColor: 'orange',
        },
      ],
    };

    React.useEffect(() => {
        Chart.register(...Chart.controllers.bar);
      }, []);

  return (
    
    <div style={{ width: '400px', height: '300px' }}>
      <Chart type="bar" data={chartData} options={{}} />
    </div>

  )
}