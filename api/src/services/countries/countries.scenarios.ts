import type { Prisma, Country } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CountryCreateArgs>({
  country: {
    one: { data: { name: 'String6775415' } },
    two: { data: { name: 'String6426284' } },
  },
})

export type StandardScenario = ScenarioData<Country, 'country'>
