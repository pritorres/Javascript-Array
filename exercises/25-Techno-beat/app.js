function lyricsGenerator(myArray) {
    let myString = "";

    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];

        if (element === 0) {
            myString += "Boom ";

        }
        else if (element === 1) {
            myString += "Drop the base "
            const prevIndex = index - 1;
            const prevPrevIndex = index - 2;

            if (myArray[prevIndex] === 1 && myArray[prevPrevIndex] === 1) {
                myString += "!!!Break the base!!! ";
            }


        }

    }
    return myString.trim()
}
// test Data
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))