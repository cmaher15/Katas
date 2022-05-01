/*The town festival is tomorrow and the organizers have only just realized that they've booked two bakeries to cater desserts, but only have one kitchen available. Instead of just choosing one bakery, let's help them figure out a way to work together.

Both of the bakeries have a specialty, so they each have a stock of specific ingredients.

Lucky for the festival organizers, we've found a recipe book in the town library with TONS of fusion recipes, unfortunately it's thousands of pages long and we don't have much time. Let's write a function that helps determine which recipes match the ingredients that both bakeries have in stock.

Instruction
We need to complete a function called chooseRecipe(), which will receive three parameters: - An array of ingredients in stock at Bakery A - An array of ingredients in stock at Bakery B - An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)

We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.

Our chooseRecipe() function should return the name of the correct recipe.

Note
There will always be a single correct answer, and you will NOT need to consider special cases. For example, you do NOT need to worry about cases where one bakery has BOTH the ingredients for a recipe.

Input
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

Expected Output:
Persian Cheesecake
Nima's Famous Dijon Raisins 

This one is a doozy! We might want to start by creating a helper function called ingredientCheck() that will take in one bakery at a time, along with the recipes.ingredients array to check if the given bakery possesses any of the ingredients from that recipe.

*/
let bakeryStock = function (bakeryStock, ingredient) {
    for (let i = 0; i < bakeryStock.length; i++) {
        if (bakeryStock[i] === ingredient) {
        return true
    }
}
return false
}

let chooseRecipe = function (bakeryA, bakeryB, recipes) {
    for (let i = 0; i < recipes.length; i++) {
        let recipeIngredients = recipes[i].ingredients
        let ingredientOne = recipeIngredients[0]
        let ingredientTwo = recipeIngredients[1]

        if (bakeryStock(bakeryA, ingredientOne) && bakeryStock(bakeryB, ingredientTwo) || (bakeryStock(bakeryA, ingredientTwo) && (bakeryStock(bakeryB, ingredientOne))))
    {return recipes[i].name
} 
}
}




let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

/*ANALYSIS OF THIS CODE:
let bakeryStock = function (bakeryStock, ingredient) {
    for (let i = 0; i < bakeryStock.length; i++) {
        if (bakeryStock[i] === ingredient) {
        return true
    }
}
return false
}
        1. Here, we are setting up our 'helper' function. We are creating a function which will look at the ingredients of each bakery, and if they match the ingredients in the recipe, the function will return true. If none of the ingredients match, false will be returned. We use a loop to iterate through the bakery arrays to look for these ingredients, and we use [i] to call the loop back.

let chooseRecipe = function (bakeryA, bakeryB, recipes) {

        2. Here we define our main function, "Choose Recipe". This function will take in the three required parameters:
            bakeryA (an array)
            bakeryB (an array)
            Recipes (an object)

    for (let i = 0; i < recipes.length; i++) {

        3. Here we create a loop which will iterate through the different recipes.

        let recipeIngredients = recipes[i].ingredients
        let ingredientOne = recipeIngredients[0]
        let ingredientTwo = recipeIngredients[1]

        4. We now create three separate variables. the recipe ingredients, which will be found with our loop. ingredientOne, which will be the FIRST matching ingredient the loop finds in bakeryA or bakeryB that matches the recipe ingredients. And ingredientTwo, which will be the SECOND matching ingredient. These are defined using [0] and [1] respectively, representing the array positions. 

        if (bakeryStock(bakeryA, ingredientOne) && bakeryStock(bakeryB, ingredientTwo) || (bakeryStock(bakeryA, ingredientTwo) && (bakeryStock(bakeryB, ingredientOne))))
        
        5. Here, we are telling our code what to do. If the stock from bakeryA matches the ingredientOne and the stock from bakeryB matches ingredientTwo, OR VICE VERSA, the names of the eligible recipes will be returned. 


    {return recipes[i].name
} 
}
}

*/