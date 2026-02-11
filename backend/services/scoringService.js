export const scoreRecipe = (recipe, preference) => {
    let score = 0;
  
    recipe.ingredients.forEach(ingredient => {
      if (ingredient.toLowerCase().includes(preference.toLowerCase())) {
        score += 2;
      }
    });
  
    return score;
  };
      