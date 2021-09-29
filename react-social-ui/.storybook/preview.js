// .storybook/preview.js

// import { themes } from '@storybook/theming';

// or global addParameters
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // docs: {
  //   theme: themes.dark,
  // },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};