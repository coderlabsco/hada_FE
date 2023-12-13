import { type CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://clients-dev.pideypasa.com/graphql',
  documents: 'types/*.graphql',
  generates: {
    './types/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    }
  }
}

export default config
