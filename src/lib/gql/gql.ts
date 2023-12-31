/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  mutation SignIn($input: SignInInput!) {\n    signIn(input: $input) {\n      id\n      name\n      email\n      image\n    }\n  }\n':
    types.SignInDocument,
  '\n  mutation CreateCompany($input: CreateCompanyInput!) {\n    createCompany(input: $input) {\n      id\n      name\n      color\n      tell\n      email\n      address\n      site_url\n      industry\n      employees_number\n      is_pinned\n      pinned_at\n      is_trash\n      user_id\n      created_at\n      updated_at\n    }\n  }\n':
    types.CreateCompanyDocument,
  '\n  mutation UpdateCompany($input: UpdateCompanyInput!) {\n    updateCompany(input: $input) {\n      id\n      name\n      color\n      tell\n      email\n      address\n      site_url\n      industry\n      employees_number\n      is_pinned\n      pinned_at\n      is_trash\n      user_id\n      created_at\n      updated_at\n    }\n  }\n':
    types.UpdateCompanyDocument,
  '\n  mutation CreatePerson($input: CreatePersonInput!) {\n    createPerson(input: $input) {\n        id\n        name\n        department\n        position\n        tell\n        email\n        memo\n        is_trash\n        company_id\n        user_id\n        created_at\n        updated_at\n    }\n  }\n':
    types.CreatePersonDocument,
  '\n  mutation UpdatePerson($input: UpdatePersonInput!) {\n    updatePerson(input: $input) {\n        id\n        name\n        department\n        position\n        tell\n        email\n        memo\n        is_trash\n        company_id\n        user_id\n        created_at\n        updated_at\n    }\n  }\n':
    types.UpdatePersonDocument,
  '\n  query GetUserCompany($id: ID!) {\n    getUser(id: $id) {\n      id\n      companies {\n        id\n        name\n        color\n        tell\n        email\n        address\n        site_url\n        industry\n        employees_number\n        is_pinned\n        pinned_at\n        is_trash\n        user_id\n        created_at\n        updated_at\n      }\n    }\n  }\n':
    types.GetUserCompanyDocument,
  '\n  query GetCompany($id: ID!) {\n    getCompany(id: $id) {\n      id\n      name\n      color\n      tell\n      email\n      address\n      site_url\n      industry\n      employees_number\n      is_pinned\n      pinned_at\n      is_trash\n      user_id\n      created_at\n      updated_at\n      CompanyCustomFields {\n        id\n        group_name\n        label\n        value\n        type\n        company_id\n        created_at\n        updated_at\n      }\n    }\n  }\n':
    types.GetCompanyDocument,
  '\n    query GetUserPeople($id: ID!) {\n        getUser(id: $id) {\n            id\n            People {\n                id\n                name\n                department\n                position\n                tell\n                email\n                memo\n                is_trash\n                company_id\n                user_id\n                created_at\n                updated_at\n            }\n        }\n    }\n':
    types.GetUserPeopleDocument,
  '\n    query GetPerson($id: ID!) {\n        getPerson(id: $id) {\n            id\n            name\n            department\n            position\n            tell\n            email\n            memo\n            is_trash\n            company_id\n            user_id\n            created_at\n            updated_at\n        }\n    }\n':
    types.GetPersonDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation SignIn($input: SignInInput!) {\n    signIn(input: $input) {\n      id\n      name\n      email\n      image\n    }\n  }\n'
): (typeof documents)['\n  mutation SignIn($input: SignInInput!) {\n    signIn(input: $input) {\n      id\n      name\n      email\n      image\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateCompany($input: CreateCompanyInput!) {\n    createCompany(input: $input) {\n      id\n      name\n      color\n      tell\n      email\n      address\n      site_url\n      industry\n      employees_number\n      is_pinned\n      pinned_at\n      is_trash\n      user_id\n      created_at\n      updated_at\n    }\n  }\n'
): (typeof documents)['\n  mutation CreateCompany($input: CreateCompanyInput!) {\n    createCompany(input: $input) {\n      id\n      name\n      color\n      tell\n      email\n      address\n      site_url\n      industry\n      employees_number\n      is_pinned\n      pinned_at\n      is_trash\n      user_id\n      created_at\n      updated_at\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateCompany($input: UpdateCompanyInput!) {\n    updateCompany(input: $input) {\n      id\n      name\n      color\n      tell\n      email\n      address\n      site_url\n      industry\n      employees_number\n      is_pinned\n      pinned_at\n      is_trash\n      user_id\n      created_at\n      updated_at\n    }\n  }\n'
): (typeof documents)['\n  mutation UpdateCompany($input: UpdateCompanyInput!) {\n    updateCompany(input: $input) {\n      id\n      name\n      color\n      tell\n      email\n      address\n      site_url\n      industry\n      employees_number\n      is_pinned\n      pinned_at\n      is_trash\n      user_id\n      created_at\n      updated_at\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreatePerson($input: CreatePersonInput!) {\n    createPerson(input: $input) {\n        id\n        name\n        department\n        position\n        tell\n        email\n        memo\n        is_trash\n        company_id\n        user_id\n        created_at\n        updated_at\n    }\n  }\n'
): (typeof documents)['\n  mutation CreatePerson($input: CreatePersonInput!) {\n    createPerson(input: $input) {\n        id\n        name\n        department\n        position\n        tell\n        email\n        memo\n        is_trash\n        company_id\n        user_id\n        created_at\n        updated_at\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdatePerson($input: UpdatePersonInput!) {\n    updatePerson(input: $input) {\n        id\n        name\n        department\n        position\n        tell\n        email\n        memo\n        is_trash\n        company_id\n        user_id\n        created_at\n        updated_at\n    }\n  }\n'
): (typeof documents)['\n  mutation UpdatePerson($input: UpdatePersonInput!) {\n    updatePerson(input: $input) {\n        id\n        name\n        department\n        position\n        tell\n        email\n        memo\n        is_trash\n        company_id\n        user_id\n        created_at\n        updated_at\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetUserCompany($id: ID!) {\n    getUser(id: $id) {\n      id\n      companies {\n        id\n        name\n        color\n        tell\n        email\n        address\n        site_url\n        industry\n        employees_number\n        is_pinned\n        pinned_at\n        is_trash\n        user_id\n        created_at\n        updated_at\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetUserCompany($id: ID!) {\n    getUser(id: $id) {\n      id\n      companies {\n        id\n        name\n        color\n        tell\n        email\n        address\n        site_url\n        industry\n        employees_number\n        is_pinned\n        pinned_at\n        is_trash\n        user_id\n        created_at\n        updated_at\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetCompany($id: ID!) {\n    getCompany(id: $id) {\n      id\n      name\n      color\n      tell\n      email\n      address\n      site_url\n      industry\n      employees_number\n      is_pinned\n      pinned_at\n      is_trash\n      user_id\n      created_at\n      updated_at\n      CompanyCustomFields {\n        id\n        group_name\n        label\n        value\n        type\n        company_id\n        created_at\n        updated_at\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetCompany($id: ID!) {\n    getCompany(id: $id) {\n      id\n      name\n      color\n      tell\n      email\n      address\n      site_url\n      industry\n      employees_number\n      is_pinned\n      pinned_at\n      is_trash\n      user_id\n      created_at\n      updated_at\n      CompanyCustomFields {\n        id\n        group_name\n        label\n        value\n        type\n        company_id\n        created_at\n        updated_at\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query GetUserPeople($id: ID!) {\n        getUser(id: $id) {\n            id\n            People {\n                id\n                name\n                department\n                position\n                tell\n                email\n                memo\n                is_trash\n                company_id\n                user_id\n                created_at\n                updated_at\n            }\n        }\n    }\n'
): (typeof documents)['\n    query GetUserPeople($id: ID!) {\n        getUser(id: $id) {\n            id\n            People {\n                id\n                name\n                department\n                position\n                tell\n                email\n                memo\n                is_trash\n                company_id\n                user_id\n                created_at\n                updated_at\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query GetPerson($id: ID!) {\n        getPerson(id: $id) {\n            id\n            name\n            department\n            position\n            tell\n            email\n            memo\n            is_trash\n            company_id\n            user_id\n            created_at\n            updated_at\n        }\n    }\n'
): (typeof documents)['\n    query GetPerson($id: ID!) {\n        getPerson(id: $id) {\n            id\n            name\n            department\n            position\n            tell\n            email\n            memo\n            is_trash\n            company_id\n            user_id\n            created_at\n            updated_at\n        }\n    }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
