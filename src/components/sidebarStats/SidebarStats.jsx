
import { Link } from "wouter"
import '../sidebarStats/sidebarStats.css';

import { DateRangePicker } from 'rsuite';
import { Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

import React, { useState } from 'react';

import OptionButton from "../optionButton/OptionButton"
import { map } from "leaflet";

const { allowedMaxDays, allowedDays, allowedRange, beforeToday, afterToday, combine } =
  DateRangePicker;

 

export default function SidebarStats({sidebarData}) {

  const [callDataExterno, setcallDataExterno] = useState(false);

  const nombresParqueadero = sidebarData.map((item) => item.nombreParqueadero);
  console.log("hey2: "+nombresParqueadero)
  
  const handleCallback = (callDataInterno) => {
    setcallDataExterno(callDataInterno);

    // Hacer algo con los datos recibidos del componente hijo
    console.log("Datos recibidos:", callDataInterno);
  };


  return (
    <section className="sidebar">
      <Link href={""}>{nombresParqueadero[callDataExterno]}</Link>
      <br></br>
      <Link href={""}>Fecha</Link>
      <DateRangePicker disabledDate={allowedMaxDays(7)} character=' hasta ' format='dd/MM/yy' size='md' />
      <Link href={""}>Parqueadero</Link>
      <OptionButton data={sidebarData} callback={handleCallback}></OptionButton>
      
      <Button color="orange" appearance="primary">Search</Button>
    </section>
  )
}