import { useQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GET_DONANTE } from '../graphql/Queries';  // Importa la query GET_DONANTE
import { CREATE_CONTROL } from '../graphql/Mutation';

export const ControlForm = () => {
  const { id } = useParams(); // Donante ID
  const navigate = useNavigate();

  // Estado para mostrar el mensaje de éxito
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Query para obtener el donante
  const { data, loading, error } = useQuery(GET_DONANTE, {
    variables: { id }, // id es el donanteId
  });

  const [input, setInput] = useState({
    numeroLeche: '',
    tipoLeche: 'MADURA',  // Valor por defecto
    tipoDonacion: 'INTERNA',  // Valor por defecto
    donadora: '',
    ml: '',
    fechaExtraccion: '',  // Campo de fecha de extracción
    horaExtraccion: '',  // Campo de hora de extracción
    sdg: '',  // Este se va a rellenar automáticamente
    embalaje: 'CUMPLE',  // Valor por defecto
    suciedad: 'CUMPLE',  // Valor por defecto
    color: 'CUMPLE',  // Valor por defecto
    olor: 'CUMPLE',  // Valor por defecto
    crematocrito: '',
    acidezDornic: '',
    observaciones: 'NA',  // Valor por defecto
  });

  // Actualizamos el valor del campo SDG una vez que tengamos los datos del donante
  useEffect(() => {
    if (data && data.donante) {
      setInput((prevInput) => ({
        ...prevInput,
        donadora: `${data.donante.firstName} ${data.donante.lastName}`,
        sdg: data.donante.sdg // Rellenamos automáticamente el SDG
      }));
    }
  }, [data]);

  const [createControl] = useMutation(CREATE_CONTROL);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Convertimos los campos numéricos a Float si no están vacíos
    const newValue =
      name === 'ml' || name === 'crematocrito' || name === 'acidezDornic' || name === 'sdg'
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
      const { data } = await createControl({
        variables: {
          input: { ...input, donanteId: id }
        }
      });
  
      console.log('Control creado con éxito:', data);  // Verifica qué datos está devolviendo el backend
  
      setShowSuccessMessage(true);
  
      // Redirige o realiza otra acción
    } catch (error) {
      console.error('Error creando control:', error.message);
      console.error('Detalles del error:', error.graphQLErrors);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar el donante.</p>;

  return (
    <form onSubmit={handleSubmit}>
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
          <label htmlFor="donadora">Donadora</label>
          <input
            type="text"
            className="form-control"
            id="donadora"
            name="donadora"
            value={input.donadora}  // Nombre completo del donante
            readOnly
          />
        </div>
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
          <label htmlFor="sdg">SDG</label>
          <input
            type="number"
            className="form-control"
            id="sdg"
            name="sdg"
            value={input.sdg} // Pre-poblar el SDG
            readOnly // Este campo es solo de lectura ya que se obtiene del donante
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
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
        <div className="col-md-6">
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
        <div className="col-md-4">
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
        <div className="col-md-4">
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
        <div className="col-md-4">
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
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
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
        <div className="col-md-4">
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
        <div className="col-md-4">
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
          <option value="PRECIPITACION DE CASEINA">PRECIPITACION DE CASEINA</option>
          <option value="MAL OLOR (VOMITO)">MAL OLOR (VOMITO)</option>
          <option value="VOLUMEN INSUFICIENTE">VOLUMEN INSUFICIENTE</option>
        </select>
      </div>

      {/* Mensaje de éxito */}
      {showSuccessMessage && (
        <div className="alert alert-success">
          ¡Control agregado exitosamente!
        </div>
      )}

      {/* Botón de envío */}
      <button type="submit" className="btn btn-primary">
        Agregar Control
      </button>
    </form>
  );
};
