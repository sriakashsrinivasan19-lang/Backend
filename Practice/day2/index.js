// Create an array and push the odd number to another array;




let arr = [1,2,3,4,5,6,7,8,9];
let result =[];
let count = 0;
for(let s=0;s<arr.length;s++){
    if(arr[s]%2!==0){
        
       result[count] =arr[s];
        count++;

    }
    
}

console.log("result",result);