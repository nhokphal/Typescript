interface Person {
    name: String;
    age: Number;
}

class extentClass {
    name: string;
    age: number;
    
}


class DetailPerson extends extentClass {
    constructor (
        name: string,
        age: number,
    ){
        this.name = name;
        this.age = age;
    }
    person: Person[];
    
}