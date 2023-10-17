/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  JSON: { input: any; output: any }
  Time: { input: any; output: any }
}

export type Calendar = {
  __typename?: 'Calendar'
  color?: Maybe<Scalars['String']['output']>
  company_id?: Maybe<Scalars['ID']['output']>
  created_at: Scalars['Time']['output']
  description?: Maybe<Scalars['String']['output']>
  end_time?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  is_all_day?: Maybe<Scalars['Boolean']['output']>
  is_from_google?: Maybe<Scalars['Boolean']['output']>
  location?: Maybe<Scalars['String']['output']>
  start_time?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updated_at: Scalars['Time']['output']
  user_id: Scalars['ID']['output']
}

export type Company = {
  __typename?: 'Company'
  CompanyCustomFields?: Maybe<Array<Maybe<CompanyCustomField>>>
  address?: Maybe<Scalars['String']['output']>
  color?: Maybe<Scalars['String']['output']>
  created_at: Scalars['Time']['output']
  email?: Maybe<Scalars['String']['output']>
  employees_number?: Maybe<Scalars['Float']['output']>
  id: Scalars['ID']['output']
  industry?: Maybe<Scalars['String']['output']>
  is_pinned?: Maybe<Scalars['Boolean']['output']>
  is_trash?: Maybe<Scalars['Boolean']['output']>
  name?: Maybe<Scalars['String']['output']>
  pinned_at?: Maybe<Scalars['String']['output']>
  site_url?: Maybe<Scalars['String']['output']>
  tell?: Maybe<Scalars['String']['output']>
  updated_at: Scalars['Time']['output']
  user_id: Scalars['ID']['output']
}

export type CompanyCustomField = {
  __typename?: 'CompanyCustomField'
  company_id: Scalars['ID']['output']
  created_at: Scalars['Time']['output']
  group_name: Scalars['String']['output']
  id: Scalars['ID']['output']
  label: Scalars['String']['output']
  type: Scalars['String']['output']
  updated_at: Scalars['Time']['output']
  value?: Maybe<Scalars['String']['output']>
}

export type CompanyCustomTemplate = {
  __typename?: 'CompanyCustomTemplate'
  created_at: Scalars['Time']['output']
  id: Scalars['ID']['output']
  is_trash?: Maybe<Scalars['Boolean']['output']>
  name: Scalars['String']['output']
  updated_at: Scalars['Time']['output']
  user_id: Scalars['ID']['output']
}

export type CompanyCustomTemplateField = {
  __typename?: 'CompanyCustomTemplateField'
  created_at: Scalars['Time']['output']
  group_name: Scalars['String']['output']
  id: Scalars['ID']['output']
  label: Scalars['String']['output']
  template_id: Scalars['ID']['output']
  type: Scalars['String']['output']
  updated_at: Scalars['Time']['output']
}

export type CreateCalendarInput = {
  color?: InputMaybe<Scalars['String']['input']>
  company_id?: InputMaybe<Scalars['ID']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  end_time?: InputMaybe<Scalars['String']['input']>
  is_all_day?: InputMaybe<Scalars['Boolean']['input']>
  is_from_google?: InputMaybe<Scalars['Boolean']['input']>
  location?: InputMaybe<Scalars['String']['input']>
  start_time?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  user_id: Scalars['ID']['input']
}

export type CreateCompanyInput = {
  address?: InputMaybe<Scalars['String']['input']>
  color?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  employees_number?: InputMaybe<Scalars['Float']['input']>
  industry?: InputMaybe<Scalars['String']['input']>
  is_pinned?: InputMaybe<Scalars['Boolean']['input']>
  is_trash?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  pinned_at?: InputMaybe<Scalars['String']['input']>
  site_url?: InputMaybe<Scalars['String']['input']>
  tell?: InputMaybe<Scalars['String']['input']>
  user_id: Scalars['ID']['input']
}

export type CreateCustomFieldInput = {
  company_id: Scalars['ID']['input']
  group_name: Scalars['String']['input']
  label: Scalars['String']['input']
  type: Scalars['String']['input']
  value?: InputMaybe<Scalars['String']['input']>
}

export type CreateNoteInput = {
  color?: InputMaybe<Scalars['String']['input']>
  company_id?: InputMaybe<Scalars['ID']['input']>
  content?: InputMaybe<Scalars['String']['input']>
  is_pinned?: InputMaybe<Scalars['Boolean']['input']>
  is_trash?: InputMaybe<Scalars['Boolean']['input']>
  pinned_at?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  user_id: Scalars['ID']['input']
}

export type CreatePersonInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>
  department?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  is_trash?: InputMaybe<Scalars['Boolean']['input']>
  memo?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  position?: InputMaybe<Scalars['String']['input']>
  tell?: InputMaybe<Scalars['String']['input']>
  user_id: Scalars['ID']['input']
}

export type CreateTemplateFieldInput = {
  group_name: Scalars['String']['input']
  label: Scalars['String']['input']
  template_id: Scalars['ID']['input']
  type: Scalars['String']['input']
  user_id: Scalars['ID']['input']
}

export type CreateTemplateInput = {
  is_trash?: InputMaybe<Scalars['Boolean']['input']>
  name: Scalars['String']['input']
  user_id: Scalars['ID']['input']
}

export type CreateUserInput = {
  email: Scalars['String']['input']
  image: Scalars['String']['input']
  name: Scalars['String']['input']
  provider: Scalars['String']['input']
  uid: Scalars['String']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  createCalendar?: Maybe<Calendar>
  createCompany?: Maybe<Company>
  createCustomField?: Maybe<CompanyCustomField>
  createNote?: Maybe<Note>
  createPerson?: Maybe<Person>
  createTemplate?: Maybe<CompanyCustomTemplate>
  createTemplateField?: Maybe<CompanyCustomTemplateField>
  createUser?: Maybe<User>
  deleteCalendar?: Maybe<Calendar>
  deleteCompany?: Maybe<Company>
  deleteCustomField?: Maybe<CompanyCustomField>
  deleteNote?: Maybe<Note>
  deletePerson?: Maybe<Person>
  deleteTemplate?: Maybe<CompanyCustomTemplate>
  deleteTemplateField?: Maybe<CompanyCustomTemplateField>
  signIn?: Maybe<User>
  updateCalendar?: Maybe<Calendar>
  updateCompany?: Maybe<Company>
  updateCustomField?: Maybe<CompanyCustomField>
  updateNote?: Maybe<Note>
  updatePerson?: Maybe<Person>
  updateTemplate?: Maybe<CompanyCustomTemplate>
  updateTemplateField?: Maybe<CompanyCustomTemplateField>
}

export type MutationCreateCalendarArgs = {
  input?: InputMaybe<CreateCalendarInput>
}

export type MutationCreateCompanyArgs = {
  input?: InputMaybe<CreateCompanyInput>
}

export type MutationCreateCustomFieldArgs = {
  input?: InputMaybe<CreateCustomFieldInput>
}

export type MutationCreateNoteArgs = {
  input?: InputMaybe<CreateNoteInput>
}

export type MutationCreatePersonArgs = {
  input?: InputMaybe<CreatePersonInput>
}

export type MutationCreateTemplateArgs = {
  input?: InputMaybe<CreateTemplateInput>
}

export type MutationCreateTemplateFieldArgs = {
  input?: InputMaybe<CreateTemplateFieldInput>
}

export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>
}

export type MutationDeleteCalendarArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteCompanyArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteCustomFieldArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteNoteArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeletePersonArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteTemplateArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteTemplateFieldArgs = {
  id: Scalars['ID']['input']
}

export type MutationSignInArgs = {
  input?: InputMaybe<SignInInput>
}

export type MutationUpdateCalendarArgs = {
  input?: InputMaybe<UpdateCalendarInput>
}

export type MutationUpdateCompanyArgs = {
  input?: InputMaybe<UpdateCompanyInput>
}

export type MutationUpdateCustomFieldArgs = {
  input?: InputMaybe<UpdateCustomFieldInput>
}

export type MutationUpdateNoteArgs = {
  input?: InputMaybe<UpdateNoteInput>
}

export type MutationUpdatePersonArgs = {
  input?: InputMaybe<UpdatePersonInput>
}

export type MutationUpdateTemplateArgs = {
  input?: InputMaybe<UpdateTemplateInput>
}

export type MutationUpdateTemplateFieldArgs = {
  input?: InputMaybe<UpdateTemplateFieldInput>
}

export type Note = {
  __typename?: 'Note'
  color?: Maybe<Scalars['String']['output']>
  company_id?: Maybe<Scalars['ID']['output']>
  content?: Maybe<Scalars['String']['output']>
  created_at: Scalars['Time']['output']
  id: Scalars['ID']['output']
  is_pinned?: Maybe<Scalars['Boolean']['output']>
  is_trash?: Maybe<Scalars['Boolean']['output']>
  pinned_at?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updated_at: Scalars['Time']['output']
  user_id: Scalars['ID']['output']
}

export type Person = {
  __typename?: 'Person'
  company_id?: Maybe<Scalars['ID']['output']>
  created_at: Scalars['Time']['output']
  department?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  is_trash?: Maybe<Scalars['Boolean']['output']>
  memo?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  position?: Maybe<Scalars['String']['output']>
  tell?: Maybe<Scalars['String']['output']>
  updated_at: Scalars['Time']['output']
  user_id: Scalars['ID']['output']
}

export type Query = {
  __typename?: 'Query'
  getCalendar?: Maybe<Calendar>
  getCompany?: Maybe<Company>
  getNote?: Maybe<Note>
  getPerson?: Maybe<Person>
  getTemplate?: Maybe<CompanyCustomTemplate>
  getUser?: Maybe<User>
}

export type QueryGetCalendarArgs = {
  id: Scalars['ID']['input']
}

export type QueryGetCompanyArgs = {
  id: Scalars['ID']['input']
}

export type QueryGetNoteArgs = {
  id: Scalars['ID']['input']
}

export type QueryGetPersonArgs = {
  id: Scalars['ID']['input']
}

export type QueryGetTemplateArgs = {
  id: Scalars['ID']['input']
}

export type QueryGetUserArgs = {
  id: Scalars['ID']['input']
}

export type SignInInput = {
  email: Scalars['String']['input']
  image: Scalars['String']['input']
  name: Scalars['String']['input']
  provider: Scalars['String']['input']
  uid: Scalars['String']['input']
}

export type UpdateCalendarInput = {
  color?: InputMaybe<Scalars['String']['input']>
  company_id?: InputMaybe<Scalars['ID']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  end_time?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  is_all_day?: InputMaybe<Scalars['Boolean']['input']>
  is_from_google?: InputMaybe<Scalars['Boolean']['input']>
  location?: InputMaybe<Scalars['String']['input']>
  start_time?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type UpdateCompanyInput = {
  address?: InputMaybe<Scalars['String']['input']>
  color?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  employees_number?: InputMaybe<Scalars['Float']['input']>
  id: Scalars['ID']['input']
  industry?: InputMaybe<Scalars['String']['input']>
  is_pinned?: InputMaybe<Scalars['Boolean']['input']>
  is_trash?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  pinned_at?: InputMaybe<Scalars['String']['input']>
  site_url?: InputMaybe<Scalars['String']['input']>
  tell?: InputMaybe<Scalars['String']['input']>
}

export type UpdateCustomFieldInput = {
  group_name?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  label?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  value?: InputMaybe<Scalars['String']['input']>
}

export type UpdateNoteInput = {
  color?: InputMaybe<Scalars['String']['input']>
  company_id?: InputMaybe<Scalars['ID']['input']>
  content?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  is_pinned?: InputMaybe<Scalars['Boolean']['input']>
  is_trash?: InputMaybe<Scalars['Boolean']['input']>
  pinned_at?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type UpdatePersonInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>
  department?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  is_trash?: InputMaybe<Scalars['Boolean']['input']>
  memo?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  position?: InputMaybe<Scalars['String']['input']>
  tell?: InputMaybe<Scalars['String']['input']>
}

export type UpdateTemplateFieldInput = {
  id: Scalars['ID']['input']
  label?: InputMaybe<Scalars['String']['input']>
  template_id?: InputMaybe<Scalars['ID']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

export type UpdateTemplateInput = {
  id: Scalars['ID']['input']
  is_trash?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  user_id?: InputMaybe<Scalars['ID']['input']>
}

export type User = {
  __typename?: 'User'
  Calendars?: Maybe<Array<Maybe<Calendar>>>
  Notes?: Maybe<Array<Maybe<Note>>>
  People?: Maybe<Array<Maybe<Person>>>
  companies?: Maybe<Array<Maybe<Company>>>
  created_at: Scalars['Time']['output']
  email: Scalars['String']['output']
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  name: Scalars['String']['output']
  provider: Scalars['String']['output']
  templates?: Maybe<Array<Maybe<CompanyCustomTemplate>>>
  uid: Scalars['String']['output']
  updated_at: Scalars['Time']['output']
}

export type SignInMutationVariables = Exact<{
  input: SignInInput
}>

export type SignInMutation = {
  __typename?: 'Mutation'
  signIn?: {
    __typename?: 'User'
    id: string
    name: string
    email: string
    image: string
  } | null
}

export type CreateCompanyMutationVariables = Exact<{
  input: CreateCompanyInput
}>

export type CreateCompanyMutation = {
  __typename?: 'Mutation'
  createCompany?: {
    __typename?: 'Company'
    id: string
    name?: string | null
    color?: string | null
    tell?: string | null
    email?: string | null
    address?: string | null
    site_url?: string | null
    industry?: string | null
    employees_number?: number | null
    is_pinned?: boolean | null
    pinned_at?: string | null
    is_trash?: boolean | null
    user_id: string
    created_at: any
    updated_at: any
  } | null
}

export type UpdateCompanyMutationVariables = Exact<{
  input: UpdateCompanyInput
}>

export type UpdateCompanyMutation = {
  __typename?: 'Mutation'
  updateCompany?: {
    __typename?: 'Company'
    id: string
    name?: string | null
    color?: string | null
    tell?: string | null
    email?: string | null
    address?: string | null
    site_url?: string | null
    industry?: string | null
    employees_number?: number | null
    is_pinned?: boolean | null
    pinned_at?: string | null
    is_trash?: boolean | null
    user_id: string
    created_at: any
    updated_at: any
  } | null
}

export type CreatePersonMutationVariables = Exact<{
  input: CreatePersonInput
}>

export type CreatePersonMutation = {
  __typename?: 'Mutation'
  createPerson?: {
    __typename?: 'Person'
    id: string
    name?: string | null
    department?: string | null
    position?: string | null
    tell?: string | null
    email?: string | null
    memo?: string | null
    is_trash?: boolean | null
    company_id?: string | null
    user_id: string
    created_at: any
    updated_at: any
  } | null
}

export type UpdatePersonMutationVariables = Exact<{
  input: UpdatePersonInput
}>

export type UpdatePersonMutation = {
  __typename?: 'Mutation'
  updatePerson?: {
    __typename?: 'Person'
    id: string
    name?: string | null
    department?: string | null
    position?: string | null
    tell?: string | null
    email?: string | null
    memo?: string | null
    is_trash?: boolean | null
    company_id?: string | null
    user_id: string
    created_at: any
    updated_at: any
  } | null
}

export type GetUserCompanyQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetUserCompanyQuery = {
  __typename?: 'Query'
  getUser?: {
    __typename?: 'User'
    id: string
    companies?: Array<{
      __typename?: 'Company'
      id: string
      name?: string | null
      color?: string | null
      tell?: string | null
      email?: string | null
      address?: string | null
      site_url?: string | null
      industry?: string | null
      employees_number?: number | null
      is_pinned?: boolean | null
      pinned_at?: string | null
      is_trash?: boolean | null
      user_id: string
      created_at: any
      updated_at: any
    } | null> | null
  } | null
}

export type GetCompanyQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetCompanyQuery = {
  __typename?: 'Query'
  getCompany?: {
    __typename?: 'Company'
    id: string
    name?: string | null
    color?: string | null
    tell?: string | null
    email?: string | null
    address?: string | null
    site_url?: string | null
    industry?: string | null
    employees_number?: number | null
    is_pinned?: boolean | null
    pinned_at?: string | null
    is_trash?: boolean | null
    user_id: string
    created_at: any
    updated_at: any
    CompanyCustomFields?: Array<{
      __typename?: 'CompanyCustomField'
      id: string
      group_name: string
      label: string
      value?: string | null
      type: string
      company_id: string
      created_at: any
      updated_at: any
    } | null> | null
  } | null
}

export type GetUserPeopleQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetUserPeopleQuery = {
  __typename?: 'Query'
  getUser?: {
    __typename?: 'User'
    id: string
    People?: Array<{
      __typename?: 'Person'
      id: string
      name?: string | null
      department?: string | null
      position?: string | null
      tell?: string | null
      email?: string | null
      memo?: string | null
      is_trash?: boolean | null
      company_id?: string | null
      user_id: string
      created_at: any
      updated_at: any
    } | null> | null
  } | null
}

export type GetPersonQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetPersonQuery = {
  __typename?: 'Query'
  getPerson?: {
    __typename?: 'Person'
    id: string
    name?: string | null
    department?: string | null
    position?: string | null
    tell?: string | null
    email?: string | null
    memo?: string | null
    is_trash?: boolean | null
    company_id?: string | null
    user_id: string
    created_at: any
    updated_at: any
  } | null
}

export const SignInDocument = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      id
      name
      email
      image
    }
  }
`
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    options
  )
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>
export const CreateCompanyDocument = gql`
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
export type CreateCompanyMutationFn = Apollo.MutationFunction<
  CreateCompanyMutation,
  CreateCompanyMutationVariables
>

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCompanyMutation,
    CreateCompanyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCompanyMutation,
    CreateCompanyMutationVariables
  >(CreateCompanyDocument, options)
}
export type CreateCompanyMutationHookResult = ReturnType<
  typeof useCreateCompanyMutation
>
export type CreateCompanyMutationResult =
  Apollo.MutationResult<CreateCompanyMutation>
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<
  CreateCompanyMutation,
  CreateCompanyMutationVariables
>
export const UpdateCompanyDocument = gql`
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
export type UpdateCompanyMutationFn = Apollo.MutationFunction<
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables
>

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCompanyMutation,
    UpdateCompanyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateCompanyMutation,
    UpdateCompanyMutationVariables
  >(UpdateCompanyDocument, options)
}
export type UpdateCompanyMutationHookResult = ReturnType<
  typeof useUpdateCompanyMutation
>
export type UpdateCompanyMutationResult =
  Apollo.MutationResult<UpdateCompanyMutation>
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables
>
export const CreatePersonDocument = gql`
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
export type CreatePersonMutationFn = Apollo.MutationFunction<
  CreatePersonMutation,
  CreatePersonMutationVariables
>

/**
 * __useCreatePersonMutation__
 *
 * To run a mutation, you first call `useCreatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPersonMutation, { data, loading, error }] = useCreatePersonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePersonMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePersonMutation,
    CreatePersonMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreatePersonMutation,
    CreatePersonMutationVariables
  >(CreatePersonDocument, options)
}
export type CreatePersonMutationHookResult = ReturnType<
  typeof useCreatePersonMutation
>
export type CreatePersonMutationResult =
  Apollo.MutationResult<CreatePersonMutation>
export type CreatePersonMutationOptions = Apollo.BaseMutationOptions<
  CreatePersonMutation,
  CreatePersonMutationVariables
>
export const UpdatePersonDocument = gql`
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
export type UpdatePersonMutationFn = Apollo.MutationFunction<
  UpdatePersonMutation,
  UpdatePersonMutationVariables
>

/**
 * __useUpdatePersonMutation__
 *
 * To run a mutation, you first call `useUpdatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePersonMutation, { data, loading, error }] = useUpdatePersonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePersonMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePersonMutation,
    UpdatePersonMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdatePersonMutation,
    UpdatePersonMutationVariables
  >(UpdatePersonDocument, options)
}
export type UpdatePersonMutationHookResult = ReturnType<
  typeof useUpdatePersonMutation
>
export type UpdatePersonMutationResult =
  Apollo.MutationResult<UpdatePersonMutation>
export type UpdatePersonMutationOptions = Apollo.BaseMutationOptions<
  UpdatePersonMutation,
  UpdatePersonMutationVariables
>
export const GetUserCompanyDocument = gql`
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

/**
 * __useGetUserCompanyQuery__
 *
 * To run a query within a React component, call `useGetUserCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCompanyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserCompanyQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserCompanyQuery,
    GetUserCompanyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserCompanyQuery, GetUserCompanyQueryVariables>(
    GetUserCompanyDocument,
    options
  )
}
export function useGetUserCompanyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserCompanyQuery,
    GetUserCompanyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserCompanyQuery, GetUserCompanyQueryVariables>(
    GetUserCompanyDocument,
    options
  )
}
export type GetUserCompanyQueryHookResult = ReturnType<
  typeof useGetUserCompanyQuery
>
export type GetUserCompanyLazyQueryHookResult = ReturnType<
  typeof useGetUserCompanyLazyQuery
>
export type GetUserCompanyQueryResult = Apollo.QueryResult<
  GetUserCompanyQuery,
  GetUserCompanyQueryVariables
>
export const GetCompanyDocument = gql`
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

/**
 * __useGetCompanyQuery__
 *
 * To run a query within a React component, call `useGetCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCompanyQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCompanyQuery,
    GetCompanyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCompanyQuery, GetCompanyQueryVariables>(
    GetCompanyDocument,
    options
  )
}
export function useGetCompanyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCompanyQuery,
    GetCompanyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCompanyQuery, GetCompanyQueryVariables>(
    GetCompanyDocument,
    options
  )
}
export type GetCompanyQueryHookResult = ReturnType<typeof useGetCompanyQuery>
export type GetCompanyLazyQueryHookResult = ReturnType<
  typeof useGetCompanyLazyQuery
>
export type GetCompanyQueryResult = Apollo.QueryResult<
  GetCompanyQuery,
  GetCompanyQueryVariables
>
export const GetUserPeopleDocument = gql`
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

/**
 * __useGetUserPeopleQuery__
 *
 * To run a query within a React component, call `useGetUserPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPeopleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserPeopleQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserPeopleQuery,
    GetUserPeopleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserPeopleQuery, GetUserPeopleQueryVariables>(
    GetUserPeopleDocument,
    options
  )
}
export function useGetUserPeopleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserPeopleQuery,
    GetUserPeopleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserPeopleQuery, GetUserPeopleQueryVariables>(
    GetUserPeopleDocument,
    options
  )
}
export type GetUserPeopleQueryHookResult = ReturnType<
  typeof useGetUserPeopleQuery
>
export type GetUserPeopleLazyQueryHookResult = ReturnType<
  typeof useGetUserPeopleLazyQuery
>
export type GetUserPeopleQueryResult = Apollo.QueryResult<
  GetUserPeopleQuery,
  GetUserPeopleQueryVariables
>
export const GetPersonDocument = gql`
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

/**
 * __useGetPersonQuery__
 *
 * To run a query within a React component, call `useGetPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPersonQuery(
  baseOptions: Apollo.QueryHookOptions<GetPersonQuery, GetPersonQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPersonQuery, GetPersonQueryVariables>(
    GetPersonDocument,
    options
  )
}
export function useGetPersonLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPersonQuery,
    GetPersonQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPersonQuery, GetPersonQueryVariables>(
    GetPersonDocument,
    options
  )
}
export type GetPersonQueryHookResult = ReturnType<typeof useGetPersonQuery>
export type GetPersonLazyQueryHookResult = ReturnType<
  typeof useGetPersonLazyQuery
>
export type GetPersonQueryResult = Apollo.QueryResult<
  GetPersonQuery,
  GetPersonQueryVariables
>
