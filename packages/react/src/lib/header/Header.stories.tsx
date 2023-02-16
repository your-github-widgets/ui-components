// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import classNames from "classnames";
import { Button } from "../button/Button";

import { Header } from "./Header";
import GithubDark from "./assets/github-mark.svg";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    heading: "Github Widgets",
    children: (
      <Button
        className={classNames(
          "w-32",
          "shadow-lg shadow-slate-800",
          "font-semibold font-sans"
        )}
        intent={"secondary"}
        text="Sign in"
        icon={GithubDark}
      />
    ),
  },
};
