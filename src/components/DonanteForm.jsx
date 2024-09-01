import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUTATIONS
import { CREATE_DONANTE } from "../graphql/Mutation";
import { GET_DONANTES } from "../graphql/Queries";

export const DonanteForm = () => {
  const navigate = useNavigate();

  // Estados para el Formulario
  const [tipo, setTipo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [edad, setEdad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [partos, setPartos] = useState("");
  const [cesareas, setCesareas] = useState("");
  const [apellidosRNLactante, setApellidosRNLactante] = useState("");
  const [sdg, setSdg] = useState("");
  const [fechaNacimRN, setFechaNacimRN] = useState("");
  const [complicacionesEmbarazo, setComplicacionesEmbarazo] = useState("");
  const [transfusionesUltimos5Anos, setTransfusionesUltimos5Anos] = useState("");
  const [tatuajesPiercingsAcupunturaUltimoAno, setTatuajesPiercingsAcupunturaUltimoAno] = useState(
    ""
  );
  const [tratamientoMedico, setTratamientoMedico] = useState("");
  const [pruebaRapidaSifilis, setPruebaRapidaSifilis] = useState("");
  const [pruebaRapidaVIH, setPruebaRapidaVIH] = useState("");
  const [pruebaRapidaHepatitisC, setPruebaRapidaHepatitisC] = useState("");
  const [observaciones, setObservaciones] = useState("");

  // Mutación para crear un donante
  const [createDonante] = useMutation(CREATE_DONANTE, {
    refetchQueries: [{ query: GET_DONANTES }],
  });

  // Estado para mostrar el mensaje de éxito
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createDonante({
        variables: {
          input: {
            tipo,
            firstName,
            lastName,
            edad: 30, // Ejemplo, sustituye con los datos reales
            direccion: "123 Street",
            ocupacion: "Engineer",
            partos: 2,
            cesareas: 1,
            apellidosRNLactante: "Doe",
            sdg: 36,
            fechaNacimRN: "2024-08-08",
            complicacionesEmbarazo: "None",
            transfusionesUltimos5Anos: "No",
            tatuajesPiercingsAcupunturaUltimoAno: "No",
            tratamientoMedico: "None",
            pruebaRapidaSifilis: "No Reactivo",
            pruebaRapidaVIH: "No Reactivo",
            pruebaRapidaHepatitisC: "No Reactivo",
            observaciones: "None",
          },
        },
      });

    // Mostrar el mensaje de éxito
    setShowSuccessMessage(true);
  };

  return (
    <form onSubmit={handleSubmit}>
  <div className="row mb-3">
    <div className="col-md-4">
      <label htmlFor="tipo">Tipo</label>
      <select className="form-control" id="tipo" name="tipo" required value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Seleccione una opción</option>
        <option value="Homóloga">Homóloga</option>
        <option value="Heteróloga">Heteróloga</option>
      </select>
    </div>
    <div className="col-md-4">
      <label htmlFor="firstName">Nombre</label>
      <input type="text" className="form-control" id="firstName" name="firstName" value={firstName} required onChange={(e) => setFirstName(e.target.value)} />
    </div>
    <div className="col-md-4">
      <label htmlFor="lastName">Apellidos</label>
      <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} required onChange={(e) => setLastName(e.target.value)} />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-2">
      <label htmlFor="edad">Edad</label>
      <input type="number" className="form-control" id="edad" name="edad" value={edad} required min="1" onChange={(e) => setEdad(e.target.value)} />
    </div>
    <div className="col-md-10">
      <label htmlFor="direccion">Dirección</label>
      <input type="text" className="form-control" id="direccion" name="direccion" value={direccion} required onChange={(e) => setDireccion(e.target.value)} />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-4">
      <label htmlFor="ocupacion">Ocupación</label>
      <input type="text" className="form-control" id="ocupacion" name="ocupacion" value={ocupacion} onChange={(e) => setOcupacion(e.target.value)} />
    </div>
    <div className="col-md-4">
      <label htmlFor="partos">Partos</label>
      <input type="number" className="form-control" id="partos" name="partos" value={partos} onChange={(e) => setPartos(e.target.value)} />
    </div>
    <div className="col-md-4">
      <label htmlFor="cesareas">Cesáreas</label>
      <input type="number" className="form-control" id="cesareas" name="cesareas" value={cesareas} onChange={(e) => setCesareas(e.target.value)} />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-6">
      <label htmlFor="apellidosRNLactante">Apellidos del RN o Lactante</label>
      <input type="text" className="form-control" id="apellidosRNLactante" name="apellidosRNLactante" value={apellidosRNLactante} onChange={(e) => setApellidosRNLactante(e.target.value)} />
    </div>
    <div className="col-md-3">
      <label htmlFor="sdg">Semanas de gestación (SDG)</label>
      <input type="number" className="form-control" id="sdg" name="sdg" value={sdg} required onChange={(e) => setSdg(e.target.value)} />
    </div>
    <div className="col-md-3">
      <label htmlFor="fechaNacimRN">Fecha de Nacim. RN</label>
      <input type="date" className="form-control" id="fechaNacimRN" name="fechaNacimRN" value={fechaNacimRN} required onChange={(e) => setFechaNacimRN(e.target.value)} />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-12">
      <label htmlFor="complicacionesEmbarazo">¿Ha tenido alguna complicación durante el embarazo?</label>
      <input type="text" className="form-control" id="complicacionesEmbarazo" name="complicacionesEmbarazo" value={complicacionesEmbarazo} onChange={(e) => setComplicacionesEmbarazo(e.target.value)} />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-4">
      <label htmlFor="transfusionesUltimos5Anos">¿Ha recibido transfusiones en los últimos 5 años?</label>
      <select className="form-control" id="transfusionesUltimos5Anos" name="transfusionesUltimos5Anos" required value={transfusionesUltimos5Anos} onChange={(e) => setTransfusionesUltimos5Anos(e.target.value)}>
        <option value="">Seleccione una opción</option>
        <option value="Sí">Sí</option>
        <option value="No">No</option>
      </select>
    </div>
    <div className="col-md-4">
      <label htmlFor="tatuajesPiercingsAcupunturaUltimoAno">¿Tiene tatuajes, piercings o se ha realizado acupuntura en el último año?</label>
      <select className="form-control" id="tatuajesPiercingsAcupunturaUltimoAno" name="tatuajesPiercingsAcupunturaUltimoAno" required value={tatuajesPiercingsAcupunturaUltimoAno} onChange={(e) => setTatuajesPiercingsAcupunturaUltimoAno(e.target.value)}>
        <option value="">Seleccione una opción</option>
        <option value="Sí">Sí</option>
        <option value="No">No</option>
      </select>
    </div>
    <div className="col-md-4">
      <label htmlFor="tratamientoMedico">Tratamiento médico</label>
      <input type="text" className="form-control" id="tratamientoMedico" name="tratamientoMedico" value={tratamientoMedico} onChange={(e) => setTratamientoMedico(e.target.value)} />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-4">
      <label htmlFor="pruebaRapidaSifilis">Prueba Rapida Sifilis</label>
      <select className="form-control" id="pruebaRapidaSifilis" name="pruebaRapidaSifilis" required value={pruebaRapidaSifilis} onChange={(e) => setPruebaRapidaSifilis(e.target.value)}>
        <option value="">Seleccione una opción</option>
        <option value="No Reactivo">No Reactivo</option>
        <option value="Reactivo">Reactivo</option>
      </select>
    </div>
    <div className="col-md-4">
      <label htmlFor="pruebaRapidaVIH">Prueba Rapida VIH</label>
      <select className="form-control" id="pruebaRapidaVIH" name="pruebaRapidaVIH" required value={pruebaRapidaVIH} onChange={(e) => setPruebaRapidaVIH(e.target.value)}>
        <option value="">Seleccione una opción</option>
        <option value="No Reactivo">No Reactivo</option>
        <option value="Reactivo">Reactivo</option>
      </select>
    </div>
    <div className="col-md-4">
      <label htmlFor="pruebaRapidaHepatitisC">Prueba Rápida Hepatitis C</label>
      <select className="form-control" id="pruebaRapidaHepatitisC" name="pruebaRapidaHepatitisC" required value={pruebaRapidaHepatitisC} onChange={(e) => setPruebaRapidaHepatitisC(e.target.value)}>
        <option value="">Seleccione una opción</option>
        <option value="No Reactivo">No Reactivo</option>
        <option value="Reactivo">Reactivo</option>
      </select>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-md-12">
      <label htmlFor="observaciones">Observaciones</label>
      <textarea className="form-control" id="observaciones" name="observaciones" rows="3" value={observaciones} onChange={(e) => setObservaciones(e.target.value)}></textarea>
    </div>
  </div>

  <div className="form-group">
    <button type="submit" className="btn btn-primary">Agregar Donante</button>
  </div>

  {showSuccessMessage && (
    <div className="alert alert-success">
      ¡Registro Exitoso!{" "}
      <a href="/listaDonadoras" className="alert-link">VER REGISTRO</a>
    </div>
  )}
</form>

  );
};