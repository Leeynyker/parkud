import Navbar from "../../components/header/Navbar"
import '../styles/home.css'
import { tempCards } from "../../util/tempCards"
import ParkingCard from "../../components/parking-card/Parking-card"
import useFetchAPI from "../../hooks/fetchAPI"

export default function Home() {

  const token = localStorage.getItem('token');
  const {getDataUser} = useFetchAPI();

  return (
    <>
      <Navbar /> 
      <div className="search-bar">
        <input type="text" />
        <button>Buscar</button>
      </div>
      <div className="cards-container">
        {tempCards.map((data, index) => {
          return (<ParkingCard key={index}{...data} />)
        })}
      </div>

    </>
  )
}