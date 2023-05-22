import Navbar from "../../components/header/Navbar"
import '../styles/home.css'
import { tempCards } from "../../util/tempCards"
import ParkingCard from "../../components/parking-card/Parking-card"

export default function Home() {
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