import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_DONANTE } from '../graphql/Queries';
import { UPDATE_DONANTE } from '../graphql/Mutation';

function EditDonante() {
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const { id } = useParams();

  // Estado para almacenar todos los campos del donante
  const [donanteData, setDonanteData] = useState({
    tipo: '',
    firstName: '',
    lastName: '',
    edad: '',
    direccion: '',
    ocupacion: '',
    partos: '',
    cesareas: '',
    apellidosRNLactante: '',
    sdg: '',
    fechaNacimRN: '',
    complicacionesEmbarazo: '',
    transfusionesUltimos5Anos: '',
    tatuajesPiercingsAcupunturaUltimoAno: '',
    tratamientoMedico: '',
    pruebaRapidaSifilis: '',
    pruebaRapidaVIH: '',
    pruebaRapidaHepatitisC: '',
    observaciones: ''
  });

  const { data, loading, error } = useQuery(GET_DONANTE, {
    variables: { id },
    onCompleted: (data) => {
      if (data && data.donante) {
        setDonanteData(data.donante);
      }
    },
  });

  const [updateDonante] = useMutation(UPDATE_DONANTE);

  // Manejador para actualizar los valores del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonanteData({
      ...donanteData,
      [name]: value,
    });
  };

  // Manejador para enviar los datos del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateDonante({
        variables: {
          id: id,
          input: {
            tipo: donanteData.tipo,
            firstName: donanteData.firstName,
            lastName: donanteData.lastName,
            edad: parseInt(donanteData.edad),
            direccion: donanteData.direccion,
            ocupacion: donanteData.ocupacion,
            partos: parseInt(donanteData.partos),
            cesareas: parseInt(donanteData.cesareas),
            apellidosRNLactante: donanteData.apellidosRNLactante,
            sdg: parseInt(donanteData.sdg),
            fechaNacimRN: donanteData.fechaNacimRN,
            complicacionesEmbarazo: donanteData.complicacionesEmbarazo,
            transfusionesUltimos5Anos: donanteData.transfusionesUltimos5Anos,
            tatuajesPiercingsAcupunturaUltimoAno: donanteData.tatuajesPiercingsAcupunturaUltimoAno,
            tratamientoMedico: donanteData.tratamientoMedico,
            pruebaRapidaSifilis: donanteData.pruebaRapidaSifilis,
            pruebaRapidaVIH: donanteData.pruebaRapidaVIH,
            pruebaRapidaHepatitisC: donanteData.pruebaRapidaHepatitisC,
            observaciones: donanteData.observaciones
          }
        }
      });

      setUpdateSuccess(true);  // Mostrar el mensaje de éxito
    } catch (error) {
      console.error("Error updating donante:", error);
    }
  };

  if (loading) return 'Cargando...';
  if (error) return `Error! ${error.message}`;

  return (
    <form onSubmit={handleSubmit}>
      <div className="row form-group mb-2">
        <div className="col">
          <h1>EDIT ({donanteData.firstName} {donanteData.lastName})</h1>
        </div>
      </div>

      {/* Campos del formulario */}
      <div className="row form-group mb-2">
        <div className="col">
          <label htmlFor="tipo">Tipo</label>
          <select
            className="form-select"
            id="tipo"
            name="tipo"
            value={donanteData.tipo}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="Homóloga">Homóloga</option>
            <option value="Heteróloga">Heteróloga</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="firstName">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={donanteData.firstName}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Otros campos siguen... */}
      <div className="row form-group mb-2">
        <div className="col">
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={donanteData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="edad">Edad</label>
          <input
            type="number"
            className="form-control"
            id="edad"
            name="edad"
            value={donanteData.edad}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row form-group mb-2">
        <div className="col">
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            value={donanteData.direccion}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="ocupacion">Ocupación</label>
          <input
            type="text"
            className="form-control"
            id="ocupacion"
            name="ocupacion"
            value={donanteData.ocupacion}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row form-group mb-2">
        <div className="col">
          <label htmlFor="partos">Partos</label>
          <input
            type="number"
            className="form-control"
            id="partos"
            name="partos"
            value={donanteData.partos}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="cesareas">Cesáreas</label>
          <input
            type="number"
            className="form-control"
            id="cesareas"
            name="cesareas"
            value={donanteData.cesareas}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row form-group mb-2">
        <div className="col">
          <label htmlFor="apellidosRNLactante">Apellidos RN Lactante</label>
          <input
            type="text"
            className="form-control"
            id="apellidosRNLactante"
            name="apellidosRNLactante"
            value={donanteData.apellidosRNLactante}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="sdg">SDG</label>
          <input
            type="number"
            className="form-control"
            id="sdg"
            name="sdg"
            value={donanteData.sdg}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row form-group mb-2">
        <div className="col">
          <label htmlFor="fechaNacimRN">Fecha de Nacimiento RN</label>
          <input
            type="date"
            className="form-control"
            id="fechaNacimRN"
            name="fechaNacimRN"
            value={donanteData.fechaNacimRN}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="complicacionesEmbarazo">Complicaciones de Embarazo</label>
          <input
            type="text"
            className="form-control"
            id="complicacionesEmbarazo"
            name="complicacionesEmbarazo"
            value={donanteData.complicacionesEmbarazo}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row form-group mb-2">
        <div className="col">
          <label htmlFor="transfusionesUltimos5Anos">Transfusiones Últimos 5 Años</label>
          <select
            className="form-select"
            id="transfusionesUltimos5Anos"
            name="transfusionesUltimos5Anos"
            value={donanteData.transfusionesUltimos5Anos}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="tatuajesPiercingsAcupunturaUltimoAno">Tatuajes/Piercings/Acupuntura Último Año</label>
          <select
            className="form-select"
            id="tatuajesPiercingsAcupunturaUltimoAno"
            name="tatuajesPiercingsAcupunturaUltimoAno"
            value={donanteData.tatuajesPiercingsAcupunturaUltimoAno}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <div className="row form-group mb-2">
        <div className="col">
          <label htmlFor="tratamientoMedico">Tratamiento Médico</label>
          <input
            type="text"
            className="form-control"
            id="tratamientoMedico"
            name="tratamientoMedico"
            value={donanteData.tratamientoMedico}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="pruebaRapidaSifilis">Prueba Rápida Sífilis</label>
          <select
            className="form-select"
            id="pruebaRapidaSifilis"
            name="pruebaRapidaSifilis"
            value={donanteData.pruebaRapidaSifilis}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="No Reactivo">No Reactivo</option>
            <option value="Reactivo">Reactivo</option>
          </select>
        </div>
      </div>

      <div className="row form-group mb-2">
        <div className="col">
          <label htmlFor="pruebaRapidaVIH">Prueba Rápida VIH</label>
          <select
            className="form-select"
            id="pruebaRapidaVIH"
            name="pruebaRapidaVIH"
            value={donanteData.pruebaRapidaVIH}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="No Reactivo">No Reactivo</option>
            <option value="Reactivo">Reactivo</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="pruebaRapidaHepatitisC">Prueba Rápida Hepatitis C</label>
          <select
            className="form-select"
            id="pruebaRapidaHepatitisC"
            name="pruebaRapidaHepatitisC"
            value={donanteData.pruebaRapidaHepatitisC}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="No Reactivo">No Reactivo</option>
            <option value="Reactivo">Reactivo</option>
          </select>
        </div>
      </div>

      <div className="row form-group mb-2">
        <div className="col">
          <label htmlFor="observaciones">Observaciones</label>
          <textarea
            className="form-control"
            id="observaciones"
            name="observaciones"
            value={donanteData.observaciones}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row form-group mb-2">
        <div className="col">
          <button type="submit" className="btn btn-primary">
            ACTUALIZAR
          </button>

          {updateSuccess && (
            <div className="alert alert-success mt-2">
              ¡Se ha actualizado con éxito!{" "}
              <a href="/listaDonadoras" className="alert-link">
                VER REGISTRO
              </a>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default EditDonante;
