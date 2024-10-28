import type { Meta, StoryObj } from '@storybook/angular';
import { Button1Component } from './button1.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<Button1Component> = {
  component: Button1Component,
  title: 'Button1Component',
};
export default meta;
type Story = StoryObj<Button1Component>;

export const Primary: Story = {
  args: {
    label: 'button1',
    color: 'red',
  },
};

export const Heading: Story = {
  args: {
    label: 'button1',
    color: 'red',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button1 works!/gi)).toBeTruthy();
  },
};
