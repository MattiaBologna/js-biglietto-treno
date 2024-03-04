// Travelers and travel data 

const age = parseInt(prompt("What's the traveler's age?")); //number
const kilometers = parseInt(prompt("How many kilometers will you travel?")); //number

console.log("Traveler's age: " + age + ".  Kilometers: " + kilometers)

// Calculate full price 

let fullPrice = (kilometers * 0.21); //number
let trainTicketPrice = document.getElementById('train-ticket-price')
trainTicketPrice.innerHTML = fullPrice.toFixed(2) + "€"

// Apply the discount 
if (age < 18) {
    fullPrice = fullPrice - (fullPrice * 0.2); //number
    let trainTicketPrice = document.getElementById('train-ticket-price')
    trainTicketPrice.innerHTML = fullPrice.toFixed(2) + "€";
} else if (age >= 65) {
    fullPrice = fullPrice - (fullPrice * 0.4); //number
    let trainTicketPrice = document.getElementById('train-ticket-price')
    trainTicketPrice.innerHTML = fullPrice.toFixed(2) + "€";
}


// Print the price 
console.log("Full price is: " + fullPrice.toFixed(2) + "€");
if (age < 18 || age >= 65) {
    console.log("The discounted price is: " + fullPrice.toFixed(2) + "€");
}
