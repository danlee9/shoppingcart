$(document).ready(function() {
	$('input').keydown(function(e) {
		if (e.keyCode === 13) {
			var item = $('input').val();
			var listItem = '<div class="item"><span class="delete"></span>' 
			+ item + '<span class="check"></span></div>';
			$('section').append(listItem);
			$('input').val('');
		}
	});
	$('section').on('click', '.check', function(e) {
		var $parent = $(this).parent();
		$parent.toggleClass("finished");
	});
	$('section').on('click', '.delete', function(e) {
		var $parent = $(this).parent();
		$parent.remove();
	});
})