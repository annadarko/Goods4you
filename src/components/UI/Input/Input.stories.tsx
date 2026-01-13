import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { useState } from "react";

const meta: Meta<typeof Input> = {
    title: 'UI/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        value: {control: 'text'},
        onChange: {action: 'changed'},
    },
    args: {
        value: '',
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    render: (args) => {
        const [value, setValue] = useState(args.value ?? '');

        return (
            <div style={{maxWidth: 420}}>
                <Input
                    {...args}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        args.onChange?.(e);
                    }}
                />
            </div>
        );
    },
};
