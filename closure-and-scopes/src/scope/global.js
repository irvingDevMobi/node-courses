var hello = 'Hello'
let world = 'World'
const helloWorld = 'Hello World'

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)    
}

anotherFunction()

const printHelloWorld = () => {
    badPracticeGlobalVar = 'Bad Practice to do this'
}

printHelloWorld()
console.log(badPracticeGlobalVar)


