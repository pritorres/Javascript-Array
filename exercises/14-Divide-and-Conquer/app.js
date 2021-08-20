let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here

function mergeTwoList (list_of_numbers) {
    let even =[];
    let odd =[];
    list_of_numbers.forEach(element => {
        if (element%2== 0) {
            even.push(element)            
        }
        else {
            odd.push(element)
        }
        
    });
    let ConcatenacionArrays = odd.concat(even);

    return ConcatenacionArrays;
}


console.log(mergeTwoList(list_of_numbers))
