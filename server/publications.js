Meteor.publish('batches', function() {
    return Batches.find({});
})

Meteor.publish('events', function() {
    return Events.find({});
})

Meteor.publish('numbers', function() {
    return Numbers.find({});
})