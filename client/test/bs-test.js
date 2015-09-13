
Template.bst.events({
	'click bs-btn-col-span': function () {
		$(this).find('.bs-col-span').toggle();
	},
	'click bs-btn-visibility': function () {
		$(this).find('.bs-visibility').toggle();
	}
});

Template.bst.rendered = function() {
	var container = $('#bs-wrapper'),
	colSpan = 
		'<ul class="bs-col-span">' +
			'<li class="col-md-1"></li>' +
			'<li class="col-md-2"></li>' +
			'<li class="col-md-3"></li>' +
			'<li class="col-md-4"></li>' +
			'<li class="col-md-5"></li>' +
			'<li class="col-md-6"></li>' +
			'<li class="col-md-7"></li>' +
			'<li class="col-md-8"></li>' +
			'<li class="col-md-9"></li>' +
			'<li class="col-md-10"></li>' +
			'<li class="col-md-11"></li>' +
			'<li class="col-md-12"></li>' +
		'</ul>',
	visibility = 
		'<ul class="bs-visibility">' +
			'<li class="visible-xs"></li>' +
			'<li class="visible-sm"></li>' +
			'<li class="visible-md"></li>' +
			'<li class="visible-lg"></li>' +
			'<li class="visible-xs-block"></li>' +
			'<li class="visible-sm-block"></li>' +
			'<li class="visible-md-block"></li>' +
			'<li class="visible-lg-block"></li>' +
			'<li class="visible-xs-inline"></li>' +
			'<li class="visible-sm-inline"></li>' +
			'<li class="visible-md-inline"></li>' +
			'<li class="visible-lg-inline"></li>' +
			'<li class="visible-xs-inline-block"></li>' +
			'<li class="visible-sm-inline-block"></li>' +
			'<li class="visible-md-inline-block"></li>' +
			'<li class="visible-lg-inline-block"></li>' +
			'<li class="visible-print-block"></li>' +
			'<li class="visible-print-inline"></li>' +
			'<li class="visible-print-inline-block"></li>' +
			'<li class="hidden-xs"></li>' +
			'<li class="hidden-sm"></li>' +
			'<li class="hidden-md"></li>' +
			'<li class="hidden-lg"></li>' +
			'<li class="hidden-print"></li>' +
		'</ul>';
	$('#bs-btn-add').on('click', function() {
		container.append( $('<div>')
			.addClass('bs-item')
			.append( $('<nav>').addClass('bs-btn-col-span')
				.append( colSpan )
			)
			.append( $('<nav>').addClass('bs-btn-visibility')
				.append( visibility )
			)
		);
	});

}