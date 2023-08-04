//definir un tableau

let myAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "$",
    "*",
    "/",
    "-",
    "+",
  ];
  const testPlanets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
  let arrayLength = myAlphabet.length;
  console.log(`the length of my array is: ${arrayLength}`);

  
function myAlphabetLength(arr) {
console.log("The length of the array is:" + arr.length);
  }
  myAlphabetLength(myAlphabet); 
  myAlphabetLength(testPlanets); 

  // exercices 2

  const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
  planets.forEach((planet, index) =>
  {console.log(planet, index)});

  for (let i = 0; i < planets.length; i++) {
    console.log(`Index ${i}: ${planets[i]}`);
  }


  //exercices 3
  const someDataTypes = [42, "Hello", true, null];

for (let i = 0; i < someDataTypes.length; i++) {

  console.log(`Index ${i}: ${someDataTypes[i]}, type: ${typeof someDataTypes[i]}`);
}
//exercices 4
const emptyArray = [];

const copyEmptyArray = emptyArray.slice(); 

emptyArray.push(42, 'Hello', true, { name: 'John' });

const copiedArray = [emptyArray];

console.log("Copied Array:",copyEmptyArray );

console.log("Empty Array:", emptyArray);
//exercices 5
let furnitures = ['Table', 'Chairs', 'Couch'];
furnitures.forEach(item =>{
  for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
  }

});

//exercices 6

let values1 = ["Apple", 1, false, "2"];
values1 = values1.filter(item => typeof item === 'number');

let values2 = [`5`, "Fries", 2, true];
values2 = values2.filter(item => typeof item === 'number');

let values3 = ["Mars", "Strawberry", 9];
values3 = values3.filter(item => typeof item === 'number');

console.log("Filtered values1:", values1);
console.log("Filtered values2:", values2);
console.log("Filtered values3:", values3);
// exercices 7

let studentCoursesA = ['Math', 'English', 'Programming'];
let studentCoursesB = ['Geography', 'Spanish', 'Programming'];

studentCoursesA.forEach(course => {
  if (studentCoursesB.includes(course)) {
    console.log(`Common course: ${course}`);
  }
});
//exrcices pour bien comprendre

let seaCreatures = [
	"octopus",
	"squid",
	"shark",
	"seahorse",
	"starfish",
];

console.log(seaCreatures.length);
console.log(seaCreatures.indexOf("seahorse"));

const lastIndex=seaCreatures.length -1;
console.log(seaCreatures[lastIndex]);
console.log(seaCreatures.push("lobster"));
console.log(seaCreatures);


// Create an array of shellfish species
let shellfish = [
	"oyster",
	"shrimp",
	"clam",
	"mussel",
];

// Loop through the length of the array
for (let i = 0; i < shellfish.length; i++) {
  console.log(i, shellfish[i]);
}