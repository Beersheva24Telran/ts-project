import Shape from "./Shape";

export default class Container implements Shape {
   constructor(private _shapes: Shape[], private _direction: "row" | "column") {

   }
    square(): number {
       return this._shapes.reduce((acc, cur) => acc + cur.square(), 0)
    }
    perimeter(): number {
        return this._shapes.reduce((acc, cur) => acc + cur.perimeter(), 0)
    }
    get width() {
        return this._direction === "row" ? this._shapes.reduce((acc, cur) => acc + cur.width, 0) :
        this._shapes.reduce((acc, cur) => Math.max(acc,cur.width), 0)
    }
    get height() {
        return this._direction === "column" ? this._shapes.reduce((acc, cur) => acc + cur.height, 0) :
        this._shapes.reduce((acc, cur) => Math.max(acc,cur.height), 0)
    }
    count(): number {
        return this._shapes.reduce((acc, cur) => acc +
         (cur instanceof Container ? cur.count() : 1), 0);
    }
    
}