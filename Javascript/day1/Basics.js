// TASK 1 INTRODUCTION 
let userName = "Sri Akash";
let userAge = 21;
let userCity = "Chennai";
console.log("Name :",userName);
console.log("Age :",userAge);
console.log("City :",userCity);

// TASK 2  BASIC CALCULATOR

let a = 30;
let b = 3;
console.log("Addition :",a+b);
console.log("Subtraction :",a-b);
console.log("Multiplication :",a*b);
console.log("Division :",a/b);
console.log("Reminder :",a%b);

// TASK 3  AGE CHECKER

let studentAge = 20;
// studentAge = 15;
if(studentAge >=18){
    console.log("Adult");
}else{
    console.log("Minor");
}

// TASK 4 EVEN OR ODD

let num = 7;
if(num % 2 !== 0){
    console.log("odd");
}else {
    console.log("Even");
    
}

// TASK 5 POSITIVE, NEGATIVE, OR ZERO

let isNum = 10;
if(isNum >0){
    console.log("The Number is Negative");
}else if(isNum<0){
    console.log("the Number is Positive");
    
}else if(isNum===0){
    console.log("The Number is Zero");
    
}else{
    console.log("NaN");
    
}

// TASK 6 PASS OR FAIL

let studentMark = 40;
if(studentMark >=50){
    console.log("Pass");
    
}else{
    console.log("Fail");
    
}

// TASK 7 LOGIN CHECK

let isLoggedIn = true;
isLoggedIn = false;
if(isLoggedIn == 1){
    console.log("welcome User");
    
}else{
    console.log("Please Login");
    
}

// TASK 8 LOGIN + ADMIN CHECK
let ifLoggedIn = true;
let isAdmin = false;
if(ifLoggedIn == true && isAdmin == true ){
    console.log("Admin Dashboard");
    
}else if(ifLoggedIn == true && isAdmin == false){
    console.log("user Dashboard");
}else{
    console.log("Please Login");
    
}

// TASK 9  SHOPPING BALANCE

let balance = 200;
let price = 300;
if(balance>=price){
    console.log("Purchase successful");
    balance-=price;
    console.log(balance);
}else{
    console.log("insufficient Balance");
    
}

// TASK 10 STUDENT GRADE

let mark = 95;
if(mark >=95 && mark <=100){
    console.log("Grade A+");
    
}else if(mark>=70 && mark<95){
    console.log("Grade B");
    
}else if(mark >=50 && mark<70){
    console.log("Grade C");
    
}else{
    console.log("Fail");
    
}