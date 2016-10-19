import { Accounts } from 'meteor/accounts-base';

var mySubmitFunc = function(error, state) {
    if (!error) {
        if (state === "signIn") {
            Router.go('/');
        }
        if (state === "signUp") {
            Router.go('/');
        }
    }
};

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc
});
