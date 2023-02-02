function Shape(name , side , sidelength){
    this.name=name || "Shape";
    this.side=side || 0;
    this.sidelength=sidelength || 0;

}

Object.assign(Shape.prototype, {
    calcPerimeter(){
        var perimerer = this.side * this.sidelength;
        console.log("Primiter of " + this.name +  " is : "  + perimerer);
    } 
});

var square = new Shape("square", 4,5);
square.calcPerimeter();
var triangle = new Shape("triangle",3,3);
triangle.calcPerimeter();