import { ControlForm } from "../components/ControlForm";
import SideBar from "../components/SideBar";
// Si tienes un archivo CSS, descomenta esta línea
// import '../css/main.css';

export const DonanteControl = () => {  // Cambié el nombre para que sea consistente con el archivo
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="content-container">
          <ControlForm />
        </div>
      </div>
    </>
  );
};
