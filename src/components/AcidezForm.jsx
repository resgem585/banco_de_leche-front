import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import { CREATE_ACIDEZDORNIC } from '../graphql/Mutation';

const AcidezForm = () => {
  const { id: controlId } = useParams(); // Usar controlId como identificador del control
  const navigate = useNavigate();

  const [createAcidezDornic] = useMutation(CREATE_ACIDEZDORNIC);

  // Estado inicial para los campos del formulario
  const [input, setInput] = useState({
    m1: '',
    m2: '',
    m3: '',
    fact: '1',
    obs: 'NA',
  });

  // Manejador para actualizar los valores del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  // Manejador para enviar los datos del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convertir a números y validar
    const m1 = parseFloat(input.m1);
    const m2 = parseFloat(input.m2);
    const m3 = parseFloat(input.m3);
    const fact = parseFloat(input.fact);

    if (isNaN(m1) || isNaN(m2) || isNaN(m3) || isNaN(fact)) {
      alert('Por favor, ingresa valores numéricos válidos en M1, M2, M3 y Factor.');
      return;
    }

    // Calcular prom y resultado
    const prom = ((m1 + m2 + m3) / 3).toFixed(2);
    const resultado = (prom * fact).toFixed(2);

    try {
      const { data } = await createAcidezDornic({
        variables: {
          input: {
            numeroLeche: controlId, // Asegúrate de que el controlId sea el correcto
            m1,
            m2,
            m3,
            prom: parseFloat(prom),
            fact,
            resultado: parseFloat(resultado),
            obs: input.obs,
          },
        },
      });

      const newAcidezDornicId = data.createAcidezDornic._id; // Obtener el ID del nuevo registro
      alert('Acidez Dornic agregada con éxito');
      navigate(`/AcidezDetalles/${newAcidezDornicId}`); // Redirigir a los detalles del registro
    } catch (error) {
      console.error('Error al crear el registro de Acidez Dornic:', error);
      alert('Error al crear el registro de Acidez Dornic. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="container">
      <h2>Agregar Acidez Dornic</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="m1">M1</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="m1"
              name="m1"
              value={input.m1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="m2">M2</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="m2"
              name="m2"
              value={input.m2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="m3">M3</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="m3"
              name="m3"
              value={input.m3}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Campo para 'fact' */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="fact">Factor</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="fact"
              name="fact"
              value={input.fact}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Observaciones */}
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="obs">Observaciones</label>
            <select
              className="form-control"
              id="obs"
              name="obs"
              value={input.obs}
              onChange={handleChange}
            >
              <option value="NA">NA</option>
              <option value="ACIDEZ ˃8°D">ACIDEZ ˃8°D</option>
              <option value="PRECIPITACIÓN DE CASEÍNA">PRECIPITACIÓN DE CASEÍNA</option>
              <option value="MAL OLOR (VÓMITO)">MAL OLOR (VÓMITO)</option>
              <option value="VOLUMEN INSUFICIENTE">VOLUMEN INSUFICIENTE</option>
            </select>
          </div>
        </div>
        {/* Botón de envío */}
        <button type="submit" className="btn btn-primary">
          Agregar Acidez Dornic
        </button>
      </form>
    </div>
  );
};

export default AcidezForm;
