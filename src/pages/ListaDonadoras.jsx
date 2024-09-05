import SideBar from "../components/SideBar"
import RegistroDonadoras from "../components/RegistroDonadoras"
import './../styles/home.scss'

export const ListaDonadoras = () => {
  return (
    <>
      <div className="app-container">
      <SideBar />
      <div className="content-container">
        <RegistroDonadoras />
      </div>
    </div>
    </>
  )
}