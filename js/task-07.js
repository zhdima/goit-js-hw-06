function doTask07() {

  const inputEl = document.querySelector('input#font-size-control');
  const textEl = document.querySelector('span#text');

  if (!inputEl || !textEl) {
    console.log('Error: invalid markup!');
    return;
  }

  const setTextFontSize = size => textEl.style.fontSize = size + 'px';

  setTextFontSize(inputEl.value);   // начальное соответствие 

  inputEl.addEventListener('input', (event) => setTextFontSize(event.currentTarget.value));
}

doTask07();
