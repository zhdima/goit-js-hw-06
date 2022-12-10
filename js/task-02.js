const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function doTask02() {

  const ulIngredientsEl = document.querySelector('ul#ingredients');

  if (!ulIngredientsEl) {
    console.log('Error: ul#ingredients is not found!');
    return;
  }

  const elementsArr = ingredients.map(ingradient => {
    const ingradientEl = document.createElement('li');
    ingradientEl.textContent = ingradient;
    ingradientEl.classList.add('item');

    return ingradientEl;
  });
    
  ulIngredientsEl.append(...elementsArr);

  // ulIngredientsEl.append(...ingredients.map(ingradient => {
  //   const ingradientEl = document.createElement('li');
  //   ingradientEl.textContent = ingradient;
  //   ingradientEl.classList.add('item');

  //   return ingradientEl;
  // }));
}

doTask02();
