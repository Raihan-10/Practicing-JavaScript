/**
 * Problem 1 — Even Numbers

Given an array:

[1, 2, 3, 4, 5, 6]

Create a new array containing only even numbers.

Expected:

[2, 4, 6]
 */

let array = [1, 2, 3, 4, 5, 6];

let newArray= [];
for(let n of array){
    if(n%2==0){
        newArray.push(n)
    }
}
console.log(newArray)


/**
 * Problem 2 — Sum of Array

Find the total sum.

[10, 20, 30]

Expected:

60
 */

let array= [10, 20, 30];
let sum=0;
for(let i=-0; i<array.length; i++){
    sum+=array[i];
}
console.log(sum)

/**
 * Problem 3 — Largest Number

Find the largest number from:

[5, 2, 9, 1, 7]

Expected:

9
 */

let numbers = [5, 2, 9, 1, 7]

let largest = Math.max(...numbers)
console.log(largest)

/**
 * Problem 4 — Reverse String

Input:

hello

Output:

olleh
 */
 let string="hello";

function reverse(string){

return string.split('').reverse().join('')
}

console.log(reverse(string))
 

/**
 * // Problem 5 — Count Vowels

// Input:

// javascript

// Output:

// 3
*/
let input = "javascript";
let vowels='aeiou';
let count = 0;
for(let i of input.toLowerCase()){
    if(vowels.includes(i))
    {
          count++;
    }
}

console.log(count)
 

