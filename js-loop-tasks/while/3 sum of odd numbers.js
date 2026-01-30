

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let sum = 0;
let odd = 81;
while (odd <= 131) {
    if (odd % 2 !== 0) {
        sum += odd;
    }
            odd++;



}
console.log('Sum : ', sum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
let total = 0;
let even = 81;
while (even <= 131) {
    if (even % 2 == 0) {
        total += even;
    }
            even++;



}
console.log('Sum : ', total);