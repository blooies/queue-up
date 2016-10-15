Meteor.publish('batches', function() {
    return Batches.find({});
})

Meteor.publish('projects', function() {
    return Projects.find({});
})

Meteor.publish('numbers', function() {
    return Numbers.find({});
})