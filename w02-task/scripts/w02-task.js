/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Felipe Lima"
const year = new Date()
let currentYear = year.getFullYear()
let profilePicture = "https://avatars.githubusercontent.com/u/63979005?v=4"



/* Step 3 - Element Variables */

const nameElement = document.getElementById("name")
const foodElement = document.getElementById("food")
const yearElement = document.querySelector("#year")
const imageElement = document.querySelector('img')

/* Step 4 - Adding Content */
imageElement.setAttribute("src", `${profilePicture}`)
nameElement.innerHTML = (`<strong> ${fullName}<strong>`)
yearElement.innerHTML = (`${currentYear}`)
imageElement.setAttribute("alt", `profile image of ${fullName}`)


/* Step 5 - Array */
let foods = ["Pizza" , "Hamburguer", "Fried Chicken", "French Fries"]

foodElement.innerHTML += `<br>${foods}`
foods.shift()
foodElement.innerHTML += `<br>${foods}`
foods.pop()







