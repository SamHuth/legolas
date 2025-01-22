import type { FindCountries, FindCountriesVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Countries from 'src/components/Country/Countries'

export const QUERY: TypedDocumentNode<FindCountries, FindCountriesVariables> =
  gql`
    query FindCountries {
      countries {
        id
        name
      }
    }
  `

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      No countries yet.{' '}
      <Link to={routes.newCountry()} className="rw-link">
        Create one?
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindCountries>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  countries,
}: CellSuccessProps<FindCountries, FindCountriesVariables>) => {
  return <Countries countries={countries} />
}
