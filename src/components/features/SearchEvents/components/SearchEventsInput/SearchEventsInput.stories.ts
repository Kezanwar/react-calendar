import type { Meta, StoryObj } from '@storybook/react';

import { SearchEventsInput } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/form/SearchEventsInput',
  component: SearchEventsInput,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof SearchEventsInput>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {}
};

