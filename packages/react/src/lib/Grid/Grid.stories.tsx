// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import classNames from "classnames";

import { Grid } from "./Grid";
import GithubDark from "./assets/github-mark.svg";

const meta = {
  title: "Components/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
