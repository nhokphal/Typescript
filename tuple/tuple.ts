type Ttuple = [] | [number] | [number, number] | [number, number?, number?]

const DisTuple: Ttuple = [1];
const DisTuple2: Ttuple = [1, 2];
const DisTuple3: Ttuple = [1, 2, 3];


// wont run less or than 4 value


console.log(DisTuple)
console.log(DisTuple2)
console.log(DisTuple3)

function getTtuple(...ttuple: Ttuple){
    if(ttuple.length == 3)
    {
        console.log(ttuple, "ttuple, you love ttuple? ")
    }
    else{
        console.log(ttuple)
    }
}
