import type { Meta, StoryObj } from '@storybook/react';

import { SearchEvents } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/features/SearchEvents',
  component: SearchEvents,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof SearchEvents>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {}
};

