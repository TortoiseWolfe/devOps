import React from 'react';

import Topbar from './Topbar';

export default {
  title: 'Lama Dev/Topbar',
  component: Topbar,
};

const Template = (args) => <Topbar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
