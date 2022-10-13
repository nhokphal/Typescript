const Greeting = (name: string, age: number): string => {
  return `greeting ${name}, i am ${age}`;
};

const names = "jack";
const ages = 53;

console.log(typeof names);

console.log(Greeting(names, ages));

const handleLogic = (a: number, b: number): any => {
  return a > b ? a : b;
};

console.log("b is greeter than a", handleLogic(1, 3));
