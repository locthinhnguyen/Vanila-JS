const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const usersList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
  e.preventDefault();
  //   console.log(nameInput.value);

  if (nameInput.value === '' || emailInput.value === '') {
    // alert('please enter fields');
    msg.innerHTML = 'please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    // console.log('success');
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    usersList.append(li);

    nameInput.value = '';
    emailInput.value = '';
  }
}
