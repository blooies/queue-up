Numbers = new Mongo.Collection('numbers');

Meteor.methods({
    createNumber: function(numberJson) {
        var projectId = numberJson.projectId;
        var project = Projects.findOne({_id: projectId});
        var currentQueue = project.totalNumbers;
        var numberId;
        currentQueue += 1;
        numberJson['queueNumber'] = currentQueue;

        numberId = Numbers.insert(numberJson);
        Projects.update(projectId, {$set: {totalNumbers: currentQueue}});

        return numberId;
    },

    sendTextMessage: function(number, message) {
        if (Meteor.isServer) {
            var textId = TwilioController.sendTextMessage(number, message);
            return textId;
        }
    }
})