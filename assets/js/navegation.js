/**
 * Función para manejar el efecto dropdown del navbar
 */
(function(){
	function close_accordion_item() {
		$('.accordion-wrapper .accordion-title').removeClass('active');
		$('.accordion-wrapper .accordion-content').slideUp(300).removeClass('open');
	}

	$('.accordion-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');
 
		if($(e.target).is('.active')) {
			close_accordion_item();
		}else {
			close_accordion_item();
 
			// Add active class to item title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.accordion-wrapper ' + currentAttrValue).slideDown(300).addClass('open'); 
		}
 
		e.preventDefault();
	});
})();


( function () {
	var player = new MediaElementPlayer('#player1');
	console.log("asdasd");
})();