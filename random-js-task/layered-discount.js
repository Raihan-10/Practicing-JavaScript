/**
 * if someone buy's 100 products then the price will be 100 tk
 * if buy's over 100 and upto 200 then first 100 products will be 100tk and 2nd 100 will be 90 tk
 * if buy's over 200 then 1st 100 product's will be 100tk and 2nd 100 products will be 90tk and remaining will be 70tk
 */

function layerDiscount(quantity){
    if(quantity<=100){
        const price = quantity*100;
        return price;
    }
    else if(quantity<=200){
        const first100Products=100*100;
        let price = (quantity-100);
        price = price*90;
        const total = first100Products+price
        return total;
    }
    else{
        const first100Products = 100*100;
        const second100Products = 100*90;
        const remaining =(quantity-200);
        const total = first100Products+second100Products+(remaining*70);
        return total;
    }
        
}

const totalTk = layerDiscount(300);
console.log(totalTk);
