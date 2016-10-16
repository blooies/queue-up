Template.header.helpers({
    title: function() {
        return Session.get('title');
    },
    addEventsPage: function() {
        return Session.get('title') == 'My Events';
    }
})

Template.header.events({
    'click .add-events': function() {
        Router.go('createNew');
    }
})