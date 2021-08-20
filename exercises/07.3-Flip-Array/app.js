var arr = [45,67,87,23,5,32,60];

//Your code here.
var arrayInverted=[]
var back = arr.length-1 ;


for (let i = back ; i>= 0 ; i--){
    
    arrayInverted.push(arr[i])
    
    
}
console.log(arrayInverted);
