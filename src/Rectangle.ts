import Shape from "./Shape";

export default class Rectangle implements Shape {
   constructor(private _width: number, private _height: number){}
    square(): number {
        return this._width * this._height;
    }
    perimeter(): number {
       return 2 * this._width + 2 * this._height
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    
}