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

function Square(sidelength){
    Shape.call(this,"square" , 4 , sidelength);
}

Square.prototype = Shape.prototype;
Square.prototype.constructor = Square;

Object.assign(Square.prototype, {
    calcArea(){
        var area= this.sidelength * this.sidelength;
        console.log("Area of " + this.name +  " is : "  + area);
    } 
});

var square = new Square(5);
square.calcPerimeter();
square.calcArea();