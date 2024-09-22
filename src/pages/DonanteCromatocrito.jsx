import SideBar from "../components/SideBar";
import CromatocritoForm from "../components/CrematocritoForm";

const DonanteCromatocrito = () => {
  return (
    <>
    <div className="app-container">
      <SideBar />
      <div className="content-container">
        <CromatocritoForm />
      </div>
    </div>
  </>
  )
}
export default DonanteCromatocrito