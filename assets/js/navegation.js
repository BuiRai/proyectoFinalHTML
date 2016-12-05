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
	videos = document.querySelectorAll("video");
	for (var i = 0, l = videos.length; i < l; i++) {
		var video = videos[i];
		var src = video.src || (function () {
				var sources = video.querySelectorAll("source");
				for (var j = 0, sl = sources.length; j < sl; j++) {
					var source = sources[j];
					var type = source.type;
					var isMp4 = type.indexOf("mp4") != -1;
					if (isMp4) return source.src;
				}
				return null;
			})();
		if (src) {
			var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
			if (isYoutube) {
				var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
				id = (id.length > 1) ? id.splice(1) : id;
				id = id.toString();
				var mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
				video.src = mp4url + id;
			}
		}
	}
})();

