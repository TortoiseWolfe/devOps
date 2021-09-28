import React from 'react';

import CloseFriend from './CloseFriend';

export default {
  title: 'Lama Dev/CloseFriend',
  component: CloseFriend,
};

const Template = (args) => <CloseFriend {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: {},
};
