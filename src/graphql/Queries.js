import { gql } from '@apollo/client';

export const LOGIN = gql`
  query login($email: String, $password: String) {
    login(email: $email, password: $password) {
      _id
      email
      password
    }
  }
`;

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
      control {
        _id
      }
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

// Control

export const GET_CONTROLES = gql`
  query controles {
    controles {
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

export const GET_CONTROL = gql`
  query control($id: ID!) {
    control(id: $id) {
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
      
      createdAt
      updatedAt
    }
  }
`;

export const GET_CONTROL_POR_DONANTE = gql`
  query controlPorDonante($donanteId: ID!) {
    controlPorDonante(donanteId: $donanteId) {
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

export const GET_CREMATOCRITO = gql`
  query crematocrito($id: ID!) {
    crematocrito(id: $id) {
      _id
      numeroLeche {
        _id
        numeroLeche
      }
      columnaTotal1
      columnaTotal2
      columnaTotal3
      promTotal
      columnaCrema1
      columnaCrema2
      columnaCrema3
      promCrema
      porcentajeCrema
      porcentajeGrasa
      kcalLitro
      observaciones
      createdAt
      updatedAt
    }
  }
`;
