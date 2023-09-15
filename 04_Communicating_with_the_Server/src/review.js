// Array manipulation

const cars = [
    {
        color: "Blue",
        make: "Polestar",
        model: "3",
        cap: 5
    },
    {
        color: "Red",
        make: "Chevy",
        model: "Camaro",
        cap: 4
    },
    {
        color: "Black",
        make: "Dodge",
        model: "Charger",
        cap: 5
    }
]

const filterArray = cars.filter((obj)=>{
    if(obj.cap != 5){
        return false
    }
    return true
})
console.log(filterArray)

//review selectors and eventlisteners

// const header = document.querySelector("#header header div h1")
// console.log(header)
// header.textContent = "Press"
// header.addEventListener("mouseover",()=>console.log("Hello"))
// const form = document.querySelector("#book-form")
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     console.log(document.querySelector("#form-title").value)
//     console.log("IN submit")
//     console.log(e.target.title.value)
// })

//array methods

const numbers = [10, 20, 30, 40, 50, 60]
console.log(numbers.slice(0, 4))
console.log(numbers)
console.log(numbers.splice(0,4))
console.log(numbers)
console.log(numbers.includes(50))
console.log(numbers.find((num)=> num > 50))
