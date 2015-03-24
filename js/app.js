$(document).ready(function() {
	$('input').keydown(function(e) {
		if (e.keyCode === 13) {
			var item = $('input').val();
			var listItem = '<div class="item"><span class="delete"></span>' 
			+ item + '<span class="check"></span></div>';
			$('section').append(listItem);
		}
	})
})