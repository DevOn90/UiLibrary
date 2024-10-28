import type { Meta, StoryObj } from '@storybook/angular';
import { CardsComponent } from './cards.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CardsComponent> = {
  component: CardsComponent,
  title: 'CardsComponent',
};
export default meta;
type Story = StoryObj<CardsComponent>;

// Example user data
const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatarUrl: 'https://i.pravatar.cc/60?img=5', // Placeholder image
};

export const Primary: Story = {
  args: {
    user: userData,
  },
};
