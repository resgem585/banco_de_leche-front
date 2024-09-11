import {gql} from '@apollo/client'


export const LOGIN =  gql`
query login($email:String, $password: String){
    login(email: $email, password: $password){
        _id
        email
        password
    }
}
`
// Donante

export const GET_DONANTES = gql`
  query donantes {
    donantes {
    _id 
    tipo
    firstName
    lastName
    sdg
    }
  }
`;
export const GET_DONANTE = gql`
  query donante($id: ID!) {
    donante(id: $id) {
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
      createdAt
      updatedAt
    }
  }
`;

export const GET_CALIDADES = gql`
  query GetCalidades {
    getCalidades {
      id
      donante {
        _id
        firstName
      }
      sdg
      
    }
  }
`;

export const GET_CALIDAD = gql`
  query GetCalidad($id: ID!) {
    getCalidad(id: $id) {
      _id
      donante {
        
        firstName
      }
      sdg
    }
  }
`;