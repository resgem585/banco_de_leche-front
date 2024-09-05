import { useParams } from 'react-router-dom';
import DonanteDetails from "../components/DonanteDetails"
import SideBar from "../components/SideBar"
 
export const DonanteDetalles = () => {
  const { id } = useParams();

  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="content-container">
          <DonanteDetails donanteId={id} />
        </div>
      </div>
    </>
  )
}