var texts = [];
// collect all possible menu options
var textFields = $(".textSource");
console.log("number of fields: "+textFields.length);
for (var i=0; i<textFields.length; i++) {
	texts[i] = $(textFields[i]).html();
	//console.log("text found at position "+i+": "+texts[i]);
}
// randomize the menu options
var textForMenus = texts.slice(0);	// duplicate the array
shuffleArray(textForMenus);
console.log("*****");
var optionString = "<option>?</option>";
for (var i=0; i<textFields.length; i++) {
	optionString += "<option>"+textForMenus[i]+"</option>";
}
// insert the menus into the DOM
//todo: but don't use textFields that are off stage left
var j = 0;
var answerKey = [];
for (var i=0; i<textFields.length; i++) {
	if ($(textFields[i]).position().left < -10) {
		;//console.log("#"+i+" is off stage left");
	} else {
		answerKey[j] = $(textFields[i]).html();
		$(textFields[i]).html("");
		$("<select id="+j+" class='menu'>"+optionString+"</select>").appendTo($(textFields[i]));
		j++;
	}
}
$(".textSource").css({"opacity": 1});
