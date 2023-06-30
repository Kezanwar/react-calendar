import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/elements/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {}
};

