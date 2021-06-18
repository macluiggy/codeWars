/*class Router {
    constructor() {
        this.routes = {};
    }
    bind(url, method, action) {
        this.routes[`${method} ${url}`] = action;
    }
    runRequest(url, method) {
        var action = this.routes[`${method} ${url}`];
        return (action)? action() : 'Error 404: Not Found';
    }
}*/

var Router = function()
{
	this.routes = {};
	this.bind = function(url, method, action) {
		this.routes[`${url} ${method}`] = action;
	};
	this.runRequest = function(url, method) {
		let action = this.routes[`${url} ${method}`];
		return action ? action() : 'Error 404: Not Found'
	}
}

var router = new Router;
router.bind('/login', 'GET', function() { return 'Please log-in.'; })
console.log(router.runRequest('/login', 'GET'))
console.log(router.routes)

let obj = {}

obj['heleo'] = 'helo'
console.log(obj)