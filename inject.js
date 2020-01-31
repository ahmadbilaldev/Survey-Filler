$(document).ready(function() {
	if (location.href.indexOf('survey/fill') != -1) {
		swal('LMS Survey Filler by Ahmad Bilal', ' Choose a rating:', {
			buttons: {
				5: {
					text: '5: Strongly Agree',
					value: '5'
				},
				4: {
					text: '4: Agree',
					value: '4'
				},
				3: {
					text: '3: Neutral',
					value: '3'
				},
				2: {
					text: '2: Disagree',
					value: '2'
				},
				1: {
					text: '1: Strongly Disagree',
					value: '1'
				}
			}
		}).then(value => {
			switch (value) {
				case '5':
					$('label:contains("5")')
						.find('input')
						.prop('checked', true);
					break;
				case '4':
					$('label:contains("4")')
						.find('input')
						.prop('checked', true);
					break;
				case '3':
					$('label:contains("3")')
						.find('input')
						.prop('checked', true);
					break;
				case '2':
					$('label:contains("2")')
						.find('input')
						.prop('checked', true);
					break;
				case '1':
					$('label:contains("1")')
						.find('input')
						.prop('checked', true);
					break;
				default:
					break;
			}
			$('label:contains("81-100")')
				.find('input')
				.prop('checked', true);

			swal('Done!', 'All questions filled', 'success');
			// Scroll to bottom
			$('html,body').animate({ scrollTop: document.body.scrollHeight }, '1500');
		});
	}
});
