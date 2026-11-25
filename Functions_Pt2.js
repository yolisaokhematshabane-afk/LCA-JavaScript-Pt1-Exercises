let x = 10
let y = 5
let z =18

function multiply(x, y, z){
    return x * y * z

}
console.log(multiply(x, y, z))

let convertToSEconds = function(minutes){
            return minutes * 60
}

function  fahrenheitToCelsius(Temperature){
    return (fahrenheit - 32) * 5 / 9 

}


function reverseString(string) {
    return string.split(""). reverse(""). join("");
}

let numberOfVowels = function(word) {
    const matches = word.match (/[a, e i,o,u]/gi)
    return matches ? matches.length : 0;
}

function isPrime(number){
    if (number<=1){
        return false
    }
    for (let i = 2; i < number; i++){
        if (number % i ===0 ){
            return false
        }
    }
    return true
}
console.log(isPrime(10))
console.log(isPrime(12))
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(7))
console.log(isPrime(5))