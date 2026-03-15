console.log("Hello World!");

// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = [
  "Pizza",
  "Pasta",
  "Burgers",
  "Tacos",
  "Steak",
  "Croissant"
];

// 2. Loop through the list and print: "One of my favorite foods is ____."
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log("One of my favorite foods is " + favoriteFoods[i] + ".");
}

// 3. Print out the ranking for each food
console.log("My #1 favorite food is " + favoriteFoods[0]);
console.log("My #2 favorite food is " + favoriteFoods[1]);
console.log("My #3 favorite food is " + favoriteFoods[2]);
console.log("My #4 favorite food is " + favoriteFoods[3]);
console.log("My #5 favorite food is " + favoriteFoods[4]);
console.log("My #6 favorite food is " + favoriteFoods[5]);

// 4a. Create a function printFoodRecommendation(foodName)
function printFoodRecommendation(foodName) {
  console.log("Have you ever tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to friends.");
  console.log("Trust me - " + foodName + " is delicious.");
}

// 4b. Call the function at least 3 times
printFoodRecommendation("Pizza");
printFoodRecommendation("Pasta");
printFoodRecommendation("Steak");

// Here's a list of friends' favorite foods
let friendFavorites = [
  "Pizza",
  "Sushi",
  "Pasta",
  "Falafel",
  "Burgers",
  "Ramen",
  "Pad Thai",
  "Curry",
  "Pho",
  "Nachos",
  "Gnocchi",
  "Donuts",
  "Steak",
  "Lasagna",
  "Biryani",
  "Tacos",
  "Croissant"
];

// 5. Print foods that contain the letter "o"
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].includes("o")) {
    console.log(friendFavorites[i]);
  }
}

// 6. Store the result in an array called foodsWithO
let foodsWithO = [];

for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].includes("o")) {
    foodsWithO.push(friendFavorites[i]);
  }
}

console.log("Foods with o:", foodsWithO);

// 7. Create array for foods longer than 6 characters
let longFoodNames = [];

for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length > 6) {
    longFoodNames.push(friendFavorites[i]);
  }
}

// 8. Create array for foods 6 characters or shorter
let shortFoodNames = [];

for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length <= 6) {
    shortFoodNames.push(friendFavorites[i]);
  }
}

// 9. Print both arrays and compare them
console.log("Long food names:", longFoodNames);
console.log("Short food names:", shortFoodNames);

if (longFoodNames.length > shortFoodNames.length) {
  console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
  console.log("There are more short-named foods.");
} else {
  console.log("There are the same number of long-named and short-named foods.");
}

// 10. STRETCH: Find the longest food name
let longestFood = friendFavorites[0];

for (let i = 1; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length > longestFood.length) {
    longestFood = friendFavorites[i];
  }
}

console.log(
  "The longest food name in the list is " +
    longestFood +
    " with " +
    longestFood.length +
    " characters."
);