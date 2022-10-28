function ttDate(tName: string, tDate: Date) {
    return `hello ${tName} ${tDate.toString()} `
}
// pass new keyword 
console.log(ttDate('kafka',new Date()))



//book i read convert to uppercase
const names = ['norwegian', 'kafka on the shore', '1886']
names.forEach(function(e){
   console.log(e.toUpperCase())
})



function calc(pt: {x: number, y: number}){
    return pt.x * pt.y;
}
console.log("object type is: ",calc({x: 3, y: 3}))