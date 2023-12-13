//Review Arrays
const arr = [10, 20, 15, 0, 1]
//push and pop from an array
arr.push(25, 30)
console.log(arr)
arr.pop()
console.log(arr)

//destruture an array with spread operator
const newArray1 = [...arr]
console.log(newArray1)

//filter an array
const filterArray = newArray1.filter((number) => {
    console.log(number)
    if(number > 10){
        console.log(number)
        return true
    }
    // else{
    //      return false
    // }
    return false
    
})
console.log(filterArray)

const students = {
    firstname: "John",
    lastname: "Doe",
    "age": 25,
    concentration: "Software Engineering",
    phases: ["Javascript", "React", "Python", "Flask"],
    func: (data) => console.log(data)

}
console.log(students.firstname)
console.log(students["age"])
students.firstname = "Stephen"
console.log(students)
console.log(Object.values(students))
console.log(Object.keys(students))

const studentUpdate = []
for(s in students){
    console.log(students[s])
    console.log(s)
    studentUpdate.push(students[s])
}
console.log(studentUpdate)
//select an element from the dom using querySelector


//change the text content


//create a new div element


//demonstrate appending



