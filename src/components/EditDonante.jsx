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
          id: id,  // Cambiado a `id` en lugar de `_id`
          input: {  // Asegúrate de que estás pasando los datos correctamente en el objeto `input`
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
