var midOpacity = 0.5;
var faintOpacity = 0.2;

var previousNavigationDiv;
///$("LifeCycleHome").css("z-index", 1);

// initially "hide" all hotspots and their checkmarks
$(".hotspot").css({opacity: faintOpacity});
///$("checkmark_outlined2").css({"opacity": 0, "z-index": -1});


animateToFrameAndShowHtml = function(externalUrl) {
	/// example usage: sym.getComposition().getStage().animateToFrameAndShowHtml("jumpto/mosquito.html");
	console.log("animateToFrame function running with this param: "+ externalUrl);
	console.log("<iframe src='"+externalUrl+"'></iframe>");
	previousNavigationDiv = "Stage_webPageDisplay"; // save so we know how to return
	///thisSymbol = $(previousNavigationDiv);
	$("#Stage_webPageDisplay_webPageDisplayPort").append("<iframe src='"+externalUrl+"' height=100% width=100%></iframe>");
	//sym.getSymbol("LifeCycleHome").play(0); // only if it's already visible?
	//thisSymbol.play(0);
	$("#Stage_webPageDisplay").css("z-index", 10); // bring to front so it can receive clicks
	console.log("animateToFrameAndShowHtml is done.");
}

jumpToWebPage = function(pageUrl) {
	//console.log("jumping to this web page: " + pageUrl);
	window.open(pageUrl, "_self");
}

hotspotClick = function(target, pageUrl) {
	var whichHotspot = $(target).parent(); // the hotspot div corresponding to the edge symbol
	console.log("click on hotspot..");
	$.fancybox({type:"iframe", href:'http://en.wikipedia.org/wiki/Mosquito', openEffect:"elastic", minWidth:500, minHeight:400, afterClose: function(){markVisited(whichHotspot)}});
}

markVisited = function(whichElement) {
	console.log("markVisited function "+whichElement);
	whichElement.css({opacity: 1});
}

// animate zoom into the hotspot
/*hotspotClick = function(target, pageUrl) {
	var whichHotspot = $(target).parent(); // the hotspot div corresponding to the edge symbol
	console.log(whichHotspot);
	///animateToFrameAndShowHtml(pageUrl);
	whichHotspot.css({"z-index": 3});
	whichHotspot.animate({opacity: 1}, 400, function(){
		// actions placed here happen after the animation
		//whichHotspot.animate({left: 100, top:100, width:400, height:400}, 2000);
 		$(target).css({width:"inherit", height:"inherit"});
		whichHotspot.animate({
			left: -250,
			top: -50,
			width: 500,
			height: 500
		}, 2000);

	});
}*/

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
