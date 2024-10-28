import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const ButtonRed: Story = {
  args: {
    label: 'Button Red',
    color: 'red',
  },
};

export const ButtonBlue: Story = {
  args: {
    label: 'Button Blue',
    color: 'blue',
  },
};

