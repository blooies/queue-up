import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
});

Accounts.onLogin(() => {
	if (Meteor.isClient) {
		browserHistory.push('/')
	}
})