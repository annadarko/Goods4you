import type { Meta, StoryObj } from '@storybook/react'
import { Button } from "./Button";
import cartIcon from '../../../image/shopping_cart/Vector.svg?url'

const meta: Meta<typeof Button> = {
    title: "UI/Button",
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: {action: 'clicked'},
        view: { control: "radio", options: ["text", "icon"] },
        size: { control: "radio", options: ["small", "big"] },
        className: { control: false },
    },
    args: {
        children: "Кнопка",
        view: "text",
        size: "big",
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Кнопка"
    },
};

export const Small: Story = {
    args: { size: "small" },
};

export const Icon: Story = {
    render: (args) => (
      <Button {...args}>
        <img src={cartIcon} alt="Cart" />
      </Button>
    ),
    args: {
      view: "icon",
      size: "small",
    },
  };

export const Disabled: Story = {
    args: {
      disabled: true,
      children: "Disabled",
    },
};