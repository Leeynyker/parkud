
import Navbar from "../../components/header/Navbar";

import SidebarStats from "../../components/sidebarStats/SidebarStats"

import useFetchParkings from "../../hooks/fetchParkings";
import eventManager from "../../hooks/eventManager";

import '../styles/adminDashboard.css'
import '../styles/forms-inner.css'
import BarChart from "../../components/charts/bar-chart/BarChart";
import PieChart from "../../components/charts/pie-chart/PieChart";

import React, { useState , useEffect} from 'react';





export default function Stats( ) {

  const [nombreParqueadero, setnombreParqueadero] = useState([null]);
  const [fechasData, setfechasData] = useState([null]);
  
  useEffect(() => {
    const handleParqueaderoSeleccionadoEvent = (data) => {
      // Realizar acción con los datos recibidos
      //console.log('Datos consola:', data);
      //alert('Datos recibidos:'+ data);
      setnombreParqueadero(data);
    };
    const handleFechasSeleccionadasEvent = (data) => {
      // Realizar acción con los datos recibidos
      //console.log('Datos consola:', data);
      //alert('Datos recibidos:'+ data);
      setfechasData(data);
      //console.log("fechasData: "+data);
    };

    // Suscribirse al evento personalizado
    eventManager.subscribe('eventoNombreParqueaderoSeleccionado', handleParqueaderoSeleccionadoEvent);
    eventManager.subscribe('eventoFechasSeleccionadas', handleFechasSeleccionadasEvent);

    // Limpiar suscripción cuando el componente se desmonte
    return () => {
      eventManager.unsubscribe('eventoNombreParqueaderoSeleccionado', handleParqueaderoSeleccionadoEvent);
      eventManager.unsubscribe('eventoFechasSeleccionadas', handleFechasSeleccionadasEvent);
    };
  }, []);

  
  
  



    const { getParkings } = useFetchParkings();
    const { getVentasParking } = useFetchParkings();
    const [parkingData, setparkingData] = useState([])
    const [ventasData, setVentasData] = useState([]);

    useEffect(() => {
      getParkings().then((response) => setparkingData(response));
      getVentasParking("1","2023-01-01").then((response) => setVentasData(response));
    }, [])





    const barChartData = {
      "01/02/2023": "40000",
      "02/02/2023": "10000",
      "03/02/2023": "25000",
      "04/02/2023": "30000",
      "05/02/2023": "5000",
      "06/02/2023": "10000",
      "07/02/2023": "20000"
    };

    const barkeys = Object.keys(barChartData);
    const barvalues = Object.values(barChartData);
    var ventasTotales = null;
    for(var i = 0; i < barvalues.length; i++){

      ventasTotales += parseInt(barvalues[i]);
    }
  


    const pieChartData = {
      "01/02/2023": "40",
      "02/02/2023": "1",
      "03/02/2023": "27",
      "04/02/2023": "13",
      "05/02/2023": "59",
      "06/02/2023": "10",
      "07/02/2023": "20"
    };

    const piekeys = Object.keys(pieChartData);
    const pievalues = Object.values(pieChartData);

    var tasaOcupacion = null;
    for(var i = 0; i < pievalues.length; i++){

      tasaOcupacion += parseInt(pievalues[i]);
    }
    tasaOcupacion= tasaOcupacion/pievalues.length;



    const[barChartConfig, charUserData] = useState({
        labels: barkeys,
        datasets: [{
            label: "$COP Vendido por Día",

            data: barvalues,
            backgroundColor: ["#FF8000"],
            borderWidth: 3, 
            borderColor: ["#f2f2f2"]
        }]
    })
    
    const[pieChartConfig, pieUserData] = useState({
      labels: piekeys,
      datasets: [{
          label: "Porcentaje de Ocupación por Día",
          data: pievalues,
          backgroundColor: ["#FF8000"],
          borderWidth: 1, 
          borderColor: ["#f2f2f2"]
      }]
  })

  return (
    <>
            <Navbar />
            <div className="dashboard-body">
              <SidebarStats sidebarData={parkingData}/>
              <div >
                  

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft:"100px", padding:"10px"  }} >
                <div style={{ margin:"10px", padding: '20px', width:"90%", height: '600px', background: 'white', borderRadius: '10px', border: '1px solid gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                  
                  <div >Ingresos Brutos {nombreParqueadero}</div>
                  <div style={{ padding: '4px'}}>{ventasTotales} COP</div>
                  <BarChart chartData={barChartConfig} />

                </div>

                <div style={{ margin:"10px", padding: '20px', width:"90%", height: '450px', background: 'white', borderRadius: '10px', border: '1px solid gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                  
                  <div>Tasa de Ocupación {nombreParqueadero}</div>
                  <div style={{ padding: '2px'}}>{tasaOcupacion}%</div>
                  <PieChart chartData={pieChartConfig} style={{width:"50%"}}/>

                </div>
              </div>


              </div>
            </div>
      </>
    

  )
}