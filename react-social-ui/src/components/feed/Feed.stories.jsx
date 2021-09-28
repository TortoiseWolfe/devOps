import React from 'react';

import { Feed } from './Feed';

export default {
  title: 'Example/Feed',
  component: Feed,
};

const Template = (args) => <Feed {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
