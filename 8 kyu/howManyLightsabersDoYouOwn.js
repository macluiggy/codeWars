 let persons = [{name: 'goku'}, {name: 'ZaCh'}, {name: 'vegeta'}];

 let howManyLightsabersDoYouOwn = name => name == 'zach' ? 18 : 0;

for(let i = 0, length1 = persons.length; i < length1; i++){
	const person = persons[i];
	console.log(person.name)
	console.log(howManyLightsabersDoYouOwn(person.name.toLowerCase()));
}