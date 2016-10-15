Template.numbers.helpers({

})

Template.numbers.events({
    'click #submit-num': function() {
        console.log("HERE2!!!!")
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
        console.log(numberObj)
        Meteor.call('createNumber', numberObj, function(error, result) {
            if (error) {
                console.log(error);
            } else {
                console.log(result)
            }
        })
    },

})