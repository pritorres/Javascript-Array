var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];


let NewArray =[];
function deletePerson(personName){
	let NewArray=[];
	for (let index = 0; index < people.length; index++) {
		const element = people[index];
		if (element !== personName) {
			NewArray.push(element)
			
		}
		
	}
	return NewArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));