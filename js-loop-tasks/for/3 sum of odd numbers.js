

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let sum = 0;
for(let i = 91; i<=129; i++){
    if(i%2!==0){
        // console.log(i);
        sum+=i;
    }
}
console.log('Sum: ',sum);

/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
let total = 0;
for(let n=51; n<=85; n++){
    if(n%2==0){
        total+=n;
    }
}
console.log('sum: ',total);


