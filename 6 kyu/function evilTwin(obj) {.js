var orig = {x: 5};
function evilTwin(obj) {
	let thiss = Object.create(obj)
	thiss.hasGoatee = true
	return thiss
}

let twin = evilTwin(orig)
console.log(twin.x)