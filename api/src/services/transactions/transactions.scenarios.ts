import type { Prisma, Transaction } from "@prisma/client";
import type { ScenarioData } from "@redwoodjs/testing/api";

export const standard = defineScenario<Prisma.TransactionCreateArgs>({
  transaction: {
    one: {
      data: {
        updatedAt: "2025-02-09T02:07:02.695Z",
        name: "String",
        type: "INCOME",
        value: 8708491.42765442,
        transactionDate: "2025-02-09T02:07:02.695Z",
      },
    },
    two: {
      data: {
        updatedAt: "2025-02-09T02:07:02.695Z",
        name: "String",
        type: "INCOME",
        value: 2991619.709173039,
        transactionDate: "2025-02-09T02:07:02.695Z",
      },
    },
  },
});

export type StandardScenario = ScenarioData<Transaction, "transaction">;
