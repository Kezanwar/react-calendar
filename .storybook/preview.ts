import type { Preview } from '@storybook/react';
// redux
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import Base from './decorators/base';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [Base]
};

export default preview;
