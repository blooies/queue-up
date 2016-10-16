Router.configure({
    layoutTemplate : 'layout',
    loadingTemplate : 'loading',
    notFoundTemplate : 'notFound'
});

Router.route('/', {name : 'landing'});
Router.route('/project/:_id/numbers', {name : 'numbers'});
Router.route('/createNew', {name : 'createNew'});

// // Router.route('/videos', {name : 'displayVideos'});
// // Router.route('/videos/:_id', {
// //     name : 'playVideo',
// //     data: function() {
// //         return Content.findOne({videoId: this.params._id});
// //     }
// // })
// // Router.route('/goal-settings', {name : 'showGoals'});
// // Router.route('/cry-level', {name : 'cryLevel'});

// // Router.route('/results', {
// //     name: 'results',
// //     data: function () {
// //         var userGoal = UserGoals.findOne({userId: Meteor.userId()});
// //         var percent;
// //         var goal;
// //         var goalMessage;
// //         var params = {};
// //         params.minToGo = 0;
// //         params.minToDate = 0;

// //         if (userGoal) {
// //             goal = Goals.findOne({_id: userGoal.goalId});
// //             percent = Math.ceil(userGoal.minutesCompleted / (goal.minutes * 60) * 100);
// //             params.minToGo = Math.ceil((userGoal.minutesCompleted || 1) / 60);
// //             params.minToDate = goal.minutes;
// //             params.percent = percent;
// //         }

// //         if (goal) {
// //             goalMessage = goal.messages.find(function (message) {
// //                 return message.percent <= percent && percent <= message.max;
// //             });
// //             params.message = goalMessage.text;
// //         }

// //         if (!params.message) {
// //             params.message = 'You need to get crying.';
// //         }

// //         return params;
// //     }
// // });

// // var requireLogin = function () {
// //     if (!Meteor.userId()) {
// //         if (Meteor.loggingIn()) {
// //             this.render('loadingTemplate');
// //         } else {

// //             Router.go('landing');
// //         }
// //         this.stop();
// //     } else {
// //         this.next();
// //     }
// // }

// // Router.onBeforeAction('dataNotFound', {only : 'postPage'});
// // Router.onBeforeAction(requireLogin, {except : 'landing'});