Template.showProjects.helpers({
    projects: function() {
        return Projects.find({});
    },
    atLeastOneProject: function() {
        return Projects.findOne({});
    }
})

Template.showProjects.events({
    'click .log-num': function() {
        Router.go('numbers', {_id: this._id});
    },
    'click #create-new': function() {
        
    }
})

Template.showProjects.rendered = function() {
    Session.set('title', 'My Events');
}