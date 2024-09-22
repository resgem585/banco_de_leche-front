import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { GET_CREMATOCRITO } from '../graphql/Queries'; // Asegúrate de tener definida esta consulta
import moment from 'moment';

const CrematocritoDetails = () => {
  const { id } = useParams(); // Obtener el ID del crematocrito desde la URL
  const { loading, error, data } = useQuery(GET_CREMATOCRITO, {
    variables: { id }, // Usar el ID en las variables de la consulta
  });

  if (loading) return <p>Cargando detalles del crematocrito...</p>;
  if (error) return <p>Error al cargar los detalles del crematocrito: {error.message}</p>;

  if (!data || !data.crematocrito) {
    return <div>No se encontraron detalles del crematocrito.</div>;
  }

  const crematocrito = data.crematocrito;

  return (
    <div className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Detalles del Crematocrito</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link to={`/EditarCrematocrito/${crematocrito._id}`} className="btn btn-sm btn-warning">
              Editar Crematocrito
            </Link>
          </div>
        </div>
      </div>

      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Número de Leche:</b>
            </div>
            <div className="col">{crematocrito.numeroLeche.numeroLeche}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Columna Total 1:</b>
            </div>
            <div className="col">{crematocrito.columnaTotal1}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Columna Total 2:</b>
            </div>
            <div className="col">{crematocrito.columnaTotal2}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Columna Total 3:</b>
            </div>
            <div className="col">{crematocrito.columnaTotal3}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Promedio Total:</b>
            </div>
            <div className="col">{crematocrito.promTotal}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Columna de Crema 1:</b>
            </div>
            <div className="col">{crematocrito.columnaCrema1}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Columna de Crema 2:</b>
            </div>
            <div className="col">{crematocrito.columnaCrema2}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Columna de Crema 3:</b>
            </div>
            <div className="col">{crematocrito.columnaCrema3}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Promedio de Crema:</b>
            </div>
            <div className="col">{crematocrito.promCrema}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>% Crema:</b>
            </div>
            <div className="col">{crematocrito.porcentajeCrema}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>% Grasa:</b>
            </div>
            <div className="col">{crematocrito.porcentajeGrasa}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Kcal/L:</b>
            </div>
            <div className="col">{crematocrito.kcalLitro}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Observaciones:</b>
            </div>
            <div className="col">{crematocrito.observaciones}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Fecha de Creación:</b>
            </div>
            <div className="col">
              {moment(crematocrito.createdAt).format('LLLL')}
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Última Modificación:</b>
            </div>
            <div className="col">
              {moment(crematocrito.updatedAt).format('LLLL')}
            </div>
          </div>
        </li>
      </ul>

      <div className="mt-3">
        <Link to={`/EditarCrematocrito/${crematocrito._id}`} className="btn btn-warning me-2">
          Editar Crematocrito
        </Link>
        <Link to={`/ControlDetalles/${crematocrito.numeroLeche._id}`} className="btn btn-secondary">
          Volver a Detalles del Control
        </Link>
      </div>
    </div>
  );
};

export default CrematocritoDetails;
