//Review variables
//global
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
    //function scope & Block Scope
    const globalVar = "Goodbye"
    console.log(globalVar)

    if(true){
        //Block Scope
        const globalVar = "In the if statement"
        console.log(globalVar)
    }
    console.log("In test 2")
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
callFunction(function(){
    console.log("Calling the inner function")
})

callFunction(()=> {
    console.log("Calling the inner arrow function")
})

callFunction(test2)
//Arrow Functions


//Array iterationss


//create a list of fruits
const fruits = ["Apple", "Orange", "Banana", "Pineapple"]

fruits.push("Mango")
fruits.push('Strawberry')
fruits.push("Melon")

console.log(fruits)

//test pushing to a list


//create a variable that pops an element from the list
const popFruit = fruits.pop()
console.log(popFruit)
console.log(fruits)

//loop through the list with a regular for loop
for(i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

function loopFruit(fruit){
    // fruit.forEach((f)=>{
    //     console.log(f + " To Eat")
    // })
    console.log(fruit)
    return (fruit + " To Eat")
}

const mapFruit = fruits.map(loopFruit)
console.log(mapFruit)
//loopFruit(fruits)

// fruits.forEach((fruit)=> {
//     console.log(fruit)
// })
// console.log(fruits)

// loop using a .forEach

//loop using .map




