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
    }
  }
`;
// Donante

export const CREATE_DONANTE = gql`
  mutation createDonante($input: DonanteInput!) {
    createDonante(input: $input) {
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
    $id: ID!,
    $input: DonanteInput!
  ) {
    updateDonante(
      id: $id,
      input: $input
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