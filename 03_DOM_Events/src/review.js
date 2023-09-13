//Review Arrays
const arr = [10,20,15,0, 1]
//push and pop from an array
arr.push(25)
console.log(arr)
arr.pop()
console.log(arr)

//destruture an array with spread operator
const newArray = [...arr]
console.log("This is the new Array " + newArray)
//filter an array
const filteredArray = arr.filter((num)=> {
    //console.log(num)
    //return num > 10
    if(num < 10){
        console.log("Invalid Number is ", num)
        return false
    }
    return true
})
console.log(filteredArray)

//Review objects

const obj = {
    key1: {
        firstname: "Stephen",
        lastname: "Lambert",
        func: (data) => console.log(data)
    },
    key2: (data)=>console.log(data)
}

const student = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    concentration: "Software Engineering",
    graduationDate: 2023,
    courses: ["Javascript", "React", "Python"]
  };

//use dot notation and brackets to get/change values from the object
student.firstName = "Jane"
console.log(student.firstName)
console.log(student["firstName"])
console.log(Object.values(student))
console.log(Object.keys(student))
//iterate through an object using forLoops and add to the courses array

const studentUpdate = []

for(key in student){
    console.log(key)
    console.log(`${key} | ${student[key]}`)
    studentUpdate.push(key)
}
console.log(student)

//select an element from the dom using querySelector
const h1 = document.querySelector("#header header div")
console.log(h1)
//change the text content
//create a new div element
//demonstrate appending
const div = document.createElement("div")
div.textContent = "NEW DIV"
div.id = "new_id"
h1.append(div)
console.log(h1)
