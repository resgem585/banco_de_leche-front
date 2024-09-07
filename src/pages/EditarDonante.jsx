import { useParams } from 'react-router-dom';
import EditDonante from "../components/EditDonante";
import SideBar from '../components/SideBar';
import './../styles/home.scss'

 
export const EditarDonante = () => {
  const { _id } = useParams();

  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="content-container">
          <EditDonante donanteId={_id} /> 
        </div>
      </div>
    </>
  )
}

export default EditarDonante;