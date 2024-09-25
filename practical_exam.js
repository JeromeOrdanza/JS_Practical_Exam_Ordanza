// Task 1
let name = "Jerome"; 
let age = 22;
let city = "Manila"; 

let currentYear = new Date().getFullYear();
let yearBorn = currentYear - age;

let isAdult = age >= 18;

let remainder = age % 5;

console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
console.log(`Born in: ${yearBorn}, Is adult: ${isAdult}`);
console.log(`Remainder when dividing age by 5: ${remainder}`);

// Task 2
let sentence = `${name} from ${city}.`;
console.log(sentence);
console.log(sentence.toUpperCase());

console.log(sentence.toLowerCase().includes('a') ? "Sentence contains 'a'" : "Sentence does not contain 'a'");

let jsSentence = "I am learning JavaScript at school.";
console.log(jsSentence.replace(/JavaScript/g, "JS"));

// Task 3 
let favoriteFoods = ["Mango", "Cream Puff", "Letche Flan", "Graham Cake", "Ice Cream Cake"];

favoriteFoods = favoriteFoods.filter(food => food !== "Cream Puff");
favoriteFoods.push("Cream Puff");

favoriteFoods.splice(1, 1); 

favoriteFoods.sort();
console.log("Favorite foods in alphabetical order:");
console.log(favoriteFoods);

function printFoods(arr) {
    console.log("Here are my favorite foods:");
    arr.forEach(food => console.log(food));
}
printFoods(favoriteFoods);
