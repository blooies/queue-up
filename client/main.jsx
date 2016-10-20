import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';
import '../imports/startup/accounts-config.js';
import Header from '../imports/ui/Header.jsx';
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  // render(<App />, document.getElementById('render-target'));
  render(<Header />, document.getElementById('header'));
  render(renderRoutes(), document.getElementById('render-target'));
});
