import React from 'react';

import { Rightbar } from './Rightbar';

export default {
  title: 'Example/Rightbar',
  component: Rightbar,
};

const Template = (args) => <Rightbar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
