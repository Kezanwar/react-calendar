import React from 'react';

import type { Decorator } from '@storybook/react';

// redux
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';

// react-router
import { BrowserRouter } from 'react-router-dom';

// styles
import '@app/sass/styles.scss';

const Base: Decorator = (Story) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Story />
      </Provider>
    </BrowserRouter>
  );
};

export default Base;
