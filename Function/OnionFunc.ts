function tonionType (ttstyle: number | string) {
    return `ttstyle is a ${ttstyle} string or number`
}

console.log(tonionType("hi ma"))
console.log(tonionType(123))



//check type if string or number 

function tchecking (myT: number | string) {
    // use typeof to check primitive type
    if(typeof myT === "string")
    {
        console.log(`hi ${myT}, good morning`)
        console.log(`yo ${myT.toUpperCase()}`)
    }
    else{
        console.log(myT)
    }
}

tchecking(23343)
tchecking("kafka")