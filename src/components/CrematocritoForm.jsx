import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import { CREATE_CREMATOCRITO } from '../graphql/Mutation';

const CrematocritoForm = () => {
  const { id: controlId } = useParams(); // Usar controlId como identificador del control
  const navigate = useNavigate();

  const [createCrematocrito] = useMutation(CREATE_CREMATOCRITO);

  // Estado inicial para los campos del formulario
  const [input, setInput] = useState({
    columnaTotal1: '',
    columnaTotal2: '',
    columnaTotal3: '',
    promTotal: '',
    columnaCrema1: '',
    columnaCrema2: '',
    columnaCrema3: '',
    promCrema: '',
    porcentajeCrema: '',
    porcentajeGrasa: '',
    kcalLitro: '',
    observaciones: 'NA',
  });

  // Manejador para actualizar los valores del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = value === '' ? '' : parseFloat(value);
    setInput((prevInput) => ({
      ...prevInput,
      [name]: isNaN(newValue) ? value : newValue,
    }));
  };

  // Manejador para enviar los datos del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createCrematocrito({
        variables: {
          input: {
            ...input,
            numeroLeche: controlId, // Asegúrate de que el controlId sea el correcto
          },
        },
      });

      const newCrematocritoId = data.createCrematocrito._id; // Obtener el ID del nuevo crematocrito
      alert('Crematocrito agregado con éxito');
      navigate(`/CrematocritoDetalles/${newCrematocritoId}`); // Redirigir a los detalles del crematocrito
    } catch (error) {
      console.error('Error al crear el crematocrito:', error);
      alert('Error al crear el crematocrito. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="container">
      <h2>Agregar Crematocrito</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="columnaTotal1">Columna Total 1</label>
            <input
              type="number"
              className="form-control"
              id="columnaTotal1"
              name="columnaTotal1"
              value={input.columnaTotal1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="columnaTotal2">Columna Total 2</label>
            <input
              type="number"
              className="form-control"
              id="columnaTotal2"
              name="columnaTotal2"
              value={input.columnaTotal2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="columnaTotal3">Columna Total 3</label>
            <input
              type="number"
              className="form-control"
              id="columnaTotal3"
              name="columnaTotal3"
              value={input.columnaTotal3}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="promTotal">Promedio Total</label>
            <input
              type="number"
              className="form-control"
              id="promTotal"
              name="promTotal"
              value={input.promTotal}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="columnaCrema1">Columna de Crema 1</label>
            <input
              type="number"
              className="form-control"
              id="columnaCrema1"
              name="columnaCrema1"
              value={input.columnaCrema1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="columnaCrema2">Columna de Crema 2</label>
            <input
              type="number"
              className="form-control"
              id="columnaCrema2"
              name="columnaCrema2"
              value={input.columnaCrema2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="columnaCrema3">Columna de Crema 3</label>
            <input
              type="number"
              className="form-control"
              id="columnaCrema3"
              name="columnaCrema3"
              value={input.columnaCrema3}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="promCrema">Promedio de Crema</label>
            <input
              type="number"
              className="form-control"
              id="promCrema"
              name="promCrema"
              value={input.promCrema}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="porcentajeCrema">% Crema</label>
            <input
              type="number"
              className="form-control"
              id="porcentajeCrema"
              name="porcentajeCrema"
              value={input.porcentajeCrema}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="porcentajeGrasa">% Grasa</label>
            <input
              type="number"
              className="form-control"
              id="porcentajeGrasa"
              name="porcentajeGrasa"
              value={input.porcentajeGrasa}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="kcalLitro">Kcal/L</label>
            <input
              type="number"
              className="form-control"
              id="kcalLitro"
              name="kcalLitro"
              value={input.kcalLitro}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="observaciones">Observaciones</label>
            <select
              className="form-control"
              id="observaciones"
              name="observaciones"
              value={input.observaciones}
              onChange={handleChange}
            >
              <option value="NA">NA</option>
              <option value="ACIDEZ ˃8°D">ACIDEZ ˃8°D</option>
              <option value="PRECIPITACION DE CASEINA">PRECIPITACIÓN DE CASEÍNA</option>
              <option value="MAL OLOR (VÓMITO)">MAL OLOR (VÓMITO)</option>
              <option value="VOLUMEN INSUFICIENTE">VOLUMEN INSUFICIENTE</option>
            </select>
          </div>
        </div>
        {/* Botón de envío */}
        <button type="submit" className="btn btn-primary">
          Agregar Crematocrito
        </button>
      </form>
    </div>
  );
};

export default CrematocritoForm;
