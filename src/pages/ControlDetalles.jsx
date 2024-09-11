import { useParams } from 'react-router-dom';
import SideBar from "../components/SideBar";
import ControlDetails  from "../components/ControlDetails"



const ControlDetalles = () => {
    const { id } = useParams();
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="content-container">
          <ControlDetails controlId={id} />
        </div>
      </div>
    </>
  )
}

export default ControlDetalles
