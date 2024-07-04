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

function cost(shirtQuantity , pantQuantity, shoeQuantity){
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;


    const totalShirtPrice = perShirtPrice * shirtQuantity;
    const totalPantPrice = perPantPrice * pantQuantity;
    const totalShoePrice = shoeQuantity * perShoePrice;

    const totalTakaNeed = totalShirtPrice + totalPantPrice + totalShoePrice;
    return totalTakaNeed;
}

const totalCost = cost(2,2,1);
console.log('total cost me in this season market is:',totalCost);










