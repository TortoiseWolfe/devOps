import React from 'react';

import Login from './Login';

// import * as HeaderStories from './Header.stories';

export default {
  title: 'Lama Dev Pages/Login',
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  // ...HeaderStories.LoggedOut.args,
};
