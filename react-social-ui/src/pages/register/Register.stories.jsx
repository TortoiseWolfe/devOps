import React from 'react';

import Register from './Register';

// import * as HeaderStories from './Header.stories';

export default {
  title: 'Lama Dev Pages/Register',
  component: Register,
};

const Template = (args) => <Register {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  // ...HeaderStories.LoggedOut.args,
};
