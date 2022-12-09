function doTask01() {

  const ulCategoriesEl = document.querySelector('ul#categories');
  
  if (!ulCategoriesEl) {
    console.log('Error: ul#categories is not found!');
    return;
  }

  const ulCategoriesItems = ulCategoriesEl.querySelectorAll('.item');  
  console.log('Number of categories:', ulCategoriesItems.length);

  for (const liCategoryEl of ulCategoriesItems) {
    console.log('\nCategory:', liCategoryEl.querySelector('h2')?.textContent ?? 'title <h2> is not found');
    console.log('Elements:', liCategoryEl.querySelectorAll('li').length);
  }
}

doTask01();