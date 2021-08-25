// Code goes here
function matrixBuilder(params) {
    let myMatrix = [];
    for (let index = 0; index < params; index++) {
        let filas =[];
        for (let j = 0; j < params; j++) {
        filas.push(Math.floor(Math.random(0)*2))
        
        
        }
        
        myMatrix.push(filas)
    }

    return myMatrix
}



// do not change anything from this line down

console.log(matrixBuilder(5))