import { gql } from "@apollo/client";

// USER
export const GET_USERS = gql`
  query GetUser {
    getUser {
      _id
      email
      password
    }
  }
`;

export const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      email
      password
    }
  }
`;

// DONANTE
export const GET_DONANTES = gql`
  query Donantes {
    donantes {
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

export const GET_DONANTE = gql`
  query Donante($id: ID!) {
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
      control {
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
        crematocritoData {
          _id
          porcentajeGrasa
          kcalLitro
        }
        acidezDornicData {
          _id
          resultado
        }
      }
      createdAt
      updatedAt
    }
  }
`;

// CONTROL
export const GET_CONTROLES = gql`
  query Controles {
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
      crematocritoData {
        _id
        porcentajeGrasa
        kcalLitro
      }
      acidezDornicData {
        _id
        resultado
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_CONTROL = gql`
  query Control($id: ID!) {
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
      donante {
        _id
        firstName
        lastName
      }
      crematocritoData {
        _id
        porcentajeGrasa
        kcalLitro
      }
      acidezDornicData {
        _id
        resultado
      }
      createdAt
      updatedAt
    }
  }
`;

// CREMATOCRITO
export const GET_CREMATOCRITOS = gql`
  query Crematocritos {
    crematocritos {
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

export const GET_CREMATOCRITO = gql`
  query Crematocrito($id: ID!) {
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

// ACIDEZ DORNIC
export const GET_ACIDEZDORNICS = gql`
  query AcidecesDornic {
    acidecesDornic {
      _id
      numeroLeche {
        _id
        numeroLeche
      }
      m1
      m2
      m3
      prom
      fact
      resultado
      obs
      createdAt
      updatedAt
    }
  }
`;

export const GET_ACIDEZDORNIC = gql`
  query AcidezDornic($id: ID!) {
    acidezDornic(id: $id) {
      _id
      numeroLeche {
        _id
        numeroLeche
      }
      m1
      m2
      m3
      prom
      fact
      resultado
      obs
      createdAt
      updatedAt
    }
  }
`;
