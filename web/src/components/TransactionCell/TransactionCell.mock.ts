// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  transaction: {
    __typename: "Transaction" as const,
    id: 42,
  },
});
