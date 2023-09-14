//Review Arrays
const arr = [10, 20, 15, 0 ,1]
arr.push(25, 30)
console.log(arr)
arr.pop()
console.log(arr)
//push and pop from an array
//destruture an array with spread operator
const newArray = [...arr]
console.log(newArray)
//filter an array
const filteredArray = arr.filter((number) => {
    // console.log(number)
    // return number > 10
    if(number > 10){
        console.log("Invalid number", number)
        return true
    }
    // else{
    //     return true
    // }
    return false

})
console.log(filteredArray)

//Review objects
const obj = {
    key1: {
        firstname: 'Stephen',
        lastname: "Lambert",
        func: (data) => console.log(data)
    },
    key2: (data) => console.log(data)
}

const student = {
    firstname: "John",
    lastname: "Doe",
    "student-age": 25,
    concentration: "Software Engineering",
    graduationData: 2023,
    courses: ["Javascript", "React", "Python", "Flask"]
}
console.log(student.firstname)
student.firstname = "Jane"
console.log(student.firstname)
console.log(student["age"])
console.log(Object.values(student))
console.log(Object.keys(student))
const studentUpdate = []
for(s in student){
    console.log(student[s])
    console.log(s)
    studentUpdate.push(student[s])
}
console.log(studentUpdate)

//select an element from the dom using querySelector
const h1 = document.querySelector("#header header div")
console.log(h1)
//change the text content
//create a new div element
//demonstrate appending

const div = document.createElement("div")
div.textContent = "New Div"
div.id = "new_id"
h1.appendChild(div)
console.log(h1)



