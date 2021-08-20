var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    firstArray.forEach(element => {
        newArray.push(element);        
    });
    secondArray.forEach(element_1 => {
        newArray.push(element_1);        
    });
    //your code here
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));