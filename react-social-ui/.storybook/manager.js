// .storybook/manager.js

import { addons } from '@storybook/addons';
// import { themes } from '@storybook/themes';
import yourTheme from './YourTheme';

addons.setConfig({
  // theme: themes.dark,
  theme: yourTheme,
});
