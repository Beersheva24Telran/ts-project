import Container from "./Container";
import Rectangle from "./Rectangle";
import Shape from "./Shape";
import Square from "./Square";

const shapes: Shape[] = [
    new Rectangle(3, 4),
    new Square(5),
    new Container([new Rectangle(5,6), new Rectangle(2, 3), new Square(4)], "row")
];
const container = new Container(shapes, 'column');
console.log("perimeter = " + container.perimeter());
console.log("square = " + container.square());
console.log("counte = " + container.count());
