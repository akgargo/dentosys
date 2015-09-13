var limit = 7;

Template.patientList.helpers({
	patients: function () {
		return Patient.find({}, {
			skip: Session.get('patientSkip'),
			limit: limit
		});
	}
});

Template.patientList.events({
	'click .row.patient-row': function () {
		Session.set('currentPatient', Patient.findOne(this._id));
		Session.set('patientFormAction', {'mode':'edit','text':'Editar'});
	},
	'click .previous': function() {
		Session.set('patientSkip', Session.get('patientSkip') - limit);
	},
	'click .next': function() {
		Session.set('patientSkip', Session.get('patientSkip') + limit);
	},
	'click .btn-add': function() {
		Session.set('currentPatient', Session.get('defaultPatient'));
		Session.set('patientFormAction', {'mode':'add','text':'Agregar'})
	}
});

Template.patientList.rendered = function () {
	Session.setDefault('patientSkip', 0)
};