const gql = require("graphql-tag");


module.exports = gql`

  type Home{
    photo: String!
    address: String!
    price: String!
    description: String!
  }

  input homeInput {
    photo: String!
    address: String!
    price: String!
    description: String!
  }


  type Query {
    getHomes: [Home]
  }

  type Mutation {
    addHome(homeInput: homeInput): Boolean!
  }


`;
