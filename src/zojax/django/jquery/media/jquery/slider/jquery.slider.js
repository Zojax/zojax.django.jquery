$(function() {
	function toggleSlider() {
		var $btn = $(this);
		var target = $btn.siblings("a.target").attr("href");
		var selector = "#slider .contents" + target;
		var $target = $(selector);
		if ($target.length == 0) {
			return;
		}
		if ($btn.hasClass("shown")) {
			$target.slideUp(function() {
				$btn.removeClass("shown");
			});
		} else {
			var $other_sliders = $("#slider .contents").not(selector);
			if ($other_sliders.length == 0) {
				$target.slideDown(function() {
					$btn.addClass("shown");
				});
			} else {
				$other_sliders.slideUp(function() {
					$("#slider .tab a.toggle.shown").removeClass("shown");
					$target.slideDown(function() {
						$btn.addClass("shown");
					});
				});
			}
		}
	}
	$("#slider .tab a.toggle").attr("href", "javascript:void(0);");
	$("#slider .tab a.toggle").click(toggleSlider);
});