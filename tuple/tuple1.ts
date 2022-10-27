
type Scores = [number, number?, number?]

function getTtuple(...scores: Scores){
    if(scores.length == 3)
    {
        console.log(scores, "ttuple, you love ttuple? ")
    }
    else{
        console.log(scores)
    }
}

getTtuple(3, 3, 12)
getTtuple(3)
getTtuple(3, 2)