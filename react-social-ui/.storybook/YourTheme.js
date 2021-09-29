// .storybook/YourTheme.js

import { create } from '@storybook/theming';
// import { themes } from '@storybook/themes';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  // appBg: 'white',
  appBg: '#fdd978',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#605542',
  barSelectedColor: 'black',
  barBg: '#80acaa',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'geoLARP',
  brandUrl: 'https://geoLARP.com',
  brandImage: 'https://place-hold.it/350x150',
});
