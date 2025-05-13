let a: number;
a = 10;
// a = "abc"
a = 20;
let s = "abc";
//s =10
let b = true;
b = !!a;
b = false;
const c = 10;
//c =11;
const arr = [ 1, 2, 3];
//arr.push("abc");
arr.length = 0;
arr.push(3);
const arr1 = [1, 2, 3, "abc"];
const arr2: number[] = [];
const arr3: number[][] = [];
function fun(a:number[][]): void {
  
}
type Person = {id: number, name: string, age?: number, address?: {city:string, street: string}};

const person: Person = {id: 123, name: "Vasya"};
person.age && person.age++;
person.address?.street //expression has union type string | undefined
person.address && person.address.city; //expression has type string
person.address!.city; //expression has type string
