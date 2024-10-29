import type { Meta, StoryObj } from '@storybook/angular';
import { UiLibraryComponent } from './ui-library.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UiLibraryComponent> = {
  component: UiLibraryComponent,
  title: 'UiLibraryComponent',
};
export default meta;
type Story = StoryObj<UiLibraryComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ui-library works!/gi)).toBeTruthy();
  },
};
