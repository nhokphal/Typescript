interface person {
  readonly id: number;
  email_address: string;
  //method
  greeting(): string;
}

/// inheritance object // type
const employee: person = {
  id: 12,
  email_address: "youremail@gmail.com",
  //use method
  greeting: () => {
    return `hi mr ${employee.email_address}`;
  },
};

console.log(employee.email_address);
console.log(employee.id);
console.log(employee.greeting());

//descript of animal
interface Animal {
  readonly Name: string;
  canFly: boolean;
  lifeline: number | string;
  food?: string;
  MakeSound(): string;
}

const Dog: Animal = {
  Name: "dog",
  lifeline: 30,
  canFly: false,
  MakeSound: () => {
    return `${Dog.Name} make sound woof wood, dog can live up to ${Dog.lifeline}`;
  },
};

const Bird: Animal = {
  Name: "Birdy",
  lifeline: 3,
  canFly: true,
  food: "insect",
  MakeSound: () => {
    return `${Bird.Name} make sound Chirps Chirps "\n" birdy eat ${Bird.food}`;
  },
};

// access DOG
console.log(Dog.Name);
console.log(Dog.lifeline);
console.log(Dog.canFly);
console.log(Dog.MakeSound());

// Acces Dog
console.log(Bird.MakeSound());
console.log(Bird.canFly);
console.log(Bird.food);
console.log(Bird.lifeline);
