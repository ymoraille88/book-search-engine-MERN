import { gql } from '@apollo/client';


export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
        bookCount
        savedBooks {
        authors
        image
        link
        title
        bookId
        description
        }
        

      }
    }
  }
`;
export const LOGIN = gql`
  mutation login(
  $email: String!, 
  $password: String!
  ) {
    login(
    email: $email, 
    password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
  `;
export const SAVE_BOOK = gql`
  mutation savebook($newBook: newBook)
  $email: String!, 
  $password: String!
  ) {
    login(
    email: $email, 
    password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
  `;