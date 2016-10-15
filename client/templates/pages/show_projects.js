Template.showProjects.helpers({
    projects: function() {
        return Projects.find({});
    }
})

Template.showProjects.events({
    'click .log-num': function() {
        Router.go('numbers', {_id: projectId});
    }
})