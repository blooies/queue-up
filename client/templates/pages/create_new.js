Template.createNew.helpers({
    firstStep: function() {
        return Session.get('firstStep');
    }
})

Template.createNew.events({
    'click .create-new-next': function() {
        Session.set('firstStep', false);
        document.getElement
    }
})

Template.createNew.rendered = function() {
    Session.set('title', 'Create a new event');
    Session.set('firstStep', true);
    $('#date-picker').datepicker();
}