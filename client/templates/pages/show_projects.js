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
    console.log("SET SESSION")
    Session.set('title', 'My Events');
}