import Navbar from "../../components/header/Navbar"
import '../styles/home.css'
import { tempCards } from "../../util/tempCards"
import ParkingCard from "../../components/parking-card/Parking-card"
import useFetchAPI from "../../hooks/fetchUsers"
import useFetchParkings from "../../hooks/fetchParkings"
import { useEffect, useState } from "react"

export default function Home() {

  const token = localStorage.getItem('token');
  const {getDataUser} = useFetchAPI();
  const {getParkings} = useFetchParkings();
  const [parkings, setParkings] = useState([]);
  useEffect(()=>{
    getParkings().then((response)=>{setParkings(response)})
  }, [])

  return (
    <>
      <Navbar /> 
      <div className="search-bar">
        <input type="text" />
        <button>Buscar</button>
      </div>
      <div className="cards-container">
        {parkings.map((data, index) => {
          return (<ParkingCard key={index} parqueadero={data} />)
        })}
      </div>

    </>
  )
}