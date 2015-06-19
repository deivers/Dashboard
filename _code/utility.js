

function debug(x) {
	if (typeof x === "object") {
		console.log(JSON.stringify(x));
	} else
		console.log(x);
}
