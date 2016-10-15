Template.showProjects.helpers({
    projects: function() {
        return Projects.find({});
    }
})

Template.showProjects.events({
    'click .log-num': function() {
        Router.go('numbers', {_id: this._id});
    },
    'click #create-new': function() {
        
    }
})