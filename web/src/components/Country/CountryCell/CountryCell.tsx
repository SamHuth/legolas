import type { FindCountryById, FindCountryByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Country from 'src/components/Country/Country'

export const QUERY: TypedDocumentNode<
  FindCountryById,
  FindCountryByIdVariables
> = gql`
  query FindCountryById($id: Int!) {
    country: country(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Country not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCountryByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  country,
}: CellSuccessProps<FindCountryById, FindCountryByIdVariables>) => {
  return <Country country={country} />
}
