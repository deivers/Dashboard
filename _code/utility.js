

function debug(x) {
	if (typeof x === "object") {
		console.log(JSON.stringify(x));
	} else
		console.log(x);
}

function constrain(param, defaultVal, min, max) {
	if (!exists(param))
		return defaultVal;
	if (exists(min))
		param = Math.max(min, param);
	if (exists(max))
		param = Math.min(max, param);
	return param;
}