import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { NavBar } from './NavBar'
import { Provider } from 'react-redux'
import { setupStore } from 'store/store'

const store = setupStore();

const meta: Meta<typeof NavBar> = {
    title: 'UI/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Provider store={store}>
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </Provider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {};