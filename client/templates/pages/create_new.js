Template.createNew.helpers({
    firstStep: function() {
        return Session.get('firstStep');
    }
})

Template.createNew.events({
    'click .create-new-next': function() {
        Session.set('firstStep', false);
        var name = $('#event-name').val();
        var location = $('location').val();
        var date = $('#date-picker').val();
        LocalBatches.insert({
            name: name,
            location: location,
            date: date
        })
    }
})

Template.createNew.rendered = function() {
    Session.set('title', 'Create a new event');
    Session.set('firstStep', true);
    $('#date-picker').datepicker();
}