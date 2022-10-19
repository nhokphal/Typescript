const funSample = (num: number): number => {
  return num * num;
};
console.log(funSample(2));

//return string
const funSample1 = (name: string): number | string => {
  return name + " hi";
};
console.log(funSample1("passenger"));

//return number
const add = (num: number, num1: number): number => {
  return num + num1;
};
console.log(add(2, 3));

//return string
const returnString = (name: string, name1: string): string => {
  return `hi, ${name1} and ${name}`;
};
console.log(returnString("phal", "sam"));
