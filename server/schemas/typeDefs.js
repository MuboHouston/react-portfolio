const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Contact {
        name: String!
        email: String!
        message: String!
    }
        
    type Query {
        contacts(name: String, email: String): [Contact]
    }

    type Mutation {
        addContact(name: String!, email: String!, message: String!): Contact
        deleteContact(name: String, email: String): Contact
    }
`

module.exports = typeDefs;