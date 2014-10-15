/* When the page has loaded */
$(function() {

	/* When the user clicks a H3 element */
	$('h3').click(function() {

		/* Hide the element after that H3 */
		$(this).next().slideToggle(100);

	});

});













