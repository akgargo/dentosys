// set a default patient to use in userForm
Session.set('defaultPatient', {profile:{
    avatar: '/images/default_avatar_male.jpg',
    name: '',
    phone: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    birthday: '',
    profession: '',
    agreement: '',
    observation: ''
}})
// set current patient as default values
Session.setDefault('currentPatient', Session.get('defaultPatient'))
Session.setDefault('patientFormAction', {'mode':'add','text':'Agregar'})

Template.patient.helpers({
  'getTemplate': function() {
    return Session.get('patientTemplate');
  },
  'getDataContext': function() {
    return Session.get('patientDataContext');
  }
});

Template.patient.events({
	'click': function () {
		// ...
	}
});

Template.patient.rendered = function () {
	
};