type Color = "blue" | "red" | "green" | "yellow"
//let color: Color = "kuku" 
let color = "red"
enum DayOfWeek {
    Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sun=0, Mon, Tue, Wed, Thu, Fri, Sat
}
console.log(DayOfWeek.Sunday === DayOfWeek.Sun);
//any -  type that is not recommended for using
let a: any = 10;
//a.startWith();
a = "abc"
a++;
//unknown - type like "any" but recommended
let b: unknown = 10;
typeof b === "number" && b++
b = "abc"
typeof b === "string" && b.startsWith("ab");
//tuple
const tupl1: [number, string] = [1, "2"];
tupl1[0]++;
tupl1.push("kuku"); //TS issue
//index signature
function getOccurrencesObject(array: string[]): {[key: string]:number} {
    return array.reduce((acc: {[key: string]:number} , cur) => ({...acc, [cur]: acc[cur] ? ++acc[cur]: 1}), {})
}
const occurrences = getOccurrencesObject(["abc", "abc", "lmn", "abc", "a", "lmn"]);
console.log(occurrences)
type Person = {
    id: number;
    name: string;
    age: number;
    gender?: string;
    address?: {
        city: string;
        street: string;
    }
}
const person: Person = {id:123, name: "Vasya", age:25};
let field: keyof Person;
field = "address"
person[field] //permitted square braces notation


