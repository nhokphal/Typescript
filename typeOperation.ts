type Operationa = "divid" | "minus" | "mulitplay";

const Cal = (a: number, b: number, op: Operationa) => {
  switch (op) {
    case "divid": {
      return a / b;
    }
    case "minus": {
      return a - b;
   
    }
    case "mulitplay": {
      return a * b;
     
    }
    default:
  }
};

// no received any invalid value outside, from Operators
console.log(Cal(1, 3, "minus"));
