import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_DONANTE } from '../graphql/Queries';
import moment from 'moment';

const DonanteDetails = () => {
  const { id } = useParams(); // Obtener el ID de la donante desde la URL
  const { loading, error, data } = useQuery(GET_DONANTE, {
    variables: { id }, // Usar el ID en las variables de la consulta
  });

  if (loading) return "Cargando detalles de la donante...";
  if (error) return `Error: ${error.message}`;

  if (!data || !data.donante) {
    return <div>No se encontraron detalles de la donante.</div>;
  }

  const donante = data.donante;
  const controlId = donante.control ? donante.control._id : null; // Extraer el controlId si existe

  return (
    <div className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">
          {donante.lastName} {donante.firstName}
        </h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link to={`/agregarControl/${donante._id}`} className="btn btn-sm btn-primary">
              Agregar Control
            </Link>
          </div>
        </div>
      </div>

      <div className="col py-3">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Registro Donadoras</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {donante.lastName} {donante.firstName}
                </li>
              </ol>
            </nav>
          </div>
          <div className="col text-end fw-lighter">
            <b>Última Actualización: {moment(donante.updatedAt).format('llll [hrs]')}</b>
          </div>
        </div>
      </div>

      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Tipo:</b>
            </div>
            <div className="col">{donante.tipo}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Apellidos:</b>
            </div>
            <div className="col">{donante.lastName}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Nombre:</b>
            </div>
            <div className="col">{donante.firstName}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Edad:</b>
            </div>
            <div className="col">{donante.edad}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Dirección:</b>
            </div>
            <div className="col">{donante.direccion}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Ocupación:</b>
            </div>
            <div className="col">{donante.ocupacion}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Partos:</b>
            </div>
            <div className="col">{donante.partos}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Cesáreas:</b>
            </div>
            <div className="col">{donante.cesareas}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Apellidos RN Lactante:</b>
            </div>
            <div className="col">{donante.apellidosRNLactante}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>SDG:</b>
            </div>
            <div className="col">{donante.sdg}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Fecha de Nacimiento RN:</b>
            </div>
            <div className="col">
              {donante.fechaNacimRN ? new Date(donante.fechaNacimRN).toLocaleDateString() : 'N/A'}
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Complicaciones de Embarazo:</b>
            </div>
            <div className="col">{donante.complicacionesEmbarazo}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Transfusiones en los últimos 5 años:</b>
            </div>
            <div className="col">{donante.transfusionesUltimos5Anos}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Tatuajes, Piercings o Acupuntura en el último año:</b>
            </div>
            <div className="col">{donante.tatuajesPiercingsAcupunturaUltimoAno}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Tratamiento Médico:</b>
            </div>
            <div className="col">{donante.tratamientoMedico}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Prueba Rápida Sífilis:</b>
            </div>
            <div className="col">{donante.pruebaRapidaSifilis}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Prueba Rápida VIH:</b>
            </div>
            <div className="col">{donante.pruebaRapidaVIH}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Prueba Rápida Hepatitis C:</b>
            </div>
            <div className="col">{donante.pruebaRapidaHepatitisC}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Observaciones:</b>
            </div>
            <div className="col">{donante.observaciones}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Fecha de Creación:</b>
            </div>
            <div className="col">
              {new Date(donante.createdAt).toLocaleString()}
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Última Modificación:</b>
            </div>
            <div className="col">
              {new Date(donante.updatedAt).toLocaleString()}
            </div>
          </div>
        </li>
      </ul>

      {/* Agregar el botón "Ver Control" utilizando el controlId */}
      {controlId && (
        <div className="mt-3">
          <Link to={`/ControlDetalles/${controlId}`} className="btn btn-primary">
            Ver Control
          </Link>
        </div>
      )}
    </div>
  );
};

export default DonanteDetails;
