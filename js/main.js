$(document).ready(function() {

	var $_ie7 = $("html.lt-ie8"),
		$_ie8 = $("html.lt-ie9"),
		$_ie9 = $("html.no-js");

	$_ie8.find(".inner-box").mouseenter(function() {
		$(this).stop().animate({backgroundSize: '50%'}, 300);
	}).mouseleave(function() {
		$(this).stop().animate({backgroundSize: '100%'}, 300);
	});

	$(".inner-box").each(function() {

		var self = $(this);

		self.find

	});

	$(".item_design").each(function() {

		var self = $(this);

		self.find(".description-pixel").slideToggle(0);

		self.find(".onglet-unfold").click(function() {

			var new_height,
			    toggle = $(this).data("toggle");

			toggle = !toggle;

			self.find(".description-pixel").slideToggle();

			$(this).data("toggle", toggle);
		});
	});


});

