const NameFunc = (person: { first: string; last: string }): void => {
  console.log(
    `my first name is: ${person.first} and last Name is :${person.last}`
  );
};

NameFunc({ first: "nhok", last: "phal" });

//output my first name is: nhok and last Name is :phal
