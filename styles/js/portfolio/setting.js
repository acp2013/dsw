
jQuery(document).ready(function($){

if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio-area").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.filter li').click(function(e) {
		$(".filter li").removeclass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterclass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterclass == 'all') {
			var $filteredData = $data.find('.portfolio-item2');
		} else {
			var $filteredData = $data.find('.portfolio-item2[data-type=' + filterclass + ']');
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {
		

					jQuery('ul.da-thumbs > li').hoverdir();
					$("a[data-pretty^='prettyPhoto']").prettyPhoto();

						});		
		$(this).addclass("active"); 			
		return false;
	});
	
}//if quicksand

});