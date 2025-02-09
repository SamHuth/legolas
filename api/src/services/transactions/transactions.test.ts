import type { Transaction } from "@prisma/client";

import {
  transactions,
  transaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from "./transactions";
import type { StandardScenario } from "./transactions.scenarios";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("transactions", () => {
  scenario("returns all transactions", async (scenario: StandardScenario) => {
    const result = await transactions();

    expect(result.length).toEqual(Object.keys(scenario.transaction).length);
  });

  scenario(
    "returns a single transaction",
    async (scenario: StandardScenario) => {
      const result = await transaction({ id: scenario.transaction.one.id });

      expect(result).toEqual(scenario.transaction.one);
    },
  );

  scenario("creates a transaction", async () => {
    const result = await createTransaction({
      input: {
        updatedAt: "2025-02-09T02:07:02.652Z",
        name: "String",
        type: "INCOME",
        value: 4696745.380636715,
        transactionDate: "2025-02-09T02:07:02.652Z",
      },
    });

    expect(result.updatedAt).toEqual(new Date("2025-02-09T02:07:02.652Z"));
    expect(result.name).toEqual("String");
    expect(result.type).toEqual("INCOME");
    expect(result.value).toEqual(4696745.380636715);
    expect(result.transactionDate).toEqual(
      new Date("2025-02-09T02:07:02.652Z"),
    );
  });

  scenario("updates a transaction", async (scenario: StandardScenario) => {
    const original = (await transaction({
      id: scenario.transaction.one.id,
    })) as Transaction;
    const result = await updateTransaction({
      id: original.id,
      input: { updatedAt: "2025-02-10T02:07:02.657Z" },
    });

    expect(result.updatedAt).toEqual(new Date("2025-02-10T02:07:02.657Z"));
  });

  scenario("deletes a transaction", async (scenario: StandardScenario) => {
    const original = (await deleteTransaction({
      id: scenario.transaction.one.id,
    })) as Transaction;
    const result = await transaction({ id: original.id });

    expect(result).toEqual(null);
  });
});
