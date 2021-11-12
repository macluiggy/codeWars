var orig = {x: 5};
function evilTwin(obj) {
	return Object.create(obj)
}
let twin = evilTwin(orig)
console.log(2%3)