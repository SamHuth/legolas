import type {
  FindTransactionQuery,
  FindTransactionQueryVariables,
} from "types/graphql"

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from "@redwoodjs/web"
import CalendarWrapper from "../CalendarWrapper/CalendarWrapper"
import Loader from "../Loader/Loader"

export const QUERY: TypedDocumentNode<
  FindTransactionQuery,
  FindTransactionQueryVariables
> = gql`
  query FindTransactionQuery($type: [TransactionType!]!) {
    transactions: transactions(type: $type) {
      id
      name
    }
  }
`

export type CellTransaction = CellSuccessProps['transactions'][0]

export const Loading = () => <Loader />

export const Empty = () => {
  return (
      <CalendarWrapper transactions={[]} />
  )
}

export const Failure = ({
  error,
}: CellFailureProps<FindTransactionQueryVariables>) => (
  <div style={{ color: "red" }}>Error: {error?.message}</div>
)

export const Success = ({
  transactions,
}: CellSuccessProps<FindTransactionQuery, FindTransactionQueryVariables>) => {
  return (
    <>
      <CalendarWrapper transactions={transactions}/>
      <hr />
      {JSON.stringify(transactions)}
    </>
  )
}
