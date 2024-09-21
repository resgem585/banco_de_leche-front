import { useQuery, useMutation } from "@apollo/client";
import { GET_DONANTES } from "../graphql/Queries";
import { Link } from "react-router-dom";
import { DELETE_DONANTE } from "../graphql/Mutation";
import '../css/main.css'

const RegistroDonadoras = () => {
  const { loading, error, data, refetch } = useQuery(GET_DONANTES);
  const [deleteDonante] = useMutation(DELETE_DONANTE);

  const handleDeleteDonante = async (donanteId) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta donadora?");
    if (confirmDelete) {
      try {
        await deleteDonante({ variables: { id: donanteId } });  // Usa `id`
        refetch(); // Refresca la lista de donantes después de eliminar
      } catch (error) {
        console.error("Error al eliminar donante:", error);
      }
    }
  };

  if (loading) return "Cargando donantes...";
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <h2>Registro de Donadoras</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Apellido</th>
            <th>Nombre</th>
            <th>SDG</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.donantes.map((donante) => (
            <tr key={donante._id}>
              <td>{donante.tipo}</td>
              <td>{donante.firstName}</td>
              <td>{donante.lastName}</td>
              <td>{donante.sdg}</td>
              <td>
                <div className="action-buttons-container">
                  <div className="action-buttons">
                    <span className="action-header"></span>
                    <Link
                      to={`/DonanteDetalles/${donante._id}`}
                      className="btn btn-primary me-2"
                    >
                      <i className="bi bi-eye"></i> Ver
                    </Link>
                    <Link
                      to={`/EditarDonante/${donante._id}`}
                      className="btn btn-warning me-2"
                    >
                      <i className="bi bi-pencil"></i> Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteDonante(donante._id)} // Llamada con confirmación
                    >
                      <i className="bi bi-trash"></i> Borrar
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistroDonadoras;
