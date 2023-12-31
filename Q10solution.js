 /*You are 2iven with an array of numbers both positive and ne2ative. Your task is to print only the positive
numbers.*/
let arr=[1,2,-3,5,-9,-7,8,-6,7];
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        continue;
    }
    console.log(arr[i]);
}