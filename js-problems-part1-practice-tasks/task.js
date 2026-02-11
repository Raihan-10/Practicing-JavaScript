// # js-problems-part1-practice-tasks

// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFarenheit(celsius){
    return ((9*celsius)/5)+32;
}

console.log(celsiusToFarenheit(100));



// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

function number(array,find){
    let count = 0;
    for(const number of array){
        if(number==find)
            count++;
    }
    return count;

}

const givenArray = number([5,6,11,12,98, 5],5);
console.log(givenArray);

// sample-input: 
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// <br/>

// sample-input: 

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

// ### Task-3: 
// Write a function to count the number of vowels in a string.

function countVowels(vowels){
    let count = 0;
    for(const number of vowels){
        
        if(number==='a'|| number==='e'|| number==='i' ||number==='o'|| number==='u'){
            count++;
        }
    }
    return count;
}
// alternative
function countVowels(vowels){
    let count = 0;
    let vowelsAre = 'aeiou';
    for(let i = 0; i<vowels.length; i++){
        if(vowelsAre.includes(vowels[i])){
            count++;
        }
    }
    return count;
}
const checkVowels = countVowels('a'.toLowerCase());
console.log(checkVowels);


// ### Task-4: 
// Write a function to find the longest word in a given string.

// sample-input: 
// I am learning Programming to become a programmer

// sample-output: Programming
function longest(str){
    let longWord = '';
    for(const word of str.split(" ")){
        if(word.length>longWord.length){
            longWord = word;
        }
    }
    return longWord;
}
console.log(longest('biroktikor r-vallagena-vai'));

// ### Task-5: 
// Generate a random number between 10 to 20.


// o.1 to 0.9 normally generates
// if 10 multiplies then it will generate numbers between 1 to 10 with floating point. If use parseInt then it will generate numbers from 1 to 10 wihtout floating point. and if add 10 then it will generate 10 to 20
// const randomNumber = Math.random()*10;


const randomNumber = parseInt(Math.random()*10)+10;

console.log(randomNumber);
