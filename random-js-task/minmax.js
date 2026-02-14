const values= [-10,-1,0,1,2,3];
// const values = [0];
function getMin(numbers){
    let min = numbers[0];
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]<min){
            min = numbers[i];
        }
    }
    return min;
}
const min = getMin(values);
// console.log(min);
const minvalue= Math.min(...values);//have to use ...
// console.log(minvalue);

function quantity(shirt,pant,shoes){
    const shirtPrice = 1000;
    const pantPrice = 600;
    const shoesPrice = 1200;
    const totalShirtPrice = shirtPrice*shirt;
    const totalPantPrice = pantPrice*pant;
    const totalShoesPrice = shoesPrice*shoes;
    const total = totalShirtPrice+totalPantPrice+totalShoesPrice;
    return total;
}

const koitaKinbo = quantity(3,2,1);
// console.log(koitaKinbo);

const phones = [
    {name:'Samsung', price: 23000, model:'m32', color:'blue'},
    {name:'iphone', price: 230000, model:'8plus', color:'blue'},
    {name:'Xaomi', price: 20000, model:'a32', color:'blue'},
    {name:'Walton', price: 21000, model:'s32', color:'blue'},
    {name:'Oppo', price: 19000, model:'a33', color:'blue'}
];

function cheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price<min.price){
            min = phone;
        }
    }
    return min;
}
function topNotch(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price<min.price){
            min = phone;
        }
    }
    return min;
}
const getCheapestPhone = cheapestPhone(phones);
console.log('cheapest phone',getCheapestPhone);
console.log('topnotch phone',topNotch(phones));
