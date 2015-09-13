Meteor.startup(function () {
  if (!Meteor.userId()) {
    Router.go('login');
  }
  Session.set('begin', 'accesing');
});

Template.body.helpers({
  isUser: function() {
    return Meteor.userId();
  }
});

var path = window.location.pathname;
Template.dashboard.helpers({
  counter: function () {
    return Session.get('counter');
  },
  begin: function () {
    return Session.get('begin');
  },
  myCollection: function() {
    return myCollection;
  }
});

Template.dashboard.helpers({
  posts: function() {
    console.log(myCollection.find())
    return myCollection.find()
  }
});
Template.dashboard.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});