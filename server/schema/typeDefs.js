const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User { 
_id: ID
username: String!
email: String!
bookCount: Int
savedBooks: [Book]
}


type Mutation {
    addUser(username: String!, email: String! password: String!): Auth
    login(email: String!, password: String!): Auth
    deleteBook(bookId: ID!): User
    saveBook(newBook: ID!): User
  
  }

type Book { 
_id: ID
authors: [String]
description: String
bookId: String
image: String
link: String
title: String
}
type Auth {
    token: ID
    user: User
  }

type Query {
getSingleUser: User
}

`;

module.exports = typeDefs;
