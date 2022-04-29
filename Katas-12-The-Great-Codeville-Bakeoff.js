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



    let chooseRecipe = function  (bakeryA, bakeryB, recipes) {
        let Ingredients = bakeryA + bakeryB
        let recipeOptions = ''
        recipes.forEach(recipes => {
            for (let i = 0; i < recipes.ingredients.length; i++) {
                let ingredientOne = recipes.ingredients[i];
                let ingredientTwo = recipes.ingredients[i+1];
                if (Ingredients.includes(ingredientOne) && Ingredients.includes(ingredientTwo)) {
                recipeOptions = recipes.name
            }
        }
        });

        return recipeOptions
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
    let chooseRecipe = function  (bakeryA, bakeryB, recipes) {
        1. We define our function and tell it to take in three parameters:
            bakeryA (an array)
            bakeryB (an array)
            recipes (an object containing two keys, name and ingredients)
        let Ingredients = bakeryA + bakeryB
            2. We are defining a variable that will add the ingredients in the bakeryA array and the bakeryB array together
        let recipeOptions = ''
                3. We define another new variable which will hold the string with the recipe names in our output.
        recipes.forEach(recipes => {
                    4. we are using the .forEach() method to look at the recipes object. The method will look through this object and find each element that fits our code below.
            for (let i = 0; i < recipes.ingredients.length; i++) {
                        5. We create a loop which will look through all of the INGREDIENTS keys from our recipes object. 
                let ingredientOne = recipes.ingredients[i];
                let ingredientTwo = recipes.ingredients[i+1];
                            6. Here, we are telling our code to define two ingredients. The first will be ingredientOne, which will be the first item that our loop finds. ingredientTwo will be the second item the loop finds (hence i+1)
                if (Ingredients.includes(ingredientOne) && Ingredients.includes(ingredientTwo)) {
                recipeOptions = recipes.name
                                7. This part of our code is saying that if the ingredients in bakery A or bakery B match the ingredients listed in the recipe, to report back the name of that recipe. We define the recipes.name as a variable so that we can return it (which we do below)
            }
        }
        });

        return recipeOptions
    }
*/
