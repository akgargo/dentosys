Avatars = new FS.Collection("avatar", {
  stores: [new FS.Store.FileSystem("avatar", {path: "~/uploads/avatar"})]
});
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads/images"})]
});
Documents = new FS.Collection("documents", {
  stores: [new FS.Store.FileSystem("documents", {path: "~/uploads/documents"})]
});

Avatars.allow({
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

Images.allow({
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

Documents.allow({
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