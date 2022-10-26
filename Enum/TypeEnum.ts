enum enumName {
  Name,
  Age = 13,
}

const status1 = enumName.Age;
console.log(status1);

enum Player1 {
  Name = "Jack",
  Age = 13,
  sex = "male",
}

const currStatus = Player1.Name;
const currAge = Player1.Age;
const currName = Player1.sex;

console.log(currAge, currName, currStatus);
