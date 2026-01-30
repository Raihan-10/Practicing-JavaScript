/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// What about ==80?

let myMarks=70;
let friendsMark=90;

if(myMarks>=80){
    if(friendsMark>80){
                console.log('mama ajk lunch koraba');

    }
    else if(friendsMark<80 && friendsMark>=60){
        console.log('Good luck next time');
    }
    else if(friendsMark<60 && friendsMark>=40){
        console.log('I am not seeing your messages');
    }
    else if(friendsMark<40){
        console.log('Blocked');
    }

}
else if(myMarks<80){
    console.log('bari gelam, ghumailam and kanna korlam');
}