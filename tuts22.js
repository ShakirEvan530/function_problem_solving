// 22.1 practice task by me. 
// function getMax(num1,num2){
//     if(num1>num2){
//         return num1;
//     }
//     if(num2>num1){
//         return num2;
//     }
// }
// const maximum1 = getMax(150,51);
// const maximum2 = getMax(50,-52);
// console.log(maximum1);
// console.log(maximum2);

// const jim = 19;
// const dim = 49;
// const mim = 39;

// if(jim> dim && jim>mim){
//     console.log('maximum number is',jim);
// }
// else if(dim>jim && dim>mim){
//     console.log('maximum number is',dim);
// }
// else{
//     console.log('maximum is',mim);
// }

// const max = Math.max(12,25,45)
// console.log(max);


// const heights = [65,66,68,72,78,60,65,66];

// function getMax(numbers){
//     let max = numbers[0];
//     for(const num of numbers){
//         // console.log(num);
//         if(num> max){
//             max = num;
//         }
//     }
//     return max;
// }
// const max = getMax(heights)
// console.log('max value is',max);


// const heights = [65,66,68,72,78,60,65,66,79];

// function getMax(numbers){
//     let max =numbers[0];
//     for(const num of numbers){
//         if(num>max){
//             max = num;
//         }
//     }
//     return max;
// }
// const max = getMax(heights);
// console.log('the highest height is:',max);



// const height = [65,66,58,72,78,60,65,66,79];


// function getMin(numbers){
//     let min = numbers[0];
//     for(const num of numbers){
//         if(num<min){
//             min = num;
//         }
//     }
//     return min;
// }
// const min = getMin(height);
// console.log('Minimum height person in this group is:',min);



// function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const chairTotalWood = chairQuantity * perChairWood;
//     const tableTotalWood = tableQuantity * perTableWood;
//     const bedTotalWood = bedQuantity* perBedWood;

//     const totalWood = chairTotalWood  + tableTotalWood + bedTotalWood;
//     return totalWood; 
// }

// const wood = woodQuantity(1,1,1);
// console.log('total wood needed for the room setup',wood);



// shirt price = 500
// pant price = 300
// shoe price = 900

// function cost(shirtQuantity , pantQuantity, shoeQuantity){
//     const perShirtPrice = 500;
//     const perPantPrice = 300;
//     const perShoePrice = 900;


//     const totalShirtPrice = perShirtPrice * shirtQuantity;
//     const totalPantPrice = perPantPrice * pantQuantity;
//     const totalShoePrice = shoeQuantity * perShoePrice;

//     const totalTakaNeed = totalShirtPrice + totalPantPrice + totalShoePrice;
//     return totalTakaNeed;
// }

// const totalCost = cost(2,2,1);
// console.log('total cost me in this season market is:',totalCost);


// const phones=[
//     {name:'Samsung',price:20000,camera:'12mp',color:'black'},
//     {name:'xioami',price:16000,camera:'12mp',color:'black'},
//     {name:'oppo',price:21000,camera:'12mp',color:'black'},
//     {name:'Iphone',price:26000,camera:'12mp',color:'black'},
//     {name:'Walton',price:31000,camera:'12mp',color:'black'},
//     {name:'HTC',price:27000,camera:'12mp',color:'black'}
// ]
// function getCheapestPhones(phones){
//     let min = phones[0];
//     for(const phone of phones){
//         if(phone.price<min.price){
//             min = phone;
//         }
//     }
//     return min;
// }
// const minimum = getCheapestPhones(phones);
// console.log('cheapest phone price is:',minimum);



// const numbers = [300,100,700,1200];
// const products = [
//     {name :'shampoo',price: 300},
//     {name :'chiruni',price: 100},
//     {name :'shirt',price: 700},
//     {name :'pant',price: 1200}
// ]
//     function getShoppingTotal(products){
//         let total = 0;
//         for(const product of products){
//           total= total + product.price;
//         }
//         return total;
//     }
// const total = getShoppingTotal(products);
// console.log('total ajke khosabe:', total);


// const products =[
//     {name :'shampoo',price: 300,quantity:2},
//     {name :'chiruni',price: 100,quantity:3},
//     {name :'shirt',price: 700,quantity:5},
//     {name :'pant',price: 1200,quantity:1}
// ]

// function cartTotal(products){
//     let total =0;
//     for(const product of products){
//         const thisProductCost = product.price * product.quantity;
//         total = total + thisProductCost;
//     }
//     return total;
// }
// const totalCost = cartTotal(products)
// console.log('total cost after buying all the thing is:',totalCost);


// function discountedPrice(quantity){
//     if(quantity<=100){
//         const total = quantity*100;
//         return total;
//     }
//     else if(quantity<=200){
//         const total = quantity*90;
//         return total;
//     }
//     else{
//         const total = quantity*80;
//         return total
//     }
// }
// const totalPrice = discountedPrice(10);
// console.log('total price of the product is:',totalPrice);


// function layerDiscountedTotal (quantity){
//     const first100Price = 100;
//     const second100Price = 90;
//     const above200Price = 80;

//     if(quantity <=100){
//         const total = quantity* first100Price;
//         return total;
//     }
//     else if( quantity <=200){
//         const first100Total = 100 * first100Price;
//         const remainingQuantity = quantity -100;
//         const remainingTotal = remainingQuantity * 90;
//         const total = first100Total + remainingTotal;
//         return total;
//     }
//     else{
//         const first100Total = 100 * first100Price;
//         const second100Total = 100 * second100Price;
//         const remainingQuantity = quantity - 200;
//         const remainingTotal = remainingQuantity * above200Price;
//         const total = first100Total + second100Total + remainingTotal;
//         return total;
//     }
// }
// const totalPrice = layerDiscountedTotal(201);
// console.log('Total price after the discounted value is',totalPrice);


 function add(num1 ,num2){
    return num1 + num2;
 }
 
 function substract(num1 , num2){
    return num1-num2;
 }
function multiply(num1, num2){
    return num1* num2;
}

function divide (num1,num2){
    return num1/num2;
}


function calculator(a,b,operation){
    if(operation === 'add'){
        const result = add(a,b);
        return result;
    }
    else if(operation === 'substract'){
        const result = substract(a,b);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(a,b);
        return result;
    }
    else if(operation ==='divide'){
        return divide(a,b);
    }
    else{
        return "only 'add' , 'substract', 'multiply' , 'divide ' operation is allowed. "
    }
}

const result = calculator(5,7,'add');
console.log(result);

const result2 = calculator(50,25,'substract');
console.log(result2);

const result3 = calculator(5,7,'multiply');
console.log(result3);

const result4 = calculator(50,10,'divide');
console.log(result4);


























