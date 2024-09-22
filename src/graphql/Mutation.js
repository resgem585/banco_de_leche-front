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
  mutation deleteDonante($id: ID!) {
    deleteDonante(id: $id)
  }
`;

// Control

export const CREATE_CONTROL = gql`
  mutation CreateControl($input: ControlInput!) {
    createControl(input: $input) {
      _id
      numeroLeche
      tipoLeche
      tipoDonacion
      donadora
      ml
      fechaExtraccion
      horaExtraccion
      sdg
      embalaje
      suciedad
      color
      olor
      crematocrito
      acidezDornic
      observaciones
      donante {
        _id
        firstName
        lastName
      }
      createdAt
      updatedAt
    }
  },
`;





export const UPDATE_CONTROL = gql`
  mutation updateControl($id: ID!, $input: ControlInput!) {
    updateControl(id: $id, input: $input) {
      _id
      numeroLeche
      tipoLeche
      tipoDonacion
      donadora
      ml
      fechaExtraccion
      horaExtraccion
      sdg
      embalaje
      suciedad
      color
      olor
      crematocrito
      acidezDornic
      observaciones
      donante {
        _id
        firstName
        lastName
      }
      createdAt
      updatedAt
    }
  }
`;


// Mutación para crear un nuevo registro de Crematocrito
export const CREATE_CREMATOCRITO = gql`
  mutation createCrematocrito($input: CrematocritoInput!) {
    createCrematocrito(input: $input) {
      _id
      columnaTotal1
      columnaTotal2
      columnaTotal3
      promTotal      # Promedio total
      columnaCrema1
      columnaCrema2
      columnaCrema3
      promCrema      # Promedio de crema
      porcentajeCrema
      porcentajeGrasa
      kcalLitro      # Campo ajustado según el esquema
      observaciones
      numeroLeche {  # Relación con el control, obtiene el campo número de leche
        _id
        numeroLeche
      }
      createdAt
      updatedAt
    }
  }
`;

