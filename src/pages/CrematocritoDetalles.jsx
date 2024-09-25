import { useParams } from 'react-router-dom';
import SideBar from "../components/SideBar";
import CrematocritoDetails from "../components/CrematocritoDetails"; // Asegúrate de tener el componente CrematocritoDetails

const CrematocritoDetalles = () => {
  const { id } = useParams(); // Obtener el ID del crematocrito desde la URL

  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="content-container">
          <CrematocritoDetails crematocritoId={id} /> {/* Pasar el ID del crematocrito al componente */}
        </div>
      </div>
    </>
  );
};

export default CrematocritoDetalles;
