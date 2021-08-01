import { gql } from "graphql-tag";

export const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      id
      name
      diameter {
        meters
      }
      height {
        meters
      }
      mass {
        kg
      }
    }
  }
`;

export const GET_ROCKET = gql`
  query GetRocket($id: ID!) {
    rocket(id: $id) {
      diameter {
        meters
      }
      country
      company
      boosters
      id
      name
      type
      wikipedia
    }
  }
`;
