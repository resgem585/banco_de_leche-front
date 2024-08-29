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
  query getDonantes {
    getDonantes {
    _id 
    tipo
    firstName
    }
  }
`;
export const GET_DONANTE = gql`
  query getDonante($id: ID!) {
    getDonante(id: $id) {
      _id
      tipo
      firstName
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