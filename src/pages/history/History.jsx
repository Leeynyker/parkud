import BookingList from "../../components/bookingList/BookingList";
import Navbar from "../../components/header/Navbar";
import Detail from "../../components/modals/Detail.modal";
import useFetchAPI from "../../hooks/fetchUsers";
import { useState, useEffect } from "react";

export default function History(){
  const {getUserBookings} = useFetchAPI()
  const [data, setData] = useState([])
  const [tarifas, setTarifas] = useState([])

  useEffect(()=>{
    getUserBookings().then(res=>{
      let temp = res.map((booking)=>{
        return [
          booking.usuario.username, 
          booking.espacioDeParqueadero.codigoEspacioParqueadero, 
          `${booking.fecha.split('T')[0]} / ${booking.horaEntrada} - ${booking.horaSalida}`
        ]
      })
      setData(temp)
      let tempTarifas = res.map((booking)=>{
        return booking.espacioDeParqueadero.parqueadero.tarifa
      })
      setTarifas(tempTarifas)
    })
  }, [])

  return (
    <>
    <Navbar />
    <BookingList data={data} tarifas={tarifas} clickable={true} />
    </>
  )
}