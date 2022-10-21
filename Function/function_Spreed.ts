const functionSpreed = (...num: number[]) => {
  // delcare local variable
  var i;
  var sum: number = 0;

  for (i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  console.log("sum of the numbers", sum);
};
functionSpreed(1, 2, 3);
functionSpreed(10, 10, 10, 10, 10);

var arr2: number[] | string[];
console.log("fly high")

