
Router.configure({
  layoutTemplate: 'container',
  notFoundTemplate: 'notFound'
});

layoutController = RouteController.extend({
	layoutTemplate: 'layout',
	onBeforeAction: function () {},
	onAfterAction: function() {
		if (! Meteor.user()) {
			if (!Meteor.loggingIn()) {
				Router.go('login');
			}
			else{
			}
		}
	},
	action: function() { this.render(); }
});
loginController = RouteController.extend({
	layoutTemplate: 'container',
	onBeforeAction: function() {},
	onAfterAction: function() {},
	action: function() { this.render(); }
});/*
patientsController = RouteController.extend({
	layoutTemplate: '___baseLayout___',
	yieldTemplates: { '___example___': { to:'___example___' } }
	waitOn: function() { return Meteor.suscribe('___example___'); },
	data: function() { return { ___example____: ___Collection___.find() }; },
	onBeforeAction: function() {},
	onAfterAction: function() {},
	action: function() { this.render(); }
});
patientController = RouteController.extend({
	layoutTemplate: '___baseLayout___',
	yieldTemplates: { '___example___': { to:'___example___' } }
	waitOn: function() { return Meteor.suscribe('___example___'); },
	data: function() { return { ___example____: ___Collection___.find() }; },
	onBeforeAction: function() {},
	onAfterAction: function() {},
	action: function() { this.render(); }
});
patientResourceController = RouteController.extend({
	layoutTemplate: '___baseLayout___',
	yieldTemplates: { '___example___': { to:'___example___' } }
	waitOn: function() { return Meteor.suscribe('___example___'); },
	data: function() { return { ___example____: ___Collection___.find() }; },
	onBeforeAction: function() {},
	onAfterAction: function() {},
	action: function() { this.render(); }
});
patientResumeController = RouteController.extend({
	layoutTemplate: '___baseLayout___',
	yieldTemplates: { '___example___': { to:'___example___' } }
	waitOn: function() { return Meteor.suscribe('___example___'); },
	data: function() { return { ___example____: ___Collection___.find() }; },
	onBeforeAction: function() {},
	onAfterAction: function() {},
	action: function() { this.render(); }
});
patientFinanceController = RouteController.extend({
	layoutTemplate: '___baseLayout___',
	yieldTemplates: { '___example___': { to:'___example___' } }
	waitOn: function() { return Meteor.suscribe('___example___'); },
	data: function() { return { ___example____: ___Collection___.find() }; },
	onBeforeAction: function() {},
	onAfterAction: function() {},
	action: function() { this.render(); }
});
patientOdontoController = RouteController.extend({
	layoutTemplate: '___baseLayout___',
	yieldTemplates: { '___example___': { to:'___example___' } }
	waitOn: function() { return Meteor.suscribe('___example___'); },
	data: function() { return { ___example____: ___Collection___.find() }; },
	onBeforeAction: function() {},
	onAfterAction: function() {},
	action: function() { this.render(); }
});
aboutController = RouteController.extend({
	layoutTemplate: '___baseLayout___',
	yieldTemplates: { '___example___': { to:'___example___' } }
	waitOn: function() { return Meteor.suscribe('___example___'); },
	data: function() { return { ___example____: ___Collection___.find() }; },
	onBeforeAction: function() {},
	onAfterAction: function() {},
	action: function() { this.render(); }
});
notFoundController = RouteController.extend({
	layoutTemplate: '___baseLayout___',
	yieldTemplates: { '___example___': { to:'___example___' } }
	waitOn: function() { return Meteor.suscribe('___example___'); },
	data: function() { return { ___example____: ___Collection___.find() }; },
	onBeforeAction: function() {},
	onAfterAction: function() {},
	action: function() { this.render(); }
});
*/




Router.map( function () {
  this.route('layout', { path: '/' });
  this.route('login');
  this.route('patients');
  this.route('patient', { path: 'patient/:_id?/edit?' });
  //this.route('patientResource', { path: 'patient/:_id/resources/:file(*)?' });
  this.route('patientResume', { path: 'patient/:_id/resume' });
  this.route('patientFinance', { path: 'patient/:_id/finance' });
  this.route('patientOdonto', { path: 'patient/:_id/odontograma' });
  this.route('about');
  this.route('notFound', { path: '*' });
});
