function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function doTask09() {

  const btnColor  = document.querySelector('button.change-color');
  const textColor = document.querySelector('span.color');

  if (!btnColor || !textColor) {
    console.log('Error: invalid markup!');
    return;
  }

  btnColor.addEventListener('click', () => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    textColor.textContent = color;
  });
}

doTask09();
