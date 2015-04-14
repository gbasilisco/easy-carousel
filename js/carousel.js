$(document).ready(function() {
	$(".right-btn").click(function() {
		// alert('next function');

		var testimonialElements = $(".liElement");

		var check = 0;

		for (var i = 0; i < testimonialElements.length; i++) {

			// alert("CHECK:"+check);
			var element = testimonialElements.eq(i);

			if (i == testimonialElements.length - 1) {
				// alert('I'm into reset');
				var liInitial = $('[tabindex=0]');
				liInitial.removeClass('invisible');
				liInitial.addClass('visible');
				element.removeClass('visible');
				element.addClass('invisible');

				// Set color to jumper
				var buttons = $(".jump-to");

				for (var i = 0; i < buttons.length; i++) {

					var button = buttons.eq(i);

					button.removeClass('current-jump-to');

				}

				var buttonDef = $("#jumpTo-0");
				buttonDef.addClass('current-jump-to');
				// End set color to jumper

				try {
					exit;
				} catch (err) {
					return;
				}
			}

			if (element.hasClass("visible")) {
				// alert('I'm into visible');
				// alert(element.attr( 'tabindex' )+' test');

				var x = i + 1;

				var currentLi = $('[tabindex="' + x + '"]')
				// alert(currentLi.attr('tabindex')+' test');

				element.removeClass('visible');
				element.addClass('invisible');

				// Set color to jumper
				var buttons = $(".jump-to");

				for (var i = 0; i < buttons.length; i++) {

					var button = buttons.eq(i);

					button.removeClass('current-jump-to');

				}
				// End set color to jumper

				currentLi.removeClass('invisible');
				currentLi.addClass('visible');

				// Set color to jumper
				var buttonDef = $("#jumpTo-" + x);
				buttonDef.addClass('current-jump-to');
				// End set color to jumper

				check = 1;
				try {
					exit;
				} catch (err) {
					return;
				}

			}

		}

	});
});

$(document).ready(function() {
	$(".left-btn").click(function() {
		// alert('back function');

		var testimonialElements = $(".liElement");

		var check = 0;

		for (var i = 0; i < testimonialElements.length; i++) {

			// alert("CHECK:"+check);
			var element = testimonialElements.eq(i);

			if (element.hasClass("visible")) {
				// alert('CURRENT TABINDEX:'+element.attr( 'tabindex' ));

				// alert('I'm into visible');

				var x = i - 1;

				if (x < 0) {
					// alert('I'm into last element');
					var newTabIndex = testimonialElements.length - 1;
					var liInitial = $('[tabindex="' + newTabIndex + '"]')
					liInitial.removeClass('invisible');
					liInitial.addClass('visible');
					element.removeClass('visible');
					element.addClass('invisible');

					// Set color to jumper
					var buttons = $(".jump-to");

					for (var i = 0; i < buttons.length; i++) {

						var button = buttons.eq(i);

						button.removeClass('current-jump-to');

					}
					// alert('VAR:' + newTabIndex);
					var buttonDef = $("#jumpTo-" + newTabIndex);
					// alert('after:' + buttonDef.attr('class'));
					buttonDef.addClass('current-jump-to');
					// alert('after2:' + buttonDef.attr('class'));
					// End set color to jumper

					try {
						exit;
					} catch (err) {
						return;
					}

				}

				var currentLi = $('[tabindex="' + x + '"]')
				// alert('current tabindex'+currentLi.attr('tabindex'));

				element.removeClass('visible');
				element.addClass('invisible');

				// Set color to jumper
				var buttons = $(".jump-to");

				for (var i = 0; i < buttons.length; i++) {

					var button = buttons.eq(i);
					button.removeClass('current-jump-to');

				}
				// End set color to jumper

				currentLi.removeClass('invisible');
				currentLi.addClass('visible');

				// Set color to jumper
				var buttonDef = $("#jumpTo-" + x);
				buttonDef.addClass('current-jump-to');
				// End set color to jumper

				check = 1;
				try {
					exit;
				} catch (err) {
					return;
				}

			}
		}

	});
});

$(document).ready(function() {
	$('.jump-to').click(function() {
		// alert('Set specific element function');

		// alert($(this).attr('id'));

		// Set color to jumper
		var buttons = $(".jump-to");

		for (var i = 0; i < buttons.length; i++) {

			var button = buttons.eq(i);

			button.removeClass('current-jump-to');

		}

		$(this).addClass('current-jump-to');

		// Active visible li

		var res = $(this).attr('id').split("-");
		var newPosition = res[1];

		var testimonialElements = $(".liElement");

		for (var i = 0; i < testimonialElements.length; i++) {

			var element = testimonialElements.eq(i);

			element.removeClass('visible');
			element.addClass('invisible');

			if (element.attr('tabindex') == newPosition) {
				element.removeClass('invisible');
				element.addClass('visible');
			}

		}
	});
});