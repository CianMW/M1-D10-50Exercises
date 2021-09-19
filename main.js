/*
JS EXERCISES

        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

*/

let exercise = (string) => {
    console.log(`\n\n<-----------Exercise ${string}------------->`)
}

exercise(21)
let x= "john"
let y = "Doe"
console.log(`${x} <> ${y}`)

exercise(22)

let profile = {
    name: "cian",
    surname: "Markwick",
    email: "Markwick.c@gmail.com",
}

console.log(profile)




exercise(23)


delete profile.email

console.log(profile)
exercise(24)


let testArray = ["where","do","you","want","to","eat","tonight","?","pizza","or","chinese","?",]

exercise(25)

let printTestArray = () => {
    for (let i = 0; i < testArray.length; i++) {
        const element = testArray[i];
        console.log(element)
        
    }
}
printTestArray()
exercise(26)

let randomNumberArray = []

let fillRandomNumberArray = () => {


    for (let i = 0; i < 100; i++) {
        let newNumber = Math.floor(Math.random()*100)

    randomNumberArray.push(newNumber)        
    }

}
fillRandomNumberArray()
console.log(randomNumberArray)


exercise(27)


let min = 100
let max = 0
let checkRandomNumberArray = () => {

    randomNumberArray.forEach(number => {
        if (number > max) {
            max = number
        }
        if (number < min) {
            min = number
        }
        
    });
}
checkRandomNumberArray()
console.log(`The minimum number is : ${min}.   The maximum number is : ${max}`)


exercise(28)

let multiArray = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],

]

let populateMultiArray = () => {
    multiArray.forEach(array => {

        for (let i = 0; i < 10; i++) {
            array.push(Math.floor(Math.random()*100))
            
        }
        
    });
}
populateMultiArray()
console.log(multiArray)


exercise(29)
exercise(30)
exercise(31)
exercise(32)
exercise(33)
exercise(34)
exercise(35)
exercise(36)
exercise(37)
exercise(38)
exercise(39)
exercise(40)
exercise(41)
exercise(42)
exercise(43)
exercise(44)
