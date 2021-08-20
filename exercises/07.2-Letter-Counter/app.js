let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
// your code here
for(var position = 0; position < par.length; position++)
{
    const letter = par[position].toLowerCase();
  
    if(letter !== ' '){
        counts[letter] = counts[letter] ? counts[letter] += 1:counts[letter] = 1
    }

}
console.log(counts);
 
 
 