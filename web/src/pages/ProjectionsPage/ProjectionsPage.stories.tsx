import type { Meta, StoryObj } from "@storybook/react";

import ProjectionsPage from "./ProjectionsPage";

const meta: Meta<typeof ProjectionsPage> = {
  component: ProjectionsPage,
};

export default meta;

type Story = StoryObj<typeof ProjectionsPage>;

export const Primary: Story = {};
