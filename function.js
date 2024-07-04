// function doubleIt(number)
// {
//     const doubled = number * 2;
// console.log(number,doubled);
// }
// console.log("I will double the value of the function");
// doubleIt(4);

// function doubleValue(number){
//     afterDouble = number*2;
//     console.log(afterDouble);
// }
// doubleValue(6);

// function differece (num1,num2){
//    const difference= num1- num2;
   
//    console.log(num1, num2, "Difference between these two numbers are ",differece);
// }
// differece(10,5);

// function borgo(number){
//     console.log('value of the number parameter is',number);
//     const borgo = number * number;
//     console.log('borgo of the number is',borgo);
// }
// borgo(4);


// function difference(num1, num2){
//     const diff = num1-num2;
//     console.log(num1,num2,'difference is',diff );

// }
// difference(20,10)

// function differece(fatherAge, sonAge){
// const fatherAge = 60;
// const sonAge = 24;

// const differece = fatherAge - sonAge;
// console.log('difference between father and son age is', differece);
// }

// differece



// function fiveTimes(number){
//     console.log('input number 1 is',number);
//     const result = number * 5;
//     return result;
// }
// fiveTimes(5);
// const output1 = fiveTimes(5);
// console.log('output for this is:', output1);

// function tenTimes(number){
//     console.log('input number 2 is',number);
//     const tenGun = number*10; 
//     return tenGun;
// }
// tenTimes(10);
// const output2 = tenTimes(10);
// console.log('output for this is:',output2);

// function CutHalf(number){
//     console.log('input number 3 is',number);
//     const half = number/2;
//     return half;
// }

// CutHalf(50);
// const output3 = CutHalf(50);
// console.log('Output for this is:',output3);


// function isEven(number){
//     if(number % 2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEven(15));
// console.log(isEven(14));
// console.log(isEven(19));
// console.log(isEven(10));


// function everSizedString (str){
//     const size = str.length;
//     console.log(str,size);
//     if(size %2 ===0){
//         console.log('the size of the string is even');
//         return true;
//     }
//     else{
//         console.log('The size of the string is odd');
//         return false;
//     }
// }
// everSizedString('Evanrtyn')
// everSizedString('Jidan')


// function sumOfNumbers(numbers){
//     let sum = 0;
//     for(const number of numbers)
//         {
//             console.log(number);
//             sum = sum + number;
//         }
//         return sum;
// }
// const numbs = [54,62,12,6];
// const sum =sumOfNumbers(numbs);
// console.log('The sum of the five numbers is',sum);


// function sumOfNumbers(numbers){
//     let sum =0 ;
//     for(const number of numbers){
//         console.log(number);
//         sum = sum + number;
//     }
//     return sum;
// }
// const numbs = [54,62,12,6];
// const sum = sumOfNumbers(numbs);
// console.log('the sum of the five numbers is',sum);


// function sumofNumbers(numbers){
//     let sum =0;
//     for(const number of numbers){
//         if(number % 2===0){
//             console.log(number);
//             sum = sum + number;
//         }
//     }
//     return sum;
// }
// const numbers = [12,15,20,25,30];
// const sum = sumofNumbers(numbers);
// console.log("the total sum of the numbers are",sum);



// sum of the odd numbers from the array by using if statement 
// function sumOfOddNumbers(numbers){
//     let sum = 0;
//     for(const number of numbers){
//         if(number % 2===1){
//             console.log(number);
//             sum = sum + number;
//         }
//     }
//     return sum;
// }
// const numbers = [15,20,35,5,10];
// const sum = sumOfOddNumbers(numbers);
// console.log('the sum of the odd numbers are',sum);



// number 1 practice task solved 
// function numbers(num1, num2 , num3, num4)
// {
//     const result = num1* num2* num3* num4;
//     console.log(result);
//     return result;
// }
// const result = numbers(2,5,10,20);



// 2nd task has been completed
// function modifyNumber(number) {
//     if (number % 2 === 1) {
//       return number * 2;
//     } else {
//       return number / 2;
//     }
//   }
//   const result = modifyNumber(11);
//   console.log(result);


// function make_avg(numbers){
//     let sum = 0;
//     for(const number of numbers){
//         console.log(number);
//         sum = sum + number;
//         average = sum/5;
        
//     }
//     return sum;
    
// }
// const numbs = [10,15,20,25,30];
// const sum = make_avg(numbs);
// console.log('sum of the numbers are',sum);
// console.log(average);


// function inchToFeet2(inch){
//     const feetFraction = inch/12;
//     const feetNumber = parseInt(feetFraction);
//     const inchRemaining = inch%12;
//     const result = feetNumber + 'ft' + inchRemaining+ 'inch';
//     return result;
// }
// const shuvoHeight = inchToFeet2(75);
// const shuvoHeight2 = inchToFeet2(75);
// console.log('The height of the shuvo is',shuvoHeight2);


// function inchToFeet(inch){
//     const feetFraction = inch/12;
//     const feetNumber = parseInt(feetFraction);
//     const inchRemaining = inch%12;
//     const result = feetNumber + 'ft' + inchRemaining + 'inch';
//     return result;
// }
// const shuvoHeight = inchToFeet(70);
// console.log('the height to the shuvo is', shuvoHeight);



// program for finding if the year is leap year or not 
// function leapYear(year){
//     if(year%4===0 && year%100!=0 && year%4===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const mainYear = leapYear(2008);
// console.log('The given year is a leap year',mainYear);


// function oddAverage(numbers){
//     const odds = [];
//     for(const number of numbers){
//         if(number %2 === 1){
//             odds.push(number);
//         }
//     }
//     console.log(odds);
//     let sum = 0;
//     for(const number of odds)
//         {
//             sum = sum + number;
//         }
//     const count = odds.length;
//     const avg = sum/count;
//     console.log(sum);
//     console.log(count);
//     return avg;
// }
// const numbers = [43,13,58,65,81,53];
// const avg =oddAverage(numbers);
// console.log('average of the odd numbers is:',avg);


























































