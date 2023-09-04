"use strict";
function generateRandomNumberFromInput(inputElement) {
    const inputValue = inputElement === null || inputElement === void 0 ? void 0 : inputElement.value;
    if (!isNaN(parseInt(inputValue))) {
        const min = Math.pow(10, 4);
        const max = Math.pow(10, 5) - 1;
        const randomNumber = Math.floor(Math.abs(Math.sin(parseInt(inputValue))) * (max - min + 1)) + min;
        return randomNumber.toString();
    }
    else {
        alert("Please enter a valid number.");
        return '';
    }
}
function findPrimeNumbers(number) {
    const primes = [];
    for (let i = 2; i <= number; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}
const inputElement = document.querySelector("#input");
const btnOne = document.querySelector("#generateRandomNumber");
const btnTwo = document.querySelector("#primeNumbers");
const btnThree = document.querySelector("#clearBTN");
let primeNumbers = [];
btnOne === null || btnOne === void 0 ? void 0 : btnOne.addEventListener("click", () => {
    alert(generateRandomNumberFromInput(inputElement));
});
btnTwo === null || btnTwo === void 0 ? void 0 : btnTwo.addEventListener("click", () => {
    const temp = parseInt(generateRandomNumberFromInput(inputElement));
    primeNumbers = findPrimeNumbers(temp);
    console.log(primeNumbers);
});
btnThree === null || btnThree === void 0 ? void 0 : btnThree.addEventListener("click", () => {
    inputElement.value = '';
    primeNumbers = [];
    console.log(primeNumbers);
});
