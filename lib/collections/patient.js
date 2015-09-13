//Patient = new Mongo.Collection('patient');
myCollection = new Mongo.Collection('exampleCollection');

Patient = new Mongo.Collection('patient');

var checkPatient = function(data) {
	return 
		(data.name == undefined || check(data.name, String)) &&
		(data.phone == undefined || check(data.phone, String)) &&
		(data.mobile == undefined || check(data.mobile, String)) &&
		(data.email == undefined || check(data.email, String)) &&
		(data.address == undefined || check(data.address, String)) &&
		(data.city == undefined || check(data.city, String)) &&
		(data.profession == undefined || check(data.profession, String)) &&
		(data.agreement == undefined || check(data.agreement, String)) &&
		(data.observation == undefined || check(data.observation, String));
};
Meteor.methods({
	insertPatient: function(data) {
		console.log(data)
		checkPatient(data);

		var id = Patient.insert({
			createdAt: new Date(),
			profile: data
		});
		console.log('id del insert ?')
		console.log(id);
		return id;
	},
	updatePatient: function(id, data) {
		callback = function(){}
		checkPatient(data);

		Patient.update({'_id': id}, { $set: { profile: data } }, callback);
	},
	removePatient: function(id) {
		callback = function(){}
		Patient.remove(id, callback);
	}
});

Patient.allow({
	insert: function (userId, doc) {
		//...
	},
	update: function (userId, doc, fields, modifier) {
		//...
	},
	remove: function (userId, doc) {
		//...
	},
	fetch: ['owner'],
	transform: function () {
		//...
	}
});

Patient.deny({
	insert: function (userId, doc) {
		//...
	},
	update: function (userId, doc, fields, modifier) {
		//...
	},
	remove: function (userId, doc) {
		//...
	},
	fetch: ['locked'],
	transform: function () {
		//...
	}
});