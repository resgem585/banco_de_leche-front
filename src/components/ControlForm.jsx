import { useQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GET_DONANTE } from '../graphql/Queries';
import { UPDATE_CONTROL } from '../graphql/Mutation';

export const ControlForm = () => {
  const { id } = useParams(); // Donante ID obtenido de la URL
  const navigate = useNavigate();

  // Estado para mostrar el mensaje de éxito
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Consulta para obtener los datos del donante y su control asociado
  const { data, loading, error } = useQuery(GET_DONANTE, {
    variables: { id },
  });

  // Estado para el formulario, incluyendo todos los campos obligatorios
  const [input, setInput] = useState({
    numeroLeche: '',
    tipoLeche: 'MADURA',
    tipoDonacion: 'INTERNA',
    donadora: '',  // Campo obligatorio según el esquema
    ml: '',
    fechaExtraccion: '',
    horaExtraccion: '',
    sdg: '',  // Campo obligatorio según el esquema
    embalaje: 'CUMPLE',
    suciedad: 'CUMPLE',
    color: 'CUMPLE',
    olor: 'CUMPLE',
    crematocrito: '',
    acidezDornic: '',
    observaciones: 'NA',
    donanteId: '' // Campo obligatorio según el esquema
  });

  // Mutación para actualizar el control
  const [updateControl] = useMutation(UPDATE_CONTROL);

  // Efecto para prellenar el formulario con los datos existentes
  useEffect(() => {
    if (data && data.donante) {
      const donante = data.donante;
      const control = donante.control || {};

      setInput({
        numeroLeche: control.numeroLeche || '',
        tipoLeche: control.tipoLeche || 'MADURA',
        tipoDonacion: control.tipoDonacion || 'INTERNA',
        donadora: `${donante.firstName} ${donante.lastName}`, // Usar valor actual de donadora
        ml: control.ml || '',
        fechaExtraccion: control.fechaExtraccion ? control.fechaExtraccion.substr(0, 10) : '',
        horaExtraccion: control.horaExtraccion || '',
        sdg: donante.sdg || '', // Usar valor actual de sdg
        embalaje: control.embalaje || 'CUMPLE',
        suciedad: control.suciedad || 'CUMPLE',
        color: control.color || 'CUMPLE',
        olor: control.olor || 'CUMPLE',
        crematocrito: control.crematocrito || '',
        acidezDornic: control.acidezDornic || '',
        observaciones: control.observaciones || 'NA',
        donanteId: donante._id // Usar valor actual del donanteId
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convertir campos numéricos a Float si no están vacíos
    const newValue =
      ['ml', 'crematocrito', 'acidezDornic'].includes(name)
        ? value === '' ? '' : parseFloat(value)
        : value;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const controlId = data.donante.control ? data.donante.control._id : null;

      if (!controlId) {
        console.error('No existe un control asociado para actualizar.');
        return;
      }

      await updateControl({
        variables: {
          id: controlId,
          input: input, // Asegúrate de que se están enviando todos los campos obligatorios
        },
      });

      console.log('Control actualizado con éxito.');

      setShowSuccessMessage(true);

      // Redirigir a la página de detalles del control
      navigate(`/ControlDetalles/${controlId}`);
    } catch (error) {
      console.error('Error actualizando control:', error.message);
      console.error('Detalles del error:', error.graphQLErrors);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar el donante.</p>;
  if (!data.donante.control) return <p>No existe un control asociado a este donante.</p>;

  return (
    <form onSubmit={handleSubmit}>
      {/* Mostrar mensaje de éxito si corresponde */}
      {showSuccessMessage && (
        <div className="alert alert-success">
          ¡Control actualizado exitosamente!
        </div>
      )}

      {/* Formulario */}
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="numeroLeche">Número de Leche</label>
          <input
            type="text"
            className="form-control"
            id="numeroLeche"
            name="numeroLeche"
            value={input.numeroLeche}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="tipoLeche">Tipo de Leche</label>
          <select
            className="form-control"
            id="tipoLeche"
            name="tipoLeche"
            value={input.tipoLeche}
            onChange={handleChange}
            required
          >
            <option value="MADURA">MADURA</option>
            <option value="CALOSTRO">CALOSTRO</option>
            <option value="INTERMEDIA">INTERMEDIA</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="tipoDonacion">Tipo de Donación</label>
          <select
            className="form-control"
            id="tipoDonacion"
            name="tipoDonacion"
            value={input.tipoDonacion}
            onChange={handleChange}
            required
          >
            <option value="INTERNA">INTERNA</option>
            <option value="EXTERNA">EXTERNA</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="ml">Cantidad (mL)</label>
          <input
            type="number"
            className="form-control"
            id="ml"
            name="ml"
            value={input.ml}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="fechaExtraccion">Fecha de Extracción</label>
          <input
            type="date"
            className="form-control"
            id="fechaExtraccion"
            name="fechaExtraccion"
            value={input.fechaExtraccion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="horaExtraccion">Hora de Extracción</label>
          <input
            type="time"
            className="form-control"
            id="horaExtraccion"
            name="horaExtraccion"
            value={input.horaExtraccion}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="embalaje">Embalaje</label>
          <select
            className="form-control"
            id="embalaje"
            name="embalaje"
            value={input.embalaje}
            onChange={handleChange}
          >
            <option value="CUMPLE">CUMPLE</option>
            <option value="NO CUMPLE">NO CUMPLE</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="suciedad">Suciedad</label>
          <select
            className="form-control"
            id="suciedad"
            name="suciedad"
            value={input.suciedad}
            onChange={handleChange}
          >
            <option value="CUMPLE">CUMPLE</option>
            <option value="NO CUMPLE">NO CUMPLE</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="color">Color</label>
          <select
            className="form-control"
            id="color"
            name="color"
            value={input.color}
            onChange={handleChange}
          >
            <option value="CUMPLE">CUMPLE</option>
            <option value="NO CUMPLE">NO CUMPLE</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="olor">Olor</label>
          <select
            className="form-control"
            id="olor"
            name="olor"
            value={input.olor}
            onChange={handleChange}
          >
            <option value="CUMPLE">CUMPLE</option>
            <option value="NO CUMPLE">NO CUMPLE</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="crematocrito">Crematocrito</label>
          <input
            type="number"
            className="form-control"
            id="crematocrito"
            name="crematocrito"
            value={input.crematocrito}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="acidezDornic">Acidez DORNIC</label>
          <input
            type="number"
            className="form-control"
            id="acidezDornic"
            name="acidezDornic"
            value={input.acidezDornic}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3">
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
          <option value="MAL OLOR (VOMITO)">MAL OLOR (VÓMITO)</option>
          <option value="VOLUMEN INSUFICIENTE">VOLUMEN INSUFICIENTE</option>
        </select>
      </div>

      {/* Botón de envío */}
      <button type="submit" className="btn btn-primary">
        Actualizar Control
      </button>
    </form>
  );
};

export default ControlForm;
