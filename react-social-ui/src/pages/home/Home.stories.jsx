import React from 'react';

import Home from './Home';

// import * as HeaderStories from './Header.stories';

export default {
  title: 'Lama Dev Pages/Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  // ...HeaderStories.LoggedOut.args,
};
