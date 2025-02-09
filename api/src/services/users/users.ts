import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from "types/graphql";

import { db } from "src/lib/db";
import { requireAuth } from "src/lib/auth";

export const users: QueryResolvers["users"] = () => {

  requireAuth({ roles: ['ADMIN'] })

  return db.user.findMany();
};

export const user: QueryResolvers["user"] = ({ id }) => {
  requireAuth({ roles: ['ADMIN'] })
  return db.user.findUnique({
    where: { id },
  });
};

export const createUser: MutationResolvers["createUser"] = ({ input }) => {
  return db.user.create({
    data: input,
  });
};

export const updateUser: MutationResolvers["updateUser"] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  });
};

export const User: UserRelationResolvers = {
  Transaction: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Transaction();
  },
};
