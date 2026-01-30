// # array-looping-tasks

// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Input:**
// `const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

// **Output:**

// `['orange', 'yellow', 'green', 'blue', 'red']`

// ---code ---
let colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// using reverse method
colors =colors.reverse();

// using for of loop
let reverse=[];

for(let word of colors){
  reverse.unshift(word);
}

for(let i = colors.length-1; i>=0; i--){
    let word = colors[i];
    reverse.push(word);
}
console.log(word);

console.log(reverse);
console.log(colors);




// ### Task 2

// Write a JavaScript code to get the even numbers from an array
//  using any looping technique.

// **Input:**
// `const numbers = [12, 98, 5, 41, 23, 78, 46];`


const numbers = [12, 98, 5, 41, 23, 78, 46];
for(let i = 0; i<numbers.length; i++){
    if(numbers[i]%2==0){
        console.log(numbers[i]);
    }
}

// **Output:**

// `[12, 98, 76, 46]`

// ---


// ### Task 3

// Use a for...of loop to concatenate all the elements of an array 
// into a single string.

// **Input:**
// `var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var result = '';
for(let add of numbers){

    result+=add;
result+=add.split('').join('');    
result = numbers.join('');

}
    console.log(result);

// **Output:**

// `'TomTimTinTik'`

// ---

// ### Task 4 (Hard)

// Reverse the words of a sentence. 
// Only the position of the word will be reversed. 
// check out the output

// **Input:**
// `const statement = 'I am a hard working person'`


const statement = 'I am a hard working person';
updatedStatement = statement.split(' ').reverse().join(' ');

console.log(updatedStatement);



// **Output:**

// `'person working hard a am I'`

// ---


// ### Task 5

// Copy the given array into another array
// so that changing the copy does not affect the original.
// Change the first element of the copied array to 99.

let input = [ 1, 2, 3 ];
let copy = [];

for(let element of input){
    copy.push(element);
}
copy[0]=99;
console.log('copied array:',copy);
console.log('original array: ',input);

let input  = [ 1, 2, 3];
let copy = [...input];
spread operator ...
copy[0]=99;

console.log('original array:', input);
console.log('Copied array: ',copy);




// Input: [1, 2, 3]





// Expected Output:

// Original: [1, 2, 3]
// Copy: [99, 2, 3]

// ----

// ### Task 6
// Given an array of student objects, 
// print each student’s name and marks.

// ```
// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// ```

let students =[
    {
        name:'John',
        marks:85
    },
    {
        name:'Alice',
        marks:90
    }
];

for(let student of students){
    // console.log(student.name,'scored', student.marks);
    
}

// console.log(`${students[0].name} scored ${students[0].marks}`);
// console.log(`${students[1].name} scored ${students[1].marks}`);



// # Expected ooutput:
// ```
// John scored 85
// Alice scored 90
// ```

// ### Task 7
// Given a 2D array, update the value at second row first item to 99 
// and print the updated array.

// input:
// ```
// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// ```

let input = [
    [1, 2],
    [3, 4],
    [5, 6]
]

let copy = JSON.parse(JSON.stringify(input));
copy[1][0]=99;
console.log('original array:',input);
console.log('copied and the expected array:', copy);


// Expected Array:
// ```
// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]
// ```
