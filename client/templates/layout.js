Session.setDefault('layoutTemplate', 'dashboard');
var menuList;
Template.layout.helpers({
  'getTemplate': function() {
    return Session.get('layoutTemplate');
  },
  'getDataContext': function() {
    return Session.get('layoutDataContext');
  }
})
Template.layout.rendered = function () {
  Meteor.setTimeout(function(){
    Session.set('begin', 'accesing grantaccess');
    Meteor.setTimeout(function() { Session.set('begin','all-hide'); }, 1000)
  },2000);
};