import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    primary: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<ButtonComponent>;

// Primary Button
export const PrimaryButton: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
    backgroundColor: '#1e90ff',
    size: 'medium',
  },
};

// Secondary Button
export const SecondaryButton: Story = {
  args: {
    primary: false,
    label: 'Secondary Button',
    backgroundColor: '#ff6347',
    size: 'medium',
  },
};

