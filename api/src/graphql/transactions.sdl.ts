export const schema = gql`
  type Transaction {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    type: TransactionType!
    value: Float!
    transactionDate: DateTime!
    user: User
    userId: Int
  }

  enum TransactionType {
    INCOME
    EXPENSE
  }

  type Query {
    transactions(type: [TransactionType!]!): [Transaction!]! @requireAuth
    transactionById(id: Int!): Transaction @requireAuth
  }

  input CreateTransactionInput {
    name: String!
    type: TransactionType!
    value: Float!
    transactionDate: DateTime!
  }

  input UpdateTransactionInput {
    name: String
    type: TransactionType
    value: Float
    transactionDate: DateTime
  }

  type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction! @requireAuth
    updateTransaction(id: Int!, input: UpdateTransactionInput!): Transaction!
      @requireAuth
    deleteTransaction(id: Int!): Transaction! @requireAuth
  }
`;
