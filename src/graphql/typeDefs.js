const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    allBooks: [Book!]!
    allPublishers: [Publisher!]!
    allAuthors: [Author!]!
    author(authorId: ID!): Author!
    publisher(publisherId: ID!): Publisher!
    book(id: ID!): Book!
  }
  type Mutation {
    addAuthor(input: addAuthorInput): Author!
    addPublisher(input: addPublisherInput): Publisher!
    addAddress(input: addAddressInput): Address!
  }
  input addAuthorInput {
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int!
    address: addAddressInput
  }
  input addPublisherInput {
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: addAddressInput
  }
  input addAddressInput {
    street: String!
    city: String!
    zip: String!
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int!
    address: Address!
    books: [Book!]!
    createdAt: String!
  }
  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
    books: [Book!]!
    createdAt: String!
    updatedAt: String!
  }
  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int!
    datePublished: String!
    bestseller: Boolean!
    authorId: ID!
    publisherId: ID!
    publisher: Publisher!
    createdAt: String!
    updatedAt: String!
  }
  type Address {
    id: ID!
    street: String!
    city: String!
    zip: String!
    createdAt: String!
  }
`
