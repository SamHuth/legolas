import type { Meta, StoryObj } from "@storybook/react";

import IncomePage from "./IncomePage";

const meta: Meta<typeof IncomePage> = {
  component: IncomePage,
};

export default meta;

type Story = StoryObj<typeof IncomePage>;

export const Primary: Story = {};
