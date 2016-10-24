import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import Header from '../imports/ui/Header.jsx';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});
