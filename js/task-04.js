let counterValue = 0;

function doTask04() {

  const btnDecrement = document.querySelector('button[data-action="decrement"]');
  const btnIncrement = document.querySelector('button[data-action="increment"]');
  const counterValueEl = document.querySelector('#value');
 
  if (!btnDecrement || !btnIncrement || !counterValueEl) {
    console.log('Error: invalid markup!');
    return;
  }

  btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
  });

  btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
  });
}

doTask04();