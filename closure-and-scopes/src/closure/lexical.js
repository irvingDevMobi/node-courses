const buildCount = (i) => {
    let count = i
    const displayCount = () => {
        console.log(count++)
    }
    return displayCount
}

let counter = buildCount(0)
counter()
counter()
let otherCounter = buildCount(10)
otherCounter()
otherCounter()
