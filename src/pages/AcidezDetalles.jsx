import { useParams } from 'react-router-dom';
import SideBar from "../components/SideBar";
import AcidezDetails  from "../components/AcidezDetails"



const AcidezDetalles = () => {
    const { id } = useParams();
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="content-container">
          <AcidezDetails controlId={id} />
        </div>
      </div>
    </>
  )
}

export default AcidezDetalles
