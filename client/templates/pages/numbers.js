Template.numbers.helpers({

})

Template.numbers.events({
    'click #submit-num': function() {
        var first = document.getElementById('first-name').value;
        var last = document.getElementById('last-name').value;
        var number = document.getElementById('number').value;
        var projectId = Router.current().params._id;
        var numberObj = {
            first: first,
            last: last,
            number: number,
            projectId: projectId
        }

        Meteor.call('createNumber', numberObj, function(error, result) {
            if (error) {
                console.log(error);
            } else {
                var number = Numbers.findOne({_id: result});
                var message = MessageController.getMessage(number.queueNumber, number.first);
                Meteor.call('sendTextMessage', number.number, message, function(error, result) {
                    console.log("sent text message!", result);
                })
            }
        })
    }
})