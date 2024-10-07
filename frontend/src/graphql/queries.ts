import { gql } from "@apollo/client";


export const COUNTRIES = gql`
  query Countries {
    countries {
      code
      continent {
        name
        id
      }
      emoji
      id
      name
    }
  }
`;

export const COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      code
      continent {
        name
        id
      }
      emoji
      id
      name
    }
  }
`;

export const CONTINENTS = gql`
  query Continents {
    continents {
      name
      id
    }
  }
`;