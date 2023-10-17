import { gql } from '@apollo/client'

export const SIGN_IN_MUTATION = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      id
      name
      email
      image
    }
  }
`

export const CREATE_COMPANY = gql`
  mutation CreateCompany($input: CreateCompanyInput!) {
    createCompany(input: $input) {
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
`

export const UPDATE_COMPANY = gql`
  mutation UpdateCompany($input: UpdateCompanyInput!) {
    updateCompany(input: $input) {
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
`

export const CREATE_PERSON = gql`
  mutation CreatePerson($input: CreatePersonInput!) {
    createPerson(input: $input) {
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

export const UPDATE_PERSON = gql`
  mutation UpdatePerson($input: UpdatePersonInput!) {
    updatePerson(input: $input) {
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
