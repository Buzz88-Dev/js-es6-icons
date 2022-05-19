
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

// mi collego al div principale con id container-items
let myDivContainer = document.getElementById("container_items");

// creo il mio div interno con classe items
let myDivItems = document.createElement("div");
myDivItems.classList.add("items");

// creo al suo interno un tag i
let myi = document.createElement("i");

// e creo al suo interno un tag p
let myp = document.createElement("p");

console.log(myArrayObject[0].name);


for (let i = 0; i < myArrayObject.length; i++){

	let myDivContainer = document.getElementById("container_items");

	let myDivItems = document.createElement("div");
	myDivItems.classList.add("items");

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
	

	let myp = document.createElement("p");
	let inseriscoName = myArrayObject[i].name;
	myp.append(inseriscoName);


	myDivItems.append(myi, myp);
	myDivContainer.append(myDivItems);
}


// myArrayObject.forEach((element) => {

// 	console.log(element.type);
// 	if (element.type === 'animal'){
// 		myi.classList.add("blue");
// 	}
// })

// let animalBlue = myArrayObject.filter((element) => {
// 	if(element.type === 'animal') {
// 		myi.classList.add("blue");
// 	}
// })







