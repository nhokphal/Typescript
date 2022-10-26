type idDisplay = {
    id: String,
    display: String,
}


const list: idDisplay[] = [
    {
        id: 'foo',
        display: 'foo select'
    },
    {
        id: 'bar',
        display: 'bar select'
    }
]

const li = list.map(item => item.display )
console.log(li)