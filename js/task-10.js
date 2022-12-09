function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxes = document.querySelector('div#boxes');

let nextDivSize = 30; 

const createBoxes = (amount) => {
  let markup = '';
  
  for (let i = 0; i < amount; i+=1) {
    markup += `<div style="width: ${nextDivSize}px; height: ${nextDivSize}px; background-color: ${getRandomHexColor()}"></div>`;
    nextDivSize += 10;
  }

  divBoxes.insertAdjacentHTML('beforeend', markup);
}

const destroyBoxes = () => {
  divBoxes.innerHTML = '';
  nextDivSize = 30;
}

function doTask10() {

  const btnCreate  = document.querySelector('button[data-create]');
  const btnDestroy = document.querySelector('button[data-destroy]');
  const inpNumber  = document.querySelector('#controls > input');

  if (!divBoxes || !btnCreate || !btnDestroy || !inpNumber) {
    console.log('Error: invalid markup!');
    return;
  }

  btnCreate.addEventListener('click', () => createBoxes(Number(inpNumber.value)));
  
  btnDestroy.addEventListener('click', () => destroyBoxes());
}

doTask10();
