
import { Link } from "wouter"
import '../sidebarStats/sidebarStats.css';

import { DateRangePicker } from 'rsuite';
import { Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

import React, { useState } from 'react';
import eventManager from '../../hooks/eventManager';

import OptionButton from "../optionButton/OptionButton"
import { map } from "leaflet";

const { allowedMaxDays, allowedDays, allowedRange, beforeToday, afterToday, combine } =
  DateRangePicker;

 

export default function SidebarStats({sidebarData}) {

  const [callDataExterno, setcallDataExterno] = useState();

  var idParqueaderoSeleccionado = null;
  const nombresParqueadero = sidebarData.map((item) => item.nombreParqueadero);
  console.log("hey2: "+nombresParqueadero)
  
  const handleCallback = (callDataInterno) => {
    
    setcallDataExterno(callDataInterno);
    
    // Hacer algo con los datos recibidos del componente hijo
    // callDataInterno Recibe el ID del parqueadero seleccionado por el componente optionButton

    //console.log("Datos recibidos:", callDataInterno);
    eventManager.emit('eventoPersonalizado', nombresParqueadero[callDataInterno]);
  };

  const handleClick = () => {
    console.log('Botón clickeado');
    // Acciones a realizar al hacer clic en el botón
    eventManager.emit('eventoPersonalizado', 'hola madafakas');
    
  };



  return (
    <section className="sidebar" >
      <br></br>
      <Link href="">{nombresParqueadero[callDataExterno]}</Link>
      <br></br>
      <br></br>
      <br></br>
      <Link href={""}>Seleccione Parqueadero</Link>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <OptionButton data={sidebarData} callback={handleCallback} size='lg'></OptionButton>
      </div>
      
      <Link href={""}>Seleccione Fecha</Link>
      <DateRangePicker shouldDisableDate ={allowedMaxDays(7)} character=' hasta ' format='dd/MM/yy' size='md' />
      <br></br>
      

    </section>
  )
}