/** @type { import('@storybook/web-components-vite').Preview } */
import '@/tailwind.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
