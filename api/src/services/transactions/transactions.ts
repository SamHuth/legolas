import type {
  QueryResolvers,
  MutationResolvers,
  TransactionRelationResolvers,
} from "types/graphql";

import { db } from "src/lib/db";

export const transactions: QueryResolvers["transactions"] = ({ type }) => {

  const userId = context.currentUser.id

  return db.transaction.findMany({
    where: {
      userId,
      type: {
        in: type
      }
    }
  });
};

export const transactionById: QueryResolvers["transactionById"] = ({ id }) => {

  const userId = context.currentUser.id

  return db.transaction.findUnique({
    where: {
      id,
      userId,
    },
  });
};

export const createTransaction: MutationResolvers["createTransaction"] = ({
  input,
}) => {
  return db.transaction.create({
    data: input,
  });
};

export const updateTransaction: MutationResolvers["updateTransaction"] = ({
  id,
  input,
}) => {
  return db.transaction.update({
    data: input,
    where: { id },
  });
};

export const deleteTransaction: MutationResolvers["deleteTransaction"] = ({
  id,
}) => {
  return db.transaction.delete({
    where: { id },
  });
};

export const Transaction: TransactionRelationResolvers = {
  user: (_obj, { root }) => {
    return db.transaction.findUnique({ where: { id: root?.id } }).user();
  },
};
