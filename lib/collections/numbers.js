Numbers = new Mongo.Collection('numbers');

Meteor.methods({
    createNumber: function(numberJson) {
        var numberId = Numbers.insert(numberJson)
        return {
            _id : numberId
        };
    },

    sendTextMessage: function() {
        if (Meteor.isServer) {
            TwilioController.sendTextMessage();
        }
    }
})