function showMetaInfo(versionString) {
	var copyrightText = "Copyright 2013";
	var createdByText = "";
	var versionText = "Version "+versionString+".";
	var centerNode = $("<center></center>");
	centerNode.append($("<span></span>").text(copyrightText+" "+createdByText+" "));
	centerNode.append($("<a href='http://www.onetimesoftware.com' target='_blank'></a>").text("One Time Software"));
	centerNode.append($("<span></span>").text(". "+versionText));
	centerNode.append("<br>");
	centerNode.append($("<span></span>").text("Free for academic use when displaying this notice."));
	centerNode.css({
		color: "gray",
		"font-size": "x-small"
	});
	return centerNode;
}

