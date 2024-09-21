import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_CONTROL } from '../graphql/Queries';
import moment from 'moment';

const ControlDetails = () => {
  const { id: controlId } = useParams(); // Obtener el controlId desde la URL

  const { loading, error, data } = useQuery(GET_CONTROL, {
    variables: { id: controlId },
  });

  if (loading) return <p>Cargando detalles del control...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.control) {
    return <p>No hay control disponible.</p>;
  }

  const control = data.control;

  return (
    <div className="container">
      <h2>Detalles del Control</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <b>Número de Leche:</b> {control.numeroLeche}
        </li>
        <li className="list-group-item">
          <b>Tipo de Leche:</b> {control.tipoLeche}
        </li>
        <li className="list-group-item">
          <b>Tipo de Donación:</b> {control.tipoDonacion}
        </li>
        <li className="list-group-item">
          <b>Donadora:</b> {control.donadora}  {/* Aquí ya puedes mostrar el nombre completo del donante */}
        </li>
        <li className="list-group-item">
          <b>Cantidad (mL):</b> {control.ml}
        </li>
        <li className="list-group-item">
          <b>Fecha de Extracción:</b> {control.fechaExtraccion}
        </li>
        <li className="list-group-item">
          <b>Hora de Extracción:</b> {control.horaExtraccion}
        </li>
        <li className="list-group-item">
          <b>SDG:</b> {control.sdg}
        </li>
        <li className="list-group-item">
          <b>Embalaje:</b> {control.embalaje}
        </li>
        <li className="list-group-item">
          <b>Suciedad:</b> {control.suciedad}
        </li>
        <li className="list-group-item">
          <b>Color:</b> {control.color}
        </li>
        <li className="list-group-item">
          <b>Olor:</b> {control.olor}
        </li>
        <li className="list-group-item">
          <b>Crematocrito:</b> {control.crematocrito}
        </li>
        <li className="list-group-item">
          <b>Acidez Dornic:</b> {control.acidezDornic}
        </li>
        <li className="list-group-item">
          <b>Observaciones:</b> {control.observaciones}
        </li>
      </ul>
    </div>
  );
};

export default ControlDetails;
