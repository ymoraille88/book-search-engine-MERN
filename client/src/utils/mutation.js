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
export const LOGIN_USER = gql`
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
  mutation saveBook($newBook: newBook)
  {
    _id
    email
    username
    savedBooks{
    bookId
    description
    authors
    image
    link
    title
    }
    }
  }
  `;
export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: ID!)
  {
  deleteBook(bookId: $bookId) {
    _id
    email
    username
    savedBooks{
    bookId
    description
    authors
    image
    link
    title
    }
    }
    }
  }
  `;