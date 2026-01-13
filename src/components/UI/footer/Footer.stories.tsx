import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
    title: "UI/Footer",
    component: Footer,
    tags: ["autodocs"],
    decorators: [
      (Story) => (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      ),
    ],
  };

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {};