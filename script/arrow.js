// ARROW Function

/** a.print odd number in array *****************************/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printOddNumbers = (arr) => {
  arr.filter(num => num % 2 !== 0).forEach(oddNum => console.log(oddNum));
};

printOddNumbers(numbers);

/** b.Convert all the strings to title caps in a string array  ****************************/

const stringArray = ["hello world", "goodbye cruel world", "the quick brown fox"];

const convertToTitleCase = (arr) => {
  return arr.map(str => str.replace(/\b\w/g, char => char.toUpperCase()));
};

const titleCaseArray = convertToTitleCase(stringArray);
console.log(titleCaseArray);

/** c.Sum of all numbers in an array  ******************************/

const numbersc = [1, 2, 3, 4, 5];

const sum = numbersc.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);

/** d. Return all the prime numbers in an array  ****/

const numbersd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeNumbers = numbersd.filter(num => isPrime(num));

console.log(primeNumbers); 

/** e. Return all the palindromes in an array ****************************/

const strings = ["level", "noon", "hello", "radar", "world", "civic"];

const isPalindrome = str => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

const palindromes = strings.filter(str => isPalindrome(str));

console.log(palindromes); // Output: ["level", "noon", "radar", "civic"]

