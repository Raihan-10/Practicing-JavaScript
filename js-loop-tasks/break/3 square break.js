/* 
Write a loop that goes from 1 to 100, 
but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for(let i=1; i<=100; i++){
    console.log('iteration:',i);
    
    if(i*i ==4){
                console.log(i,'*',i,'= ',i*i);

        break;
    }
}