import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8080/query',
  documents: 'src/**/*.{ts,tsx}',
  generates: {
    'src/lib/gql/': {
      preset: 'client',
      presetConfig: {
        baseTypesPath: 'base-types.ts',
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
}

export default config
