Template.header.helpers({
    title: function() {
        return Session.get('title');
    },
    addEventsPage: function() {
        return Session.get('title') == 'My Events';
    },
    noUser: function() {
    	return !Meteor.user();
    }
})

Template.header.events({
    'click .add-events': function() {
        Router.go('createNew');
    },

    'click .glyphicon-plus': function() {
        Router.go('createNew');
    },

    'click .login-btn': function() {
    	Router.go('login');
    },

    'click .logout-btn': function() {
    	AccountsTemplates.logout();
    	Session.set('title', '');
    	Router.go('/')
    }
})