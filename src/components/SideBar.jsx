import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="flex">
      <div className="bg-purple-700 text-white w-64 h-screen">
        <div className="p-4">
          <div className="flex items-center mb-6">
            <Link to="/home" className="flex items-center">
              <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24">
                {/* Icon SVG path goes here */}
              </svg>
              <span className="font-semibold text-lg">Home</span>
            </Link>
          </div>
          <nav className="space-y-2">
            <Link to="/ListaDonadoras" className="flex items-center px-4 py-2 rounded-md hover:bg-purple-600 transition-colors">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                {/* Icon SVG path goes here */}
              </svg>
              <span>Lista de Donadoras</span>
            </Link>
            
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;