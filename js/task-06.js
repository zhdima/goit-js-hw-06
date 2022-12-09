function onInputBlur(event) {
  const inputEl = event.currentTarget;

  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove('invalid');  
    inputEl.classList.add('valid');  
  } else {
    inputEl.classList.remove('valid');  
    inputEl.classList.add('invalid');  
  }
}

function doTask06() {

  const inputEl = document.querySelector('input#validation-input');
 
  if (!inputEl) {
    console.log('Error: invalid markup!');
    return;
  }

  inputEl.addEventListener('blur', onInputBlur);
}

doTask06();
