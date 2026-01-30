
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// let weight = Number(prompt('what is your weight?(kg)'));
// let height = Number(prompt('what is your height(feet and inch eg. 5.5 means 5 feet and 5 inch)?'));

let weight = 92;
let height = 5.5; //5 feet 5 inch

let feetToMeter = height * 0.3048;

let bmi = (weight / feetToMeter ** 2).toFixed(1);

console.log('Your bmi is = ' + bmi);


// using ternary operator

// const result = 
// (bmi < 18.5)?     console.log('You are underweight'):

// (bmi >= 18.5 && bmi <= 24.9)?        console.log('You are underweight'):

// (bmi >= 25 && bmi <= 29.9) ?             console.log('You are underweight'):

//  console.log('You are mutki');


// console.log(result);


// without using console.log
// const result =
//   bmi < 18.5 ? 'You are underweight' :
//   bmi <= 24.9 ? 'You are normal' :
//   bmi <= 29.9 ? 'You are overweight' :
//   'You are mutki';

// console.log(result);


if (bmi < 18.5) {
    console.log('You are underweight');
}

else if (bmi >= 18.5 && bmi <= 24.9) {

    console.log('You are normal');
}

else if (bmi >= 25 && bmi <= 29.9) {

    console.log('You are overweight');
}
else {

    console.log('You are mutki');
}


