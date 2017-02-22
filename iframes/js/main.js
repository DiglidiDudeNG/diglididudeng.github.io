$(document).ready(function () {
	var navbar_user_name = $(".navbar_user_name", window.parent.document).html();
	$("body > p").html(navbar_user_name);
});
