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
type FamilyTree = {
  father: string;
  mother: String;
  sister: string;
  brother: string;
};

type MotherTree = {
  uncle?: string;
  aunt?: string;
  uncle2?: number;
};

type FatherTree = {
  uncle?: string;
  aunt?: string;
  aunt2?: number;
};

//concat
type TotalFamilyTree = FatherTree & MotherTree;

// after inheritanced
const personDetail: TotalFamilyTree = {
  aunt: "aum ayy",
};
