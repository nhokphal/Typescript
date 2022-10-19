type CatColor = {
  color: string;
};

type CatAge = {
  age: number;
};

//concat cat type
type CatDetail = CatAge & CatColor;

const allAboutCat: CatDetail = {
  color: "orange",
  age: 12,
};

console.log(allAboutCat.age);
// output 12
// inheritance from one to another



//Example 2 
const famileTree = { 
    
}