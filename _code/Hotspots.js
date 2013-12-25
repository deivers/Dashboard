var midOpacity = 0.6;
var faintOpacity = 0.3;

var previousNavigationDiv;

// initially "hide" all hotspots and their checkmarks
$(".hotspot").animate({opacity: faintOpacity},2000);

jumpToWebPage = function(pageUrl) {
	//console.log("jumping to this web page: " + pageUrl);
	window.open(pageUrl, "_self");
}

hotspotClick = function(target, pageUrl) {
	var whichHotspot = $(target).parent(); // the hotspot div corresponding to the edge symbol
	//console.log("click on hotspot... will show this page: "+pageUrl);
	$.fancybox({type:"iframe", href:pageUrl, openEffect:"elastic", minWidth:500, minHeight:400, afterClose: function(){markVisited(whichHotspot)}});
}

markVisited = function(whichElement) {
	//console.log("markVisited function");
	whichElement.css({opacity: 1});
}

hotspotOver = function(target) {
	var whichHotspot = $(target).parent(); // the hotspot div corresponding to the edge symbol
	var currentOpacity = whichHotspot.css("opacity");
	if (currentOpacity <= midOpacity)
		whichHotspot.animate({opacity: midOpacity}, 200);
}

hotspotOut = function(target) {
	var whichHotspot = $(target).parent(); // the hotspot div corresponding to the edge symbol
	var currentOpacity = whichHotspot.css("opacity");
	if (currentOpacity <= midOpacity)
		whichHotspot.animate({opacity: faintOpacity}, 400);
}
