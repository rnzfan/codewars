/* my program */
function cakes(recipe, available) {
  const  SetOfIngredients= [];

  for (const ingredient in recipe) {
    if (Object.keys(available).some((i) => i == ingredient)) {
      let SetOfIngredient = 0;
      SetOfIngredient = Math.floor(available[ingredient] / recipe[ingredient]);
      SetOfIngredients.push(SetOfIngredient);
    }
  }

  if (SetOfIngredients.length == Object.keys(recipe).length) {
    return Math.min(...SetOfIngredients);
  } else {
    return 0;
  }
}



/* test */
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1502, sugar: 1200, eggs: 5, milk: 200}));
console.log(cakes({flour: 1000, sugar: 150, milk: 100, oil: 100}, {sugar: 500, oil: 300, flour: 900, milk: 2000}));

/* best option */
function cakes(recipe, available) {
  return Object.keys(recipe).reduce((val, ingredient) => Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val), Infinity);  
}

/* even better */
const cakes = (needs, has) => Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)

