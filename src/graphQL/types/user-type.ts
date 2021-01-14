import { gql } from "apollo-server";

export default gql`
  type Query {
    users: [User!]!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String
    dateOfBirth: Date
    identificationNumber: Int
    email: String
  }

  type Mutation {
    post(
      firstName: String!,
      lastName: String!,
      dateOfBirth: String,
      identificationNumber: Int,
      email: String
    ): User!
    updateUser(
      id: ID!,
      firstName: String!,
      lastName: String!,
      dateOfBirth: String!,
      identificationNumber: Int!,
      email: String!
    ): User!
    deleteUser(id: ID!): Boolean
  }
`;
