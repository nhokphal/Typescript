type user = {
  firstName: String;
  lastName: String;
};

function Greet(user: any) {
  return `${user.firstName} ${user.lastName}`;
}
const Type = Greet({ firstName: "nhok", lastName: "phal" });
console.log(Type);
