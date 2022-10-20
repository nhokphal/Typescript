// declear type
interface Person {
  name: string;
  address: string;
}

//pass protype or inheritance
const person: Person = {
  name: "jack",
  address: "st",
};
console.log("test first", person.name);

/// Optional

interface Point {
  firstPoint: number;
  secPoint: number;
  // option is not fully require to declare type in the new object
  thirdPoint?: number | string;
}

const myPoint: Point = {
  firstPoint: 23,
  secPoint: 23,
  // typically this code wont run if we havent set "?" in the option
//   thirdPoint: "seddsd",
};
console.log("test optional", myPoint.firstPoint);
