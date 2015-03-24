$(function() {
	$("#carousel").carouFredSel({
		responsive: true,
		items: {
			visible: 1,
			width: 900,
			height: 500
		},
		scroll: {
			duration: 500,
			timeoutDuration: 5000,
			fx: 'uncover-fade'
		},
		pagination: '#pager'
	});
});