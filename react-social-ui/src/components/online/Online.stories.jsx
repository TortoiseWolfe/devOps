import React from 'react';

import Online from './Online';

export default {
  title: 'Lama Dev Components/Online',
  component: Online,
};

const Template = (args) => <Online {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: {},
};
