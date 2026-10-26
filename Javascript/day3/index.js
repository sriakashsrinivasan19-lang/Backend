// TASK 1 — USER PROFILE MESSAGE

const profileInfo = {Name:'sri akash', Age:21,City:'Chennai',Role:'Web Developer'}
console.log(`Hello, my name is ${profileInfo.Name}
I am ${profileInfo.Age} years old
I live in ${profileInfo.City}
I am a ${profileInfo.Role} 
    `);


console.log('/--------------------------------/');

// TASK 2 — SIMPLE CALCULATOR

const add=(a,b)=>{
    
    console.log(a+b);
    return a+b;
   
}
add(10,20);

const sub=(a,b)=>{
    console.log(a-b);
    
    return a-b;
}
sub(20,15);

const multiple=(a,b)=>{
    console.log(a*b);
    
}
multiple(10,2);

const divide=(a,b)=>{
    console.log(a/b);
    
}
divide(20,5);

// TASK 3 — USER GREETING
const greetUser=(name,role="Web Developer")=>{
    console.log(`Hello ${name}, I'm a ${role}`);
    
}
greetUser("Sri akash");

// TASK 4 — STUDENT PROFILE

const student ={name: "Sri Akash", age: 21, course: "FullStack Deveoper", city: "Chennai"};

const result=(student)=>{
    
    const{name,age,course,city} = student;

    console.log(`Student : ${name}
        Age : ${age}
        Course : ${course}
        City : ${city}`);
    
}
result(student);

// TASK 5 — PRODUCT PRICE CALCULATOR

const product = { name: "Laptop", price: 60000, quantity: 2};

const output = (product)=>{
const {name,price,quantity,} = product;
     
console.log(`Name : ${name}
Price: ${price}
Quantity: ${quantity}
Total: ${price*quantity}`);
    
}
output(product);

// TASK 6 — ADD MORE PRODUCTS

const products1 = ["Laptop", "Mouse"];
const products2 = ["Keyboard", "Monitor"];
const shop = [...products1,...products2];
console.log(shop);

// TASK 7 — COPY AND UPDATE USER

const user = {
    name: "Sri akash",
    age: 21,
    role: "Developer"
};
console.log(user);

const updatedUser = {
    ...user,
    age: 25,
    role:"Creator"

}
console.log(updatedUser);

// TASK 8 — SHOPPING CART TOTAL

const calculateTotal=(...prices)=>{
   
   let total = 0;
   for(i=0;i<prices.length;i++){
    total = total + prices[i]
   }
   
    console.log(total);
    
}
calculateTotal(50,100);
// TASK 9 — USER DETAILS WITH DEFAULT VALUES
let userInfo = (name,age=21,city="unknown")=>{
    console.log(`I'm ${name}, i'm ${age} years old,I'm from ${city}`);
    
}
userInfo("sri",18,"chennai")
userInfo("sri");

// TASK 10 — SAFE USER PROFILE

const userIn = { name: "Sriakash", age: 21,
    address:{
        city: "Chennai"
    }

};
const getcity=()=>{
console.log(userIn.address?.city??"unkown");
}
getcity()

// TASK 11 — USER SEARCH RESULT

const users = [
    { name: "Sriakash", role: "Developer" },
    { name: "Arun", role: "Designer" },
    { name: "Bala", role: "Tester" }
];
for(const result of users){
     const {name, role} = result;
     console.log(`${name} - ${role}`);
     
}

// TASK 12 — CREATE A USER OBJECT

const userName = "Sriakash";
const userAge = 21;
const userRole = "Developer";

const userResult = {
    userName,
    userAge,
    userRole


}
console.log(userResult);

// TASK 13 — LOGIN SYSTEM

const system = {
    name: "Sriakash",
    role: "Admin",
    isLoggedIn: true
};

checkLoginIn = (system)=>{
    const{name,role,isLoggedIn} = system;
    if(isLoggedIn===true){
        console.log(`Welcome ${name}
            Role: ${role}`);
        
    }else{
        console.log(`Please Login`);
        
    }
    
}
checkLoginIn(system);

// TASK 14 — PRODUCT DATA PROCESSOR

const productData = { name: "Laptop", price: 60000, category: "Electronics"};
 
const getProductInfo = (productData)=>{
   const {name,price,category} = productData;
    console.log
    (`Product: ${name}
        price: ${price}
        category: ${category}`);
    
}
getProductInfo(productData);

// console.log(getProductInfo());


const newObject ={...productData, price : 65000}
console.log(newObject);
console.log(productData);

// TASK 15 — FINAL INTERVIEW PROJECT
const studentInfo = {
    name: "Sriakash",
    age: 21,
    role: "Frontend Developer",
    address: {
        city: "Chennai"
    }
};

// FUNCTION 1 — getUserName()

const getUserName=(studentInfo)=>{
    const {name} = studentInfo;
    console.log(`Welcome to our Company ${name}`);
    
}
getUserName(studentInfo)

// FUNCTION 2 — getUserLocation()

const getUserLocation=(studentInfo)=>{
    console.log(studentInfo.address?.city??"unknown");
    
}
getUserLocation(studentInfo)

// FUNCTION 3 — getUserMessage()

const getUserMessage=(studentInfo)=>{
    const{name,age,role,address} = studentInfo;
    console.log(`${name} is a ${age} year old ${role} from ${studentInfo.address?.city}.`);
    
}
getUserMessage(studentInfo)

// FUNCTION 4 — updateUser()

const updateUser={
    ...studentInfo,
    age: 22,
    role: "Senior Frontend Developer"
}
console.log(updateUser);

// FUNCTION 5 — printUsers()

const input = {
    name: "Sriakash",
    age: 21,
    role: "Frontend Developer"
};

const final = [
    input,
    {
        name: "praveen",
        age: 25,
        role: "Backend Developer"
    },
    {
        name: "Bala",
        age: 28,
        role: "Tester"
    }
];

function printUsers() {
    for (const { name, role } of final) {
        console.log(`${name} - ${role}`);
    }
}

printUsers();