$( document ).ready(function() {

	/* Sidebar height set */
	$('.sidebar').css('min-height',$(document).height());

	/* Secondary contact links */
	var scontacts = $('#contact-list-secondary');
	var contact_list = $('#contact-list');
	
	scontacts.hide();
	
	contact_list.mouseenter(function(){ scontacts.fadeIn(); });
	
	contact_list.mouseleave(function(){ scontacts.fadeOut(); });

	$('.thumbnail').each(function() {
		var currentImage = $(this);
		currentImage.wrap("<a class='image-link' href='" + currentImage.attr("src") + "'</a>");
	});
	$('.image-link').magnificPopup({type:'image'});  

});