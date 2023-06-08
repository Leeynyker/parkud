
import { Link } from "wouter"
import '../sidebarStats/sidebarStats.css';

import { DateRangePicker } from 'rsuite';
import { Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

import React, { useState } from 'react';
import eventManager from '../../hooks/eventManager';

import OptionButton from "../botonOpciones/BotonOpciones"
import { map } from "leaflet";

const { allowedMaxDays, allowedDays, allowedRange, beforeToday, afterToday, combine } =
  DateRangePicker;

 

export default function SidebarStats({sidebarData}) {

  const [callDataExterno, setcallDataExterno] = useState();

  var idParqueaderoSeleccionado = null, fechaInicial = "", fechaFinal = "", fechas = [];
  const nombresParqueadero = sidebarData.map((item) => item.nombreParqueadero);
  //console.log("hey2: "+nombresParqueadero)
  
  const handleCallback = (callDataInterno) => {
    
    setcallDataExterno(callDataInterno);
    
    // Hacer algo con los datos recibidos del componente hijo
    // callDataInterno Recibe el ID del parqueadero seleccionado por el componente optionButton

    //enviar el nombre del parqueadero seleccionado al componente padre usando el eventManager
    eventManager.emit('eventoNombreParqueaderoSeleccionado', nombresParqueadero[callDataInterno]);

   

    //envia el rango de fechas seleccionado por el cliente al componente padre usando el eventManager
    eventManager.emit('eventoFechasSeleccionadas', fechas);


  };

  const calendarChange = () => {
    
    var spanElement = document.querySelector('.rs-picker-toggle-value');
    //console.log("sssss :"+spanElement);

    if (spanElement) {
      // Obtener fechas inicial y final
      const contenido = spanElement.textContent;
      const fechasArray = contenido.split("hasta");
      fechaInicial = new Date(fechasArray[0].trim());
      fechaFinal = new Date(fechasArray[1].trim());

      // Generar todas las fechas en el rango
      fechas = [];
      for (let fecha = fechaInicial; fecha <= fechaFinal; fecha.setDate(fecha.getDate() + 1)) {
        const fechaString = fecha.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "2-digit" });
        //console.log("nueva gecha: "+fechaString);
        fechas.push(fechaString);
      }             
      //console.log(typeof fechas+ "   ,fechas: "+fechas[fechas.length-1]);

    } else {
      console.log('El elemento no existe en el DOM');
    }

    

  };





  return (
    <section className="sidebar" >
      <br></br>
      <Link href="">{nombresParqueadero[callDataExterno]}</Link>
      <br></br>
      <br></br>
      <br></br>
      <Link href={""}>Seleccione Fecha</Link>
      <DateRangePicker onChange={calendarChange()} shouldDisableDate ={allowedMaxDays(7)} character=' hasta ' format='yy-dd-MM' size='md' limitStartYear={2023} />
      
      <Link href={""}>Seleccione Parqueadero</Link>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <OptionButton data={sidebarData} callback={handleCallback} size='lg'></OptionButton>
      </div>
      
      <br></br>
      

    </section>
  )
}