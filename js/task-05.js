function doTask05() {

  const inputEl = document.querySelector('input#name-input');
  const outputEl = document.querySelector('span#name-output');
 
  if (!inputEl || !outputEl) {
    console.log('Error: invalid markup!');
    return;
  }

  inputEl.addEventListener('input', (event) =>
    outputEl.textContent = event.currentTarget.value || 'Anonymous');
}

doTask05();
