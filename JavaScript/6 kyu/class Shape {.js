class Shape {
	[Symbol.toPrimitive]() {return this.area}
}

class CustomShape extends Shape {
	constructor(area) {
		super();
		this.area = area;
	}
}
class Square extends Shape {
	constructor(side) {
		super();
		this.area = side**2
	}
}
class Circle extends Shape {
	constructor(r) {
		super();
		this.area = r**2*Math.PI
	}
}
class Triangle  extends Shape {
	constructor(b,h) {
		super();
		this.area = b*h/2
	}
}
class Rectangle  extends Shape {
	constructor(w,h) {
		super();
		this.area = w*h
	}
}