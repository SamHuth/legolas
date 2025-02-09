import type { Prisma, User } from "@prisma/client";
import type { ScenarioData } from "@redwoodjs/testing/api";

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: "String4760315",
        hashedPassword: "String",
        salt: "String",
        updatedAt: "2025-02-09T02:07:20.543Z",
      },
    },
    two: {
      data: {
        email: "String9716778",
        hashedPassword: "String",
        salt: "String",
        updatedAt: "2025-02-09T02:07:20.543Z",
      },
    },
  },
});

export type StandardScenario = ScenarioData<User, "user">;
