import { gql } from '@apollo/client'

export const QUERY_CONTACTS = gql `
    query getContacts($name: String, $email: String) {
        contacts(name: $name, email: $email) {
            name
            email
            message
        }
    }
`