// JavaScript Document


jQuery(document).ready(function(){
Squarize();
});

function Squarize() {

var highestheight = 0;
var highestwidth = 0;

jQuery(".topinnerdiv").each(function() 
{
jQuery(this).css("height", jQuery(this).outerWidth(true));
    
});

jQuery(".bottominnerdiv").each(function() 
{
  jQuery(this).css("height", jQuery(this).outerWidth(true));
    
});

jQuery(".doubleinnerdiv").each(function()
{
jQuery(this).css("height", jQuery(this).outerWidth(true));
});


jQuery(".lstack").each(function() 
{
	if (jQuery(this).outerHeight(true) > highestheight) {
	highestheight = jQuery(this).outerHeight(true);
	}
	if (jQuery(this).outerWidth(true) > highestwidth) {
	highestwidth = jQuery(this).outerWidth(true);
	}
    
});

jQuery(".bottominnerdiv").each(function() 
{
	jQuery(this).css("height", jQuery(this).outerWidth(true));
	jQuery(this).css("margin-top", highestheight  - (2 * jQuery(this).outerHeight(true)));
});
};


