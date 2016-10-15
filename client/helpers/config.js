// Accounts.ui.config({
//     passwordSignupFields : 'USERNAME_ONLY'
// });

// Accounts.onLogin(function () {
//     Meteor.call('userHasGoal', function (err, userHasGoal) {
//         var currentPath = Iron.Location.get().path;

//         console.log('current', currentPath);
//         if (userHasGoal &&
//                 (currentPath === '/cry-level' ||
//                 currentPath === '/goal-settings' ||
//                 currentPath === '/')) {

//             Router.go('cryLevel');
//         } else if (!userHasGoal) {
//             Router.go('showGoals');
//         }
//     }); 
// });