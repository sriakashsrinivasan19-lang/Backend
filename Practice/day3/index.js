// Array Practice

let arr1=[-2,2,-3,3]
let result = [];
let count=0;

let result1=[];
let count1=0;

let finalAnswer=[];
let count2=0;


for(s=0;s<arr1.length;s++){
    if(arr1[s]<0){
        console.log(arr1[s]);
        result[count]=arr1[s];
        count++;
     }
     
     if(arr1[s]>0){
        console.log(arr1[s]);
        result1[count1]=arr1[s];
        count1++;
     }
     
}

for(i=0;i<result.length;i++){
    finalAnswer[count2] = result[i];
    count2++;
}

for(i=0;i<result1.length;i++){
    finalAnswer[count2] = result1[i];
    count2++;
}
console.log(result);
console.log(result1);
console.log(finalAnswer);

// ------------------------------------------- //

let arr = [10, 20, 30, 40, 50];
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
    

}

console.log('/--------------------/');


let block = [1,2,3,4,5];
let check=0;
let answer =[];
for(i=0;i<block.length;i++){
    if(block[i]%2===0){
        answer[check]=block[i];
        check++;
    }
}
console.log(answer);

//----- Loop Practice-----//

