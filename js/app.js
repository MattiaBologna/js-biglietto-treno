// Travelers and travel data 

const age = parseFloat(prompt("What's the traveler's age?")); //number
const kilometers = parseFloat(prompt("How many kilometers will you travel?")); //number

console.log("Traveler's age: " + age + ".  Kilometers: " + kilometers)

// Calculate full price 

const fullPrice = (kilometers * 0.21); //number
const roundedFullPrice = Math.round((fullPrice + Number.EPSILON)*100) / 100; //number
console.log("Full price is: " + roundedFullPrice + "€");
let trainTicketPrice = document.getElementById('train-ticket-price')
trainTicketPrice.innerHTML = roundedFullPrice + "€"

// Apply the discount 
if (age < 18) {
    let discountedPrice = fullPrice - (fullPrice * 0.2); //number
    let roundedDiscountedPrice = Math.round((discountedPrice + Number.EPSILON)*100) / 100; //number
    console.log("The discounted price is: " + roundedDiscountedPrice + "€");
    let trainTicketPrice = document.getElementById('train-ticket-price')
    trainTicketPrice.innerHTML = roundedDiscountedPrice + "€";
} else if (age >= 65) {
    let discountedPrice = fullPrice - (fullPrice * 0.4); //number
    let roundedDiscountedPrice = Math.round((discountedPrice + Number.EPSILON)*100) / 100; //number
    console.log("The discounted price is: " + roundedDiscountedPrice + "€");
    let trainTicketPrice = document.getElementById('train-ticket-price')
    trainTicketPrice.innerHTML = roundedDiscountedPrice + "€";
}


// Print the price 
