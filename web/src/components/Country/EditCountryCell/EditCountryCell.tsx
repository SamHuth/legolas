import type {
  EditCountryById,
  UpdateCountryInput,
  UpdateCountryMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CountryForm from 'src/components/Country/CountryForm'

export const QUERY: TypedDocumentNode<EditCountryById> = gql`
  query EditCountryById($id: Int!) {
    country: country(id: $id) {
      id
      name
    }
  }
`

const UPDATE_COUNTRY_MUTATION: TypedDocumentNode<
  EditCountryById,
  UpdateCountryMutationVariables
> = gql`
  mutation UpdateCountryMutation($id: Int!, $input: UpdateCountryInput!) {
    updateCountry(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ country }: CellSuccessProps<EditCountryById>) => {
  const [updateCountry, { loading, error }] = useMutation(
    UPDATE_COUNTRY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Country updated')
        navigate(routes.countries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCountryInput,
    id: EditCountryById['country']['id']
  ) => {
    updateCountry({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Country {country?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CountryForm
          country={country}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
