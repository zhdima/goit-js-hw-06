
function onFormSubmit(event) {
  
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    alert('Please enter Email and Password');
    return;
  }

  const dataLogin = {
    email: email.value,
    password: password.value,
  };

  console.dir(dataLogin);

  event.currentTarget.reset();
}

function doTask08() {

  const form = document.querySelector('form.login-form');

  if (!form) {
    console.log('Error: invalid markup!');
    return;
  }

  form.addEventListener('submit', onFormSubmit);
}

doTask08();
