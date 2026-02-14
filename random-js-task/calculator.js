function add(n1,n2){
    return n1+n2;
}
function subtract(n1,n2){
    return n1-n2;
}
function multiply(n1,n2){
    return n1*n2;
}
function division(n1,n2){
    return n1/n2;
}

function calculator(a,b,op){
    if(op==='+'){
       const result =  add(a,b);
       return result;
    }
    else if(op==='-'){
        const result = subtract(a,b);
        return result;
    }
    else if(op==='*'){
        const result = multiply(a,b);
        return result;
    }
    else if(op==='/'){
        const result = division(a,b);
         return result;
    }
    else
        return 'use only = , - , * , / operation';
}

const calculation = calculator(1,2,'-');
console.log(calculation);

