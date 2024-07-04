// const numbers = [12, 22, 33, 54]
// console.log(numbers);
// numbers[1] = 23;
// console.log(numbers);
// console.log(numbers.length);


// const numbers = [10,20,3,0,40,560,60,70]
// console.log(numbers);
// numbers.push(12)
// console.log(numbers);
// numbers.push(30)
// console.log(numbers);


// const friends = ["Evan","jidan","ripa"]
// console.log(friends);
// friends.push("Muna");
// console.log(friends);
// friends.pop()
// console.log(friends);


// var weight = 38 ;
// var price = 38;
// var year = 1995;
// var money = 2005;

// money = 500;

// var age ;
// console.log(money);
// console.log(price);

// var age = 17;
// age = 35;
// console.log(age);


// var name = "sadar uddin" ;
// console.log(name);

// var isRich = true;
// console.log(isRich);

// var first = 0.1 ;
// var second = 0.2;
// var total = first + second;
// console.log(total.toFixed(4));


// var eggPrice = 10;
// var onionPrice = 20;
// console.log(eggPrice+onionPrice);

// var Remainder1 = 10%3;
// var Remainder2 = 10%4;
// console.log(Remainder1);
// console.log(Remainder2);
// // remainder 

// var price  = 35;
// // price = price +10;
// price +=10;
// console.log(price);

// var fridge = 35000;
// fridge = fridge-1000;
// console.log(fridge);

// var orangePrice = 30;
// // orangePrice = orangePrice*3;
// orangePrice*=3;
// console.log(orangePrice);


// var first = 'Aus Shakir ';
// var second = 'Ahmed Evan ';
// var fullName = first+ second;
// console.log(fullName);


// first question solution 
// var total = 1000;
// var orange_cost = 350;
// var apple_cost = 350;
// totalCost = orange_cost + apple_cost;
// var remaining = total - totalCost;
// console.log(remaining);



// second question solution 

// var math = 75.25;
// var biology = 65;
// var chemistry = 80;
// var physics = 35.45;
// var bangla = 99.50;

// var totalMark = (math + biology + chemistry + physics + bangla);
// var average = totalMark/5;
// console.log(average.toFixed(2));



// Third question solution 
// var given_number = 119;
// var remainder = given_number%5;
// console.log(remainder);


// const a = isNaN('11');
// const b = isNaN(2-10);
// console.log(a);
// console.log(b);


// console.log(5>10);
// console.log(5<10);
// console.log(5==10);
// console.log(10==10);
// console.log(15>=10);
// console.log(5>=10);
// console.log(5<=10);
// console.log(10<=10);
// console.log(100<=10);


// console.log(10 == '10');
// console.log(10 ==='10');
// console.log(10 =='10');
// console.log(10 !='10');


// var biriyaniPrice = 700;
// if(biriyaniPrice < 500){
// console.log("Mama give me some biriyani");
// }
// else{
//     console.log("Mama dont give me biriyani");
// }


// var weight = 30;


// const salary = 25000;
// const isBCS = true;
// const height = 68;

// if(salary > 24000 && height >70)
// {
//     console.log("Su --- patro");
// }
// else{
//     console.log("Not a su patro");
// }


// if((salary >24000 && height > 68) && isBCS==true){
//     console.log("Meyer family raji ase");
// }
// else{
//     console.log("Meyer family raji nai");
// }



//  const price = 400;

//  if(price >=500){
//     //15% discount 
//     const discount = price * 15/100;
//     const main_price = price - discount;
//     console.log(main_price);
//  }

//  else if(price < 500){
//     // 10% discount 
//     const discount = price * 10/100;
//     const main_price = price- discount;
//     console.log(main_price);
//  }
// else 
// {
//     console.log(price);
// }


// const age = 60;
// const price = 350;
// if(age<=12){
//     console.log("you can eat for free");
// }

// else if(age>=60){
//     // 10% discount for the age 60 or above 
//     const discount = price * 10/100;
//     Main_price = price - discount;
//     console.log(Main_price);
// }
// else if(age>=50){
//     // 10% discount for the age 50 or above 
//     const discount = price * 5/100;
//     Main_price = price - discount;
//     console.log(Main_price);
// }
// else{
//     console.log("you have to pay the full money");
// }



//  ternary operator in javascript 

// const age = 3;
// if(age >18){
//     console.log("You can vote");
// }
// else{
//     console.log("You can not vote");
// }

// const age = 9;
// if(age>=18?console.log("you can vote"): console.log("You can not vote"));



// problem 1 solution 
// const burger_price = 550;
// if(burger_price>=500){
//     console.log("You will get the free coke");
// }
// else{
//     console.log("Buy coke for the price 30Tk");
// }


// problem 2 solution
// const weight = 77;
// const height = 1.7;
// const BMI = weight/(height*height);

// if(BMI < 18.5){
//     console.log("You are Under weight");
// }
// else if( BMI >= 18.5 && BMI <=24.9){
//     console.log("You are normal");
// }
// else if( BMI >= 25 && BMI <=29.9){
//     console.log("You are overweight");
// }
// else{
//     console.log("You are obese");
// }


// 3rd question solution 


// const mark = 70;
// if(mark>=90 && mark <=100){
//     console.log("A");
// }
// else if(mark>=80 && mark <=89){
//     console.log("B");
// }
// else if(mark>=70 && mark <=79){
//     console.log("C");
// }
// else if(mark>=60 && mark <=69){
//     console.log("D");
// }
// else{
//     console.log("F");
// }



// 4th question solution 

// const myMarks = 70;

// if(myMarks>=80){
//     // console.log("My friend score");
//     const friendMarks = 80;
//     if(friendMarks>=80){
//         console.log("Go for lunch");
//     }
//     else if(friendMarks<80 && friendMarks>=60){
//         console.log("Good luck next time");
//     }
//     else if(friendMarks<60 && friendMarks>=40){
//         console.log("Keep your friend message unseen");
//     }
//     else{
//         console.log("Block you my friend");
//     }
// }
// else {
//     console.log("Go to home and sleep and act sad");
// }














































