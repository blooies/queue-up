import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import Header from '../imports/ui/Header.jsx';
import RenderRoutes from '../imports/startup/client/routes.jsx';

Meteor.startup(() => {
  render(<RenderRoutes/>, document.getElementById('render-target'));
});
