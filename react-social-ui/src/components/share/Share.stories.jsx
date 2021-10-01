import React from 'react';

import Share from './Share';

export default {
  title: 'Lama Dev Components/Share',
  component: Share,
};

const Template = (args) => <Share {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
