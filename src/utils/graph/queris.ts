import { gql } from '@apollo/client'

export const GET_USER_COMPANY = gql`
  query GetUserCompany($id: ID!) {
    getUser(id: $id) {
      id
      companies {
        id
        name
        tell
        email
        address
        site_url
        industry
        employees_number
        is_pinned
        pinned_at
        is_trash
        user_id
        created_at
        updated_at
      }
    }
  }
`
