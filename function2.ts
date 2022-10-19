/// handle multi

const doSomething = (num: number, name: string, bool: boolean) => {
  // undefine if no return type
  return `hi ${name} ${num} ${bool}`;
};
console.log(doSomething(1, "phal", true));

const Cal = (name: string) => {
  return `${name}`;
};
console.log(Cal("jack"));

// const set Contitional

const MixSomething = (num: number, num1: number, bool: true) => {
  //set conditon
  if (bool == true) {
    const total = num * num1;
    return total;
  }
};
console.log(`if it true it will cal`, MixSomething(1, 3, true));

// what if we use Function ?

//do is not a valid
function funcSample(Todo: number) {
  return Todo * Todo;
  // if(notDo = true)
  //  {
  //     return Todo * Todo;
  //  }
}
console.log(funcSample(23));

//default function

const defaultFunc = (name: string = "stranger") => {
  console.log(name);
  return `hello ${name}`;
};

console.log(defaultFunc("phal"));
