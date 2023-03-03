import { gql } from '@apollo/client';

export const GET_SINGLE_USER = gql`
query getSingleUser {
getSingleUser {
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


`