
let myArrayObject = [

	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

for (let i = 0; i < myArrayObject.length; i++){

	// mi collego al div principale con id container-items
	let myDivContainer = document.getElementById("container_items");

	// creo il mio div interno con classe items
	let myDivItems = document.createElement("div");
	myDivItems.classList.add("items");

	// creo al suo interno un tag i
	let myi = document.createElement("i");
	myi.classList.add(myArrayObject[i].family)
	myi.classList.add(myArrayObject[i].prefix + myArrayObject[i].name);

	if (myArrayObject[i].type === "animal"){
		myi.classList.add("blue");
	} else if (myArrayObject[i].type === "vegetable"){
		myi.classList.add("orange");
	} else {
		myi.classList.add("violet");
	}
	
	// e creo al suo interno un tag p
	let myp = document.createElement("p");
	let inseriscoName = myArrayObject[i].name;
	inseriscoName = inseriscoName.toLocaleUpperCase();
	myp.append(inseriscoName);


	myDivItems.append(myi, myp);
	myDivContainer.append(myDivItems);
}


// console.log(myArrayObject[2].name);
// stampo nella console "dog", ovvero il valore della chiave dell array[2]


// myArrayObject.forEach((element) => {
// 	console.log(element.type);
// })
// stampo nella console tutti i valori della chiave type: quindi 8 volte animal, 4 volte vegetable, 4 volte user


// togliere i commenti sotto e analizzare cosa succede
// let myi = document.createElement("i");
// let myDivItems = document.createElement("div");
// let myDivContainer = document.getElementById("container_items");
// let animalBlue = myArrayObject.filter((element) => {

// 	if(element.type === 'animal') {
// 		console.log(element.type);
// 		myi.classList.add("ciao");
// 		myDivItems.append(myi);
// 		myDivContainer.append(myDivItems);
// 	}
// })









