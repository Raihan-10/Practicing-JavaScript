
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age=24;
let student=true;
if(age<10){
    console.log('Ticket is free');
}
else if(student==true){
    console.log('Get a 50% discount');
}
else if(age>=60){
    console.log('Gets a 15% discount');
}
else{
    console.log('Pay 800tk');
}