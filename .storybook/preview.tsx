import type { Preview } from '@storybook/react-vite';

import { AppThemeProvider } from '../src/app/theme-provider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    (Story) => (
      <AppThemeProvider>
        <Story />
      </AppThemeProvider>
    ),
  ],
};

export default preview;

declare global {
  interface Window {
    IS_STORYBOOK?: boolean;
  }
}
window.IS_STORYBOOK = true;
