var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
var types=[];
let index= mix.length-1;
for (let i=0; i<=index; i++){
    var type=typeof mix[i]
    types.push(type)
    
    
}
console.log(types);
