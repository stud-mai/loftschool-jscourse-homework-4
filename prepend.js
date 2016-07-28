let prepend = (param1,param2) => {
	if (param1.childNodes[0]) {
		param1.insertBefore(param2, param1.childNodes[0])
	} else {
		param1.appendChild(param2)
	}
}

module.exports = prepend;