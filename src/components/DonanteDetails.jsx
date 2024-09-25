import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_DONANTE } from '../graphql/Queries';
import moment from 'moment';

const DonanteDetails = () => {
  const { id } = useParams(); // Obtener el ID del donante desde la URL
  const { loading, error, data } = useQuery(GET_DONANTE, {
    variables: { id }, // Usar el ID en las variables de la consulta
  });

  if (loading) return "Cargando detalles de la donante...";
  if (error) return `Error: ${error.message}`;

  if (!data || !data.donante) {
    return <div>No se encontraron detalles de la donante.</div>;
  }

  const donante = data.donante;
  console.log('Donante data:', donante); // Para depuración
  const controlId = donante.control ? donante.control._id : null; // Extraer el controlId si existe
  const crematocritoId =
    donante.control && donante.control.crematocritoData
      ? donante.control.crematocritoData._id
      : null;

  return (
    <div className="container">
      {/* Encabezado y botones de acción */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">
          {donante.lastName} {donante.firstName}
        </h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            {controlId ? (
              <>
                {/* Botón Ver Control */}
                <Link
                  to={`/ControlDetalles/${controlId}`}
                  className="btn btn-sm btn-primary me-2"
                >
                  Ver Control
                </Link>
                {/* Botón Agregar Crematocrito */}
                <Link
                  to={`/agregarCrematocrito/${controlId}`}
                  className="btn btn-sm btn-secondary me-2"
                >
                  Agregar Crematocrito
                </Link>
                {/* Botón Ver Crematocrito */}
                <Link
                  to={`/CrematocritoDetalles/${crematocritoId || controlId}`}
                  className="btn btn-sm btn-secondary"
                >
                  Ver Crematocrito
                </Link>
              </>
            ) : (
              <Link
                to={`/agregarControl/${donante._id}`}
                className="btn btn-sm btn-primary"
              >
                Agregar Control
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navegación y fecha de actualización */}
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
            <b>
              Última Actualización:{' '}
              {moment(donante.updatedAt).format('LLLL [hrs]')}
            </b>
          </div>
        </div>
      </div>

      {/* Lista de detalles del donante */}
      <ul className="list-group">
        {/* Tipo */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Tipo:</b>
            </div>
            <div className="col">{donante.tipo}</div>
          </div>
        </li>

        {/* Apellidos */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Apellidos:</b>
            </div>
            <div className="col">{donante.lastName}</div>
          </div>
        </li>

        {/* Nombre */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Nombre:</b>
            </div>
            <div className="col">{donante.firstName}</div>
          </div>
        </li>

        {/* Edad */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Edad:</b>
            </div>
            <div className="col">{donante.edad}</div>
          </div>
        </li>

        {/* Dirección */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Dirección:</b>
            </div>
            <div className="col">{donante.direccion}</div>
          </div>
        </li>

        {/* Ocupación */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Ocupación:</b>
            </div>
            <div className="col">{donante.ocupacion}</div>
          </div>
        </li>

        {/* Partos */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Partos:</b>
            </div>
            <div className="col">{donante.partos}</div>
          </div>
        </li>

        {/* Cesáreas */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Cesáreas:</b>
            </div>
            <div className="col">{donante.cesareas}</div>
          </div>
        </li>

        {/* Apellidos RN Lactante */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Apellidos RN Lactante:</b>
            </div>
            <div className="col">{donante.apellidosRNLactante}</div>
          </div>
        </li>

        {/* SDG */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>SDG:</b>
            </div>
            <div className="col">{donante.sdg}</div>
          </div>
        </li>

        {/* Fecha de Nacimiento RN */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Fecha de Nacimiento RN:</b>
            </div>
            <div className="col">
              {donante.fechaNacimRN
                ? moment(donante.fechaNacimRN).format('LL')
                : 'N/A'}
            </div>
          </div>
        </li>

        {/* Complicaciones de Embarazo */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Complicaciones de Embarazo:</b>
            </div>
            <div className="col">{donante.complicacionesEmbarazo}</div>
          </div>
        </li>

        {/* Transfusiones en los últimos 5 años */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Transfusiones en los últimos 5 años:</b>
            </div>
            <div className="col">{donante.transfusionesUltimos5Anos}</div>
          </div>
        </li>

        {/* Tatuajes, Piercings o Acupuntura en el último año */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Tatuajes, Piercings o Acupuntura en el último año:</b>
            </div>
            <div className="col">
              {donante.tatuajesPiercingsAcupunturaUltimoAno}
            </div>
          </div>
        </li>

        {/* Tratamiento Médico */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Tratamiento Médico:</b>
            </div>
            <div className="col">{donante.tratamientoMedico}</div>
          </div>
        </li>

        {/* Prueba Rápida Sífilis */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Prueba Rápida Sífilis:</b>
            </div>
            <div className="col">{donante.pruebaRapidaSifilis}</div>
          </div>
        </li>

        {/* Prueba Rápida VIH */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Prueba Rápida VIH:</b>
            </div>
            <div className="col">{donante.pruebaRapidaVIH}</div>
          </div>
        </li>

        {/* Prueba Rápida Hepatitis C */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Prueba Rápida Hepatitis C:</b>
            </div>
            <div className="col">{donante.pruebaRapidaHepatitisC}</div>
          </div>
        </li>

        {/* Observaciones */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Observaciones:</b>
            </div>
            <div className="col">{donante.observaciones}</div>
          </div>
        </li>

        {/* Fecha de Creación */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Fecha de Creación:</b>
            </div>
            <div className="col">{moment(donante.createdAt).format('LLL')}</div>
          </div>
        </li>

        {/* Última Modificación */}
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <b>Última Modificación:</b>
            </div>
            <div className="col">{moment(donante.updatedAt).format('LLL')}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DonanteDetails;
