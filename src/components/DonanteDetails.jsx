import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_DONANTE } from '../graphql/Queries';
import moment from 'moment';

const DonanteDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DONANTE, {
    variables: { id },
  });

  if (loading) return "Cargando detalles de la donante...";
  if (error) return `Error: ${error.message}`;

  const donante = data.getDonante;

  return (
    <div className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{donante.lastName} {donante.firstName}</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Compartir
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Exportar
            </button>
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
              <b>Cesareas:</b>
            </div>
            <div className="col">{donante.cesareas}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Apellidos RN/Lactante:</b>
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
              <b>Fecha Nacimiento RN:</b>
            </div>
            <div className="col">{donante.fechaNacimRN}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Complicaciones Embarazo:</b>
            </div>
            <div className="col">{donante.complicacionesEmbarazo}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Transfusiones Últimos 5 Años:</b>
            </div>
            <div className="col">{donante.transfusionesUltimos5Anos}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Tatuajes, Piercings, Acupuntura Último Año:</b>
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
    <div className="col" style={{ maxWidth: '140px' }}><b>Fecha de Creación:</b></div>
    <div className="col">{new Date(donante.createdAt).toLocaleString()}</div>
  </div>
</li>
<li className="list-group-item">
  <div className="row">
    <div className="col" style={{ maxWidth: '140px' }}><b>Última Modificación:</b></div>
    <div className="col">{new Date(donante.updatedAt).toLocaleString()}</div>
  </div>
</li>
        {/* Repeat the structure for the rest of the fields */}
      </ul>
    </div>
  );
}

export default DonanteDetails;