// ### Task-1: 
// Count how many times a string has the letter `a`

let job = 'A web developer';
let count = 0;
// for(let check of job){
//     if(check === 'a'){
//         count++;
//     }
// }
// console.log(count);

// ### Task-2: 
// Count how many times a string has the letter `a` or `A`

// ---code----

// for(let check of job){
//     if((check === 'a')||(check ==='A'))
//         count++;
// }
// console.log(count);



// ### Task-3: 

// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 

// ---code -----

let vowels = ['a', 'e', 'i', 'o', 'u' ];
let hasAllVowels=true;
// job = 'education';
job = job.toLocaleLowerCase();

for(let check of vowels){
    if(!job.includes(check)){
        hasAllVowels=false;
        break;

    }

}

// console.log(hasAllVowels);

// ### Task-4: 
// If a given string has either x, replace x by y. 
// if the given string has X, replace it by Y.

//     Hint: You should be able to check whether x or X exists. 
// After that, search online how to replace a character in a string.
let text = 'Export er jinish, yaay! Xport'


let updatedText=text.replace('x','y').replace('X', 'Y');

// console.log(updatedText);

// ---
// ### Task-5:
// Capitalize Every first Letter of each word in a String

let textString = 'hello there';
let split = textString.split(' ');
for(let i=0 ; i<split.length; i++){
    split[i] = split[i][0].toUpperCase()+split[i].substring(1);
}
split = split.join(' ');
console.log(split);

// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }

// words.join(" ");
// console.log(words);
