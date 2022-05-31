import { gql } from '@apollo/client'

export const ADD_CONTACT = gql`
    mutation addContact (
        $name: String!
        $email: String!
        $message: String!
    ) {
        addContact (
            name: $name
            email: $email
            message: $message
        ) {
            name
            email
            message
        }
    }
`

// export const DELETE_CONTACT = gql`
//     mutation deleteContact (
//         $name: String!
//         $email: String!
//         $message: String!
//     ) {
//         deleteContact (
//             name: $name
//             email: $email
//             message: $message
//         ) {
//             name
//             email
//             message
//         }
//     }
// `