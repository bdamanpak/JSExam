function generateRandomNumberFromInput(inputElement: HTMLInputElement) {
    const inputValue = inputElement?.value;
    if (!isNaN(parseInt(inputValue))) {
      const min = Math.pow(10, 4);
      const max = Math.pow(10, 5) - 1;
      const randomNumber = Math.floor(Math.abs(Math.sin(parseInt(inputValue))) * (max - min + 1)) + min;
      return randomNumber.toString();
    } else {
      alert("Please enter a valid number.");
      return '';
    }
  }

function findPrimeNumbers(number: number) {
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


const inputElement = document.querySelector<HTMLInputElement>("#input");
const btnOne = document.querySelector<HTMLButtonElement>("#generateRandomNumber");
const btnTwo = document.querySelector<HTMLButtonElement>("#primeNumbers");
const btnThree = document.querySelector<HTMLButtonElement>("#clearBTN");
let primeNumbers: number[] = [];

btnOne?.addEventListener("click", () => {
    alert(generateRandomNumberFromInput(inputElement!));
});

btnTwo?.addEventListener("click", () => {
    const temp = parseInt(generateRandomNumberFromInput(inputElement!));
    primeNumbers = findPrimeNumbers(temp);
    console.log(primeNumbers);
})

btnThree?.addEventListener("click", () => {
    inputElement!.value = '';
    primeNumbers = [];
    console.log(primeNumbers);
  });











