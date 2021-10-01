import React from 'react';

import Sidebar from './Sidebar';

export default {
  title: 'Lama Dev Components/Sidebar',
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
