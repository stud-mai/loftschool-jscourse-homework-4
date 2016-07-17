let prepend = (param1,param2) => {
	param1.insertBefore(param2,param1.childNodes[0]);
}

module.exports = prepend;