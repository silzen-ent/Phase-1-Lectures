//Review variables
const globalVar = "Hello"
let letVar = "Let"
//Functions & Scope
function test1(var1, var2){
    const globalVar = "Goodbye"
    console.log(globalVar)
    console.log(var1)
    console.log(var2)
}
test1(10, 10)


function test2(){
    const globalVar = "Goodbye"
    console.log(globalVar)
    if(true){
        const globalVar = "In If Statement"
        console.log(globalVar)
    }
    console.log("In Test 2")
}
test2()

variableLet = letVar + " Variable"
console.log(variableLet)
console.log(globalVar)

//Anoymous Functions 
function callFunction(innerFunc){
    console.log(innerFunc)
    innerFunc()
}
callFunction(function(){console.log("calling inner function")})

//Arrow Functions
callFunction(()=>{
    console.log("Calling with an arrow function")
})

const arrowFunc = () => {
    console.log("Defined an arrow function")
}
arrowFunc()

//Array iterations
//create a list of fruits
const fruits = ["Apple", "Orange", "Banana", "Pineapple"]

//test pushing to a list
fruits.push("Mango")
fruits.push("Strawberry")
fruits.push("Melon")

//create a variable that pops an element from the list
const popFruit = fruits.pop()
console.log(popFruit)
console.log(fruits)
//loop through the list with a regular for loop
for(let i = 0; i< fruits.length; i++){
    console.log(fruits[i])
}
function loopFruit(fruit){
    console.log(fruit)
    return (fruit + " To Eat")
}
// loop using a .forEach
fruits.forEach(loopFruit)
//loop using .map

const mapFruit = fruits.map(loopFruit)
console.log(mapFruit)