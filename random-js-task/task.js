//     let sum = 0;

// function oddNumberAvg(odd){
//     let count = 0;
//     for(let i = 0; i<odd.length; i++){
//         if(odd[i]%2!==0){
//         sum+=odd[i];
//          count++
//         }
//     }
//     return sum/count
// }

// function oddNumberAvg(oddNumbers) {
//     let oddArray = [];
//     for (const number of oddNumbers) {
//         if (number % 2 !== 0) {
//             oddArray.push(number)
//         }
//     }
//     let sum = 0;
//     for (const number of oddArray) {
//         sum += number;

//     }
//     let avg = sum / oddArray.length;
//     return avg;
// }


// const callingOddNumbers = oddNumberAvg([1, 3, 5, 6, 7]);
// // console.log(callingOddNumbers);


// const oddNumbers = oddNumberAvg([1, 2, 3, 4, 5, 6, 7]);
// // console.log("avg of the odd numbers:",oddNumbers);


// function inchToFeet(inch) {
//     let feet = parseInt(inch / 12);
//     let inches = inch % 12;
//     let total = (feet + ' feet ' + inches + ' inch');
//     return total;
// }

// const inchFeet = inchToFeet(65);
// // console.log(inchFeet);

// function leapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0)) {
//         return year + " is a Leap Year";
//     }
//     return year + " Not a leap year";
// }

// const LeapYear = leapYear(2028);
// // console.log(LeapYear);


// function removeDuplicate(numbers) {
//     let array = [];
//     for (const number of numbers) {
//         if (array.includes(number) === false) {
//             array.push(number);
//         }
//     }
//     return array;
// }
// const duplicateNumbers = removeDuplicate([1, 11, 11, 12, 4, 77, 78, 77]);
// // console.log(duplicateNumbers);

/* Azmain, Arnob, Kayes, Tawhid, Raihan, Nahid, Naeem, Yusuf are
 invited in a party. Azmain put his name twice in the party so 
 that he can get 2 biriyani packets which was Nahid's idea to 
 get more biriyani packets from a party, so Nahid also put his 
 name twice. Your task is to remove those duplicate names 
 so that people like Azmain and Nahid cannot get 2 biriyani packets. */

let guest = ['Azmain', 'Arnob', 'Kayes', 'Tawhid', 'Raihan',
    'Azmain', 'Nahid', 'Naeem', 'Yusuf', 'Nahid'];

function removeDuplicate(names) {
    let check = [];
    for (const guestName of names) {
        if (check.includes(guestName) === false) {
            check.push(guestName);
        }
    }
    return check;
}
console.log('Guests are :', guest);

let removeDuplicateName = removeDuplicate(guest);
console.log('Guests after removing duplicates are: ', removeDuplicateName);


// date
const dateCheck = new Date().toLocaleDateString('en-GB')
console.log(dateCheck);

// date and time
const toaday = new Date()
console.log(toaday.toLocaleString('en-GB'));

// get year
let hours = new Date()
// console.log(hours.getFullYear());

// get day
let day = new Date()
// console.log(day.getUTCFullYear());
// console.log(day.getHours());

// console.log( day.getDay());
// day.getDate()
// console.log(day.getDate());




/* Jambo doesn't know what date and time it is, his device has issues that it doesn't show
 date and time properly, help Jambo to know today's date and time.
*/
// let date = new Date();
// let todaysDate = date.toLocaleDateString();
// console.log(todaysDate);


// let dateAndTime = new Date()
// dateAndTime.toLocaleString()
// console.log(dateAndTime);
const today = new Date();

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

// উদাহরণ: Tuesday, 10 February, 2026
// console.log(today.toLocaleDateString('en-GB', options));