import type { Meta, StoryObj } from '@storybook/react';

import { EventItems } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/features/EventItems',
  component: EventItems,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof EventItems>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {}
};

