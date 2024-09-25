import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { GET_ACIDEZDORNIC } from '../graphql/Queries'; // Asegúrate de tener definida esta consulta
import moment from 'moment';

const AcidezDetails = () => {
  const { id } = useParams(); // Obtener el ID del registro de Acidez Dornic desde la URL
  const { loading, error, data } = useQuery(GET_ACIDEZDORNIC, {
    variables: { id }, // Usar el ID en las variables de la consulta
  });

  if (loading) return <p>Cargando detalles de Acidez Dornic...</p>;
  if (error) return <p>Error al cargar los detalles de Acidez Dornic: {error.message}</p>;

  if (!data || !data.acidezDornic) {
    return <div>No se encontraron detalles de Acidez Dornic.</div>;
  }

  const acidezDornic = data.acidezDornic;

  return (
    <div className="container">
      {/* Encabezado y botón de acción */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Detalles de Acidez Dornic</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link to={`/EditarAcidezDornic/${acidezDornic._id}`} className="btn btn-sm btn-warning">
              Editar Acidez Dornic
            </Link>
          </div>
        </div>
      </div>

      {/* Lista de detalles */}
      <ul className="list-group">
        {/* Número de Leche */}
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Número de Leche:</b>
            </div>
            <div className="col">{acidezDornic.numeroLeche.numeroLeche}</div>
          </div>
        </li>
        {/* M1 */}
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>M1:</b>
            </div>
            <div className="col">{acidezDornic.m1}</div>
          </div>
        </li>
        {/* M2 */}
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>M2:</b>
            </div>
            <div className="col">{acidezDornic.m2}</div>
          </div>
        </li>
        {/* M3 */}
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>M3:</b>
            </div>
            <div className="col">{acidezDornic.m3}</div>
          </div>
        </li>
        {/* Promedio */}
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Promedio (Prom):</b>
            </div>
            <div className="col">{acidezDornic.prom}</div>
          </div>
        </li>
        {/* Factor */}
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Factor (Fact):</b>
            </div>
            <div className="col">{acidezDornic.fact}</div>
          </div>
        </li>
        {/* Resultado */}
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Resultado:</b>
            </div>
            <div className="col">{acidezDornic.resultado}</div>
          </div>
        </li>
        {/* Observaciones */}
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Observaciones:</b>
            </div>
            <div className="col">{acidezDornic.obs}</div>
          </div>
        </li>
        {/* Fecha de Creación */}
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Fecha de Creación:</b>
            </div>
            <div className="col">
              {moment(acidezDornic.createdAt).format('LLLL')}
            </div>
          </div>
        </li>
        {/* Última Modificación */}
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <b>Última Modificación:</b>
            </div>
            <div className="col">
              {moment(acidezDornic.updatedAt).format('LLLL')}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AcidezDetails;
