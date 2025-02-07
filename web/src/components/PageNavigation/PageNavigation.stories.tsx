// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/7/writing-stories/args

import type { Meta, StoryObj } from "@storybook/react";

import PageNavigation from "./PageNavigation";

const meta: Meta<typeof PageNavigation> = {
  component: PageNavigation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageNavigation>;

export const Primary: Story = {};
