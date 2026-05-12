// Task 1: check whether a number is even or odd
function number(num) {
  if (num % 2 == 0) {
    console.log(num, " is even");
  } else {
    console.log(num, " is odd");
  }
}
number(10);

//Task 2: largest number between two numbers
function largest(a, b) {
  if (a > b) {
    console.log(a, " is the largest");
  } else {
    console.log(b, " is the largest");
  }
}
largest(10, 20, 39);

//Task 3: largest number among numbers
const largest = Math.max(10, 49, 48, 100);
console.log(largest);

// Task 4: reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
let string = "Iman";
console.log(reverseString(string));

// Task5: Count vowels in a string
let vowels = ["a", "e", "i", "o", "u"];
let count = 0;
function checkVowels(str) {
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let str = "My iman is strong";
console.log(checkVowels(str));

// Task 6: sum of the array
let array = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

// Task7: positive numbers
let numbers = [1, 2, -5, -10, 34, 655, -1231];

let positive = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positive.push(numbers[i]);
  }
}
console.log(positive);

// Task 8: use arrow function method and find postive numbers
let numbers = [1, 2, -5, -10, 34, 655, -1231];
let positiveArray = [];

const positiveNumbers = (num) => {
  for (let num of numbers) {
    if (num > 0) {
      positiveArray.push(num);
    }
  }
  return positiveArray;
};
console.log(positiveNumbers(numbers));

// Task 9: print hello there using arrow function
const printing = () => "hello there";
console.log(printing());

// Task 10: print odd numbers from 1 to 100
for (let i = 0; i < 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// Task 11: print odd numbers from 1 to 100
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

// Task 12: multiplication of 5
for (let i = 1; i <= 10; i++) {
  console.log("5*", i, "=", 5 * i);
}
