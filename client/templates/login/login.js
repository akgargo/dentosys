Meteor.logout();
var selected;

Template.login.helpers({
    status: function () {
        console.log(Session.get('status'))
        return Session.get('status');
    },
    message: function () {
        console.log(Session.get('message'))
        return Session.get('message');
    }
});

Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var
        email = $('[name=email]').val(),
        password = $('[name=password]').val();
        // TODO: validate data

        // switch loading form
        Session.set('status', 'verifloading');
        Meteor.loginWithPassword(email, password, function(fail){
            if (fail) {
                Session.set('status', 'error');
                Session.set('message', fail.reason);
            } else {
                Session.set('status', 'success');
                Router.go('layout');
            }
        });
        return false;
    },
    'click [name=email], click [name=password]': function(event) {
        Session.set('message', null);
    },
    'focus [name=email], focus [name=password], blur [name=email], blur [name=password]': function(event, object, data) {
        $(event.currentTarget).toggleClass('selected')
    }
});