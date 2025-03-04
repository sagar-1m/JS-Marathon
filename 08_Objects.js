// OBJECTS in JS represents a real world entity in the form of Key Value Pairs.

// There are mainly 3 ways to create an Object in JS:

// 1. Using Object Literals
let obj1 = {
  name: "Sagar",
  age: 23,
  isMarried: false,
};
console.log(obj1);

// 2. Using Object Constructor
let obj2 = new Object();
obj2.name = "Sagar";
obj2.age = 23;
obj2.isMarried = false;
console.log(obj2);

// 3. Using Object.create() Method
let obj3 = Object.create({
  name: "Sagar",
  age: 23,
  isMarried: false,
});
console.log(obj3);

// There are mainly 3 types of Object Operations in JS:

// 1. Object Length - It is used to find the number of properties in an object in JS.
let obj4 = {
  name: "Sagar",
  age: 23,
  isMarried: false,
};
console.log(Object.keys(obj4).length);

// 2. Object Methods - There are many methods that can be performed on objects in JS.
// 1. Object.keys() - It is used to get the keys of an object in JS.
let obj5 = {
  name: "Sagar",
  age: 23,
  isMarried: false,
};
console.log(Object.keys(obj5));

// 2. Object.values() - It is used to get the values of an object in JS.
let obj6 = {
  name: "Sagar",
  age: 23,
  isMarried: false,
};
console.log(Object.values(obj6));

// 3. Object.entries() - It is used to get the key-value pairs of an object in JS.
let obj7 = {
  name: "Sagar",
  age: 23,
  isMarried: false,
};
console.log(Object.entries(obj7));

// 4. Object.assign() - It is used to copy the properties of one object to another object in JS.
let obj8 = {
  name: "Sagar",
  age: 23,
  isMarried: false,
};
let obj9 = Object.assign({}, obj8);
console.log(obj9);

let chaiRecipe = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Cream Milk",
    water: "Filtered Water",
    sugar: "Sugar",
    spices: ["Cardamom", "Cinnamon", "Cloves", "Ginger"],
  },
  instruction:
    "Boil water, add tea leaves, spices, and sugar, add milk, boil for 2 minutes, strain and serve hot",
};

console.log(chaiRecipe);
console.log(chaiRecipe.ingredients);
console.log(chaiRecipe.ingredients.spices);
console.log(chaiRecipe.ingredients.spices[2]);

let updateChaiRecipe = Object.assign({}, chaiRecipe); // Object.assign() is used to copy the properties of one object to another object in JS.
updateChaiRecipe.ingredients.spices.push("Black Pepper");
console.log(updateChaiRecipe);

let updateChaiRecipe2 = {
  ...chaiRecipe,
  instruction:
    "Boil water, add tea leaves, spices, and sugar, add milk, boil for 2 minutes, strain and serve hot with a pinch of black pepper",
}; // Spread Operator is used to copy the properties of one object to another object in JS.

console.log(updateChaiRecipe2);

// Destructuring in Objects
let { name, ingredients, instruction } = chaiRecipe; // Destructuring is used to extract the properties of an object in JS.
console.log(name);
console.log(ingredients);
console.log(instruction);
