import React from 'react';

import Profile from './Profile';

// import * as HeaderStories from './Header.stories';

export default {
  title: 'Lama Dev Pages/Profile',
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  // ...HeaderStories.LoggedOut.args,
};
