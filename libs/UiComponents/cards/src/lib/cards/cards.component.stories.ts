import type { Meta, StoryObj } from '@storybook/angular';
import { CardsComponent } from './cards.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CardsComponent> = {
  title: 'Components/Cards',
  component: CardsComponent,
  tags: ['autodocs'],
  argTypes: {
    user: {
      control: {
        type: 'object',
      },
      description: 'Object containing user details (name, email, avatarUrl)',
      defaultValue: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatarUrl: 'https://i.pravatar.cc/60?img=5',
      },
    },
  },
};

export default meta;
type Story = StoryObj<CardsComponent>;

// Default card with sample user data
export const Primary: Story = {
  args: {
    user: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatarUrl: 'https://i.pravatar.cc/60?img=5',
    },
  },
};

// Card with customized user data
export const CustomUser: Story = {
  args: {
    user: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      avatarUrl: 'https://i.pravatar.cc/60?img=10',
    },
  },
};

// Play function for testing
export const WithPlayFunction: Story = {
  args: {
    user: {
      name: 'Test User',
      email: 'test.user@example.com',
      avatarUrl: 'https://i.pravatar.cc/60?img=15',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameElement = canvas.getByText('Test User');
    expect(nameElement).toBeTruthy();
  },
};
