import { gql } from "@apollo/client"
// USER
export const CREATE_USER = gql `
mutation createUser($email:String!, $password: String!) {
  createUser(email:$email, password:$password){
    email
    password
  }
}
`
export const UPDATE_USER = gql`



mutation updateUser($_id: ID,$email:String, $password:String){
  updateUser(_id: $_id,email:$email, password:$password){
    _id
    email
    password
  }
}
`
export const DELETE_USER = gql`
  mutation deleteUser($_id: ID) {
    deleteUser(_id: $_id) {
      _id
      email
      password
    }
  }
`;
// Donante

export const CREATE_DONANTE = gql`
  mutation createDonante(
    $tipo: String,
    $firstName: String,
    $lastName: String,
    $edad: Int,
    $direccion: String,
    $ocupacion: String,
    $partos: Int,
    $cesareas: Int,
    $apellidosRNLactante: String,
    $sdg: Int,
    $fechaNacimRN: String,
    $complicacionesEmbarazo: String,
    $transfusionesUltimos5Anos: String,
    $tatuajesPiercingsAcupunturaUltimoAno: String,
    $tratamientoMedico: String,
    $pruebaRapidaSifilis: String,
    $pruebaRapidaVIH: String,
    $pruebaRapidaHepatitisC: String,
    $observaciones: String
  ) {
    createDonante(
      tipo: $tipo,
      firstName: $firstName,
      lastName: $lastName,
      edad: $edad,
      direccion: $direccion,
      ocupacion: $ocupacion,
      partos: $partos,
      cesareas: $cesareas,
      apellidosRNLactante: $apellidosRNLactante,
      sdg: $sdg,
      fechaNacimRN: $fechaNacimRN,
      complicacionesEmbarazo: $complicacionesEmbarazo,
      transfusionesUltimos5Anos: $transfusionesUltimos5Anos,
      tatuajesPiercingsAcupunturaUltimoAno: $tatuajesPiercingsAcupunturaUltimoAno,
      tratamientoMedico: $tratamientoMedico,
      pruebaRapidaSifilis: $pruebaRapidaSifilis,
      pruebaRapidaVIH: $pruebaRapidaVIH,
      pruebaRapidaHepatitisC: $pruebaRapidaHepatitisC,
      observaciones: $observaciones

    ) {
      tipo
      firstName
      lastName
      edad
      direccion
      ocupacion
      partos
      cesareas
      apellidosRNLactante
      sdg
      fechaNacimRN
      complicacionesEmbarazo
      transfusionesUltimos5Anos
      tatuajesPiercingsAcupunturaUltimoAno
      tratamientoMedico
      pruebaRapidaSifilis
      pruebaRapidaVIH
      pruebaRapidaHepatitisC
      observaciones
    }
  }
`;
export const UPDATE_DONANTE = gql`
  mutation updateDonante(
    $_id: ID!,
    $tipo: String,
    $firstName: String,
    $lastName: String,
    $edad: Int,
    $direccion: String,
    $ocupacion: String,
    $partos: Int,
    $cesareas: Int,
    $apellidosRNLactante: String,
    $sdg: Int,
    $fechaNacimRN: String,
    $complicacionesEmbarazo: String,
    $transfusionesUltimos5Anos: String,
    $tatuajesPiercingsAcupunturaUltimoAno: String,
    $tratamientoMedico: String,
    $pruebaRapidaSifilis: String,
    $pruebaRapidaVIH: String,
    $pruebaRapidaHepatitisC: String,
    $observaciones: String
    
  ) {
    updateDonante(
      _id: $_id,
      tipo: $tipo,
      firstName: $firstName,
      lastName: $lastName,
      edad: $edad,
      direccion: $direccion,
      ocupacion: $ocupacion,
      partos: $partos,
      cesareas: $cesareas,
      apellidosRNLactante: $apellidosRNLactante,
      sdg: $sdg,
      fechaNacimRN: $fechaNacimRN,
      complicacionesEmbarazo: $complicacionesEmbarazo,
      transfusionesUltimos5Anos: $transfusionesUltimos5Anos,
      tatuajesPiercingsAcupunturaUltimoAno: $tatuajesPiercingsAcupunturaUltimoAno,
      tratamientoMedico: $tratamientoMedico,
      pruebaRapidaSifilis: $pruebaRapidaSifilis,
      pruebaRapidaVIH: $pruebaRapidaVIH,
      pruebaRapidaHepatitisC: $pruebaRapidaHepatitisC,
      observaciones: $observaciones
    ) {
      _id
      tipo
      firstName
      lastName
      edad
      direccion
      ocupacion
      partos
      cesareas
      apellidosRNLactante
      sdg
      fechaNacimRN
      complicacionesEmbarazo
      transfusionesUltimos5Anos
      tatuajesPiercingsAcupunturaUltimoAno
      tratamientoMedico
      pruebaRapidaSifilis
      pruebaRapidaVIH
      pruebaRapidaHepatitisC
      observaciones
    }
  }
`;
export const DELETE_DONANTE = gql`
  mutation deleteDonante($_id: ID!) {
    deleteDonante(_id: $_id) {
      _id
      tipo
      firstName
      lastName
      edad
      direccion
      ocupacion
      partos
      cesareas
      apellidosRNLactante
      sdg
      fechaNacimRN
      complicacionesEmbarazo
      transfusionesUltimos5Anos
      tatuajesPiercingsAcupunturaUltimoAno
      tratamientoMedico
      pruebaRapidaSifilis
      pruebaRapidaVIH
      pruebaRapidaHepatitisC
      observaciones
    }
  }
`;
// Calidad

export const CREATE_CALIDAD = gql`
  mutation CREATE_CALIDAD($donante: ID!, $olor: String!) {
  createCalidad(donante: $donante, olor: $olor) {
    _id
    donante {
      _id
      firstName
    }
   
  }
}
`;

export const UPDATE_CALIDAD = gql`
  mutation updateCalidad($_id: ID!, $donante: String, $olor: String) {
    updateCalidad(_id: $_id, donante: $donante, olor: $olor) {
      _id
      donante
      olor
    }
  }
`;

export const DELETE_CALIDAD = gql`
  mutation deleteCalidad($_id: ID!) {
    deleteCalidad(_id: $_id) {
      _id
    }
  }
`;