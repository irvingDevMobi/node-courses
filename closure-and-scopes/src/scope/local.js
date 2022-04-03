const printHelloWorld = () => {
    const hello = 'Hello'
    console.log(hello)
}

printHelloWorld()
// console.log(hello) // Error because hello is only local

var scopeOverDefined = 'I am Global'

const scopeFunction = () => {
    var scopeOverDefined = 'I am local'
    const internalFunction = () => {
        return scopeOverDefined
    }
    console.log(internalFunction())
}

scopeFunction()
console.log(scopeOverDefined)
