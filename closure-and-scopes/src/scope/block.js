const printFruits = () => {
    if (true) {
        var fruit1 = 'apple'
        let fruit2 = 'banana'
        const fruit3 = 'kiwi'
    }
    console.log(fruit1)  // var exist outside the block where was defined
    // console.log(fruit2)  // let only exist in the block where was defined
    // console.log(fruit3) // const only exist in the block where was defined
}

printFruits()

let x = 1
{
    let x = 2
    console.log(x)
}
console.log(x) // let is 1

var y = 1
{
    var y = 2
    console.log(y)
}
console.log(y) // var is 2

const varFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
}
varFunction()

const letFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
}
letFunction()
