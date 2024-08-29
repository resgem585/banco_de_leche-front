import { Link } from "react-router-dom";

const AddDonante = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <h2 className="text-lg font-medium leading-6 text-gray-900 mb-4">
              <Link to="/listaDonadoras">Registro Donadoras</Link>
            </h2>
            <div className="flex justify-end">
              <Link to="/Donante">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                  Nueva Donante
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddDonante;
