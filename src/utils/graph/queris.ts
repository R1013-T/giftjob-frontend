import { gql } from '@apollo/client'

export const GET_USER_COMPANY = gql`
  query GetUserCompany($id: ID!) {
    getUser(id: $id) {
      id
      companies {
        id
        name
        color
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

export const GET_COMPANY = gql`
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      color
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
      CompanyCustomFields {
        id
        group_name
        label
        value
        type
        company_id
        created_at
        updated_at
      }
    }
  }
`

export const GET_USER_PEOPLE = gql`
  query GetUserPeople($id: ID!) {
    getUser(id: $id) {
      id
      People {
        id
        name
        department
        position
        tell
        email
        memo
        is_trash
        company_id
        user_id
        created_at
        updated_at
      }
    }
  }
`

export const GET_PERSON = gql`
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
      id
      name
      department
      position
      tell
      email
      memo
      is_trash
      company_id
      user_id
      created_at
      updated_at
    }
  }
`
