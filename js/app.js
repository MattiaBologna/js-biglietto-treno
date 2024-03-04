// Travelers and travel data 

const age = parseFloat(prompt("What's the traveler's age?")); //number
const kilometers = parseFloat(prompt("How many kilometers will you travel?")); //number

console.log("Traveler's age: " + age + ".  Kilometers: " + kilometers)

// Calculate full price 

const fullPrice = (kilometers * 0.21); //number
console.log("Full price is: " + fullPrice.toFixed(2) + "€");

// Apply the discount 
if (age < 18) {
    let discountedPrice = fullPrice - (fullPrice * 0.2); //number
    console.log("The discounted price is: " + discountedPrice.toFixed(2) + "€");
} else if (age >= 65) {
    let discountedPrice = fullPrice - (fullPrice * 0.4); //number
    console.log("The discounted price is: " + discountedPrice.toFixed(2) + "€");
}