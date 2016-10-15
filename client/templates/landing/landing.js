Template.landing.events({
    'click button#start-cry-btn' : function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (Meteor.userId()) {
            Meteor.call('userHasGoal', function (err, userHasGoal) {
                if (userHasGoal) {
                    Router.go('showGoals');
                } else {
                    Router.go('cryLevel');
                }
            }); 
        } else {
            Template._loginButtons.toggleDropdown();
        }
    }
});