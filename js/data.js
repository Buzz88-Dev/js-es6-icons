
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

// collegamento esterno del div principale con div container_items
let myDivContainer = document.getElementById("container_items");

let button = document.getElementById("mybutton");
let filter = document.getElementById("filter");

// tramite filter creo un array di oggetti che hanno come valore di type animal
let arrAnimal = myArrayObject.filter((item) => {
	if(item.type === "animal"){
		return true;
	}
})
console.log(arrAnimal);

// tramite filter creo un array di oggetti che hanno come valore di type vegetable
let arrVegetable = myArrayObject.filter((item) => {
	if(item.type === "vegetable"){
		return true;
	}
})
console.log(arrVegetable);


// tramite filter creo un array di oggetti che hanno come valore di type user
let arrUser = myArrayObject.filter((item) => {
	if(item.type === "user"){
		return true;
	}
})
console.log(arrUser);



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



button.addEventListener("click",

	function(){

		let chooseFilter = parseInt(filter.value);
		myDivContainer.innerHTML = " ";

		if(chooseFilter === 0){

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
		
		} else if (chooseFilter === 1){
			
			for (let i = 0; i < arrAnimal.length; i++){
			
				// creo il mio div interno con classe items
				let myDivItems = document.createElement("div");
				myDivItems.classList.add("items");
			
				// creo al suo interno un tag i
				let myi = document.createElement("i");
				myi.classList.add(arrAnimal[i].family)
				myi.classList.add(arrAnimal[i].prefix + arrAnimal[i].name);
			
				myi.classList.add("blue");
						
				// e creo al suo interno un tag p
				let myp = document.createElement("p");
				let inseriscoName = arrAnimal[i].name;
				inseriscoName = inseriscoName.toLocaleUpperCase();
				myp.append(inseriscoName);
			
			
				myDivItems.append(myi, myp);
				myDivContainer.append(myDivItems);
			}
		
		} else if (chooseFilter === 2){
		
			for (let i = 0; i < arrVegetable.length; i++){
				let myDivContainer = document.getElementById("container_items");
			
				// creo il mio div interno con classe items
				let myDivItems = document.createElement("div");
				myDivItems.classList.add("items");
			
				// creo al suo interno un tag i
				let myi = document.createElement("i");
				myi.classList.add(arrVegetable[i].family)
				myi.classList.add(arrVegetable[i].prefix + arrVegetable[i].name);
			
				myi.classList.add("orange");
		
				// e creo al suo interno un tag p
				let myp = document.createElement("p");
				let inseriscoName = arrVegetable[i].name;
				inseriscoName = inseriscoName.toLocaleUpperCase();
				myp.append(inseriscoName);
			
			
				myDivItems.append(myi, myp);
				myDivContainer.append(myDivItems);
			}
		
		} else {
		
			for (let i = 0; i < arrUser.length; i++){
				let myDivContainer = document.getElementById("container_items");
			
				// creo il mio div interno con classe items
				let myDivItems = document.createElement("div");
				myDivItems.classList.add("items");
			
				// creo al suo interno un tag i
				let myi = document.createElement("i");
				myi.classList.add(arrUser[i].family)
				myi.classList.add(arrUser[i].prefix + arrUser[i].name);
			
				myi.classList.add("violet");
		
				// e creo al suo interno un tag p
				let myp = document.createElement("p");
				let inseriscoName = arrUser[i].name;
				inseriscoName = inseriscoName.toLocaleUpperCase();
				myp.append(inseriscoName);
			
			
				myDivItems.append(myi, myp);
				myDivContainer.append(myDivItems);
			}
		}
	}
)








// console.log(myArrayObject[2].name);
// stampo nella console "dog", ovvero il valore della chiave dell array in posizione[2]


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









