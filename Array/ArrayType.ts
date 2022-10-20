
// declare array with type
const arr: number[] = [];

arr.push(2);

for(var i = 0; i < arr.length; i++){
    // infinite loop
    // arr.push(3);
    console.log(arr)
}
// this line is not work
//arr.push("dfd");

console.log(arr)
const arrString: string [] = ['hi', 'jing', 'tamada'];
arrString.map((e) => console.log(e.toUpperCase()))
//output 
//HI
// JING
// TAMADA


// add string array
arrString.slice()
console.log("after slice",arrString)