import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Counter } from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "UI/сounter",
  component: Counter,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["medium", "large"] },
    value: { control: { type: "number", min: 0 } },
    onChange: { action: "changed" },
  },
  args: {
    size: "medium",
    value: 1,
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Primary: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 0);

    return (
      <Counter
        {...args}
        value={value}
        onChange={(next) => {
          setValue(next);
          args.onChange?.(next);
        }}
      />
    );
  },
};

export const Large: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 0);

    return (
      <Counter
        {...args}
        value={value}
        onChange={(next) => {
          setValue(next);
          args.onChange?.(next);
        }}
      />
    );
  },
  args: {
    size: "large",
    value: 1,
  },
};

export const Zero: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 0);

    return (
      <Counter
        {...args}
        value={value}
        onChange={(next) => {
          setValue(next);
          args.onChange?.(next);
        }}
      />
    );
  },
  args: {
    value: 0,
  },
};