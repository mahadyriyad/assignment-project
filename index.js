/*

1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

*/

function calculateDifference(num1, num2) {
    return num1 - num2;
}


let result = calculateDifference(12, 2);
console.log(result); 


 /*

 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
 
 */

 function isOdd(num) {
    return num % 2 !== 0;
}


let result1 = isOdd(9);
let result2 = isOdd(2);

console.log(result1);
console.log(result2); 

/*

3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

*/
function findMin(arr) {
    return Math.min(...arr);
}


let numbers = [7, 8, 3, 1, 5];
let minNumber = findMin(numbers);

console.log(minNumber); 


/*

5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

*/

function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}


let numbers = [ 9, 1, 6, 5, 3 ];
let sortedArray = sortArrayDescending(numbers);

console.log(sortedArray);

/*

6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

*/

function lowercaseFirstLetter(str) {
    if (str.length === 0) return str; 
    return str.charAt(0).toLowerCase() + str.slice(1);
}


let result = lowercaseFirstLetter("Mahady Riyad");
console.log(result);

/*

7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

*/

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => vowels.includes(char)).length;
}

let result = countVowels("Hello World");
console.log(result);

/*
8) Write a function named findAverage that takes an array of numbers and returns the average of all elements. 

*/
function findAverage(arr) {
    if (arr.length === 0) return 0; 
    const sum = arr.reduce((acc, num) => acc + num, 0); 
    return sum / arr.length;
}

let numbers = [10, 20, 30, 40, 50];
let average = findAverage(numbers);

console.log(average); 
