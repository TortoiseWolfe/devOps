import React from 'react';

import { Post } from './Post';

export default {
  title: 'Example/Post',
  component: Post,
};

const Template = (args) => <Post {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
