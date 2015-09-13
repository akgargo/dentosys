currentAvatar = null

Template.patientForm.helpers({
	'patient': function() { 
		return Session.get('currentPatient') },
	'action': function () { return Session.get('patientFormAction') }
});

Template.patientForm.events({
	'click #avatar-upload': function () {
		$('#patientAvatarFile').click();
	},
	'change #patientAvatarFile': function (evt, temp) {
    currentAvatar = evt.target.files[0];
    if (currentAvatar.type.match('image.*')) {
    	var reader = new FileReader();
      reader.onload = (function(theFile) {
        return function(e) {
          $('#avatar-upload').prop('src', e.target.result)
        };
      })(currentAvatar);
      reader.readAsDataURL(currentAvatar);
    }
	},
	'click .btn-add': function() {
		Avatars.insert(currentAvatar, function (err, fileObj) {
			//console.log(fileObj)
      // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
    });
		Meteor.call('insertPatient', {
				avatar: $('[name=avatar]').prop('src', ''),
				name: $('[name=name]').val(),
				phone: $('[name=phone]').val(),
				mobile: $('[name=mobile]').val(),
				email: $('[name=email]').val(),
				address: $('[name=address]').val(),
				city: $('[name=city]').val(),
				birthday: $('[name=birthday]').val(),
				profession: $('[name=profession]').val(),
				agreement: $('[name=agreement]').val(),
				observation: $('[name=observation]').val()
		  }, function(err, data) {
		  if (err) { console.log(err); }
				Session.set('currentPatient', Patient.findOne(data));
				Session.set('patientFormAction', {'mode':'edit','text':'Editar'});
		})
	},
	'click .btn-edit': function() {
		Session.set('patientFormAction', {'mode':'save','text':'Guardar'});
	},
	'click .btn-save': function() {
		Meteor.call('updatePatient', this._id, {
			avatar: $('[name=avatar]').prop('src', currentAvatar),
			name: $('[name=name]').val(),
			phone: $('[name=phone]').val(),
			mobile: $('[name=mobile]').val(),
			email: $('[name=email]').val(),
			address: $('[name=address]').val(),
			city: $('[name=city]').val(),
			birthday: $('[name=birthday]').val(),
			profession: $('[name=profession]').val(),
			agreement: $('[name=agreement]').val(),
			observation: $('[name=observation]').val()
		})
		Session.set('patientFormAction', {'mode':'edit','text':'Editar'});
	},
	'click #patientFinance': function () {
		Session.set('patientTemplate', 'patientFinance');
	},
	'click #patientHistory': function () {
		Session.set('patientTemplate', 'patientHistory');
	}
});

Template.patientForm.rendered = function () {
	// set empty object to show form in first time
};