// Task-1  
// Take four parameters. Multiply the four numbers and then return the result 
function multiply(p1,p2,p3,p4){
    return (p1*p2*p3*p4);

}

const numbers = multiply(1,2,3,4);
// console.log('Multiply of given numbers are :',numbers);


// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function checkNumber(number){
    if(number % 2 !==0){
        return number*2;
    }
    return number/2;
}

const number = checkNumber(20);
// console.log(number);

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers,size){
    let sum=0;
    for(const number of numbers){
        sum+=number;
    }
    return sum/size
    
}
const arrayOfInt = [1,2,3,4,5];
const callingFunction = make_avg(arrayOfInt,arrayOfInt.length);
// console.log(callingFunction);

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(bStr){
    let countZero =0;
    for(const str of bStr){
        if(str==0){
            // countZero+=1;
            countZero++;
        }

    }
    return countZero;
}

const binaryStr = '001100001100000';
// console.log(count_zero(binaryStr));


// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.

function odd_even(checkNumber){
    if(checkNumber % 2 ==0){
        return "Even";
    }
    return "Odd";
}

const int = odd_even(100);
console.log(int);
