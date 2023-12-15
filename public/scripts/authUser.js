const formReg = document.querySelector('#sing-up');
const formAuth = document.querySelector('#sign-in');

console.log(formReg);
if (formReg) {
  formReg.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, mail, password, passwordCheck } = event.target;
    console.log(name.value);
    if (password.value === passwordCheck.value) {
      const res = await fetch('/api/auth/registration', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          mail: mail.value,
          password: password.value,
        }),
      });
      const data = await res.json();
      if (data.message === 'success') {
        window.location.assign('/auth/authorization');
      }
    }
    formReg.reset();
  });
}

if (formAuth) {
  formAuth.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { mail, password } = event.target;
    if (mail.value.trim() === '' || password.value.trim() === '') {
      document
        .querySelector('#errorLogin')
        .insertAdjacentHTML('afterend', 'Заполните все поля');
      formAuth.reset();
    }
    const res = await fetch('/api/auth/authorization', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        mail: mail.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      window.location.assign('/albums');
    }
  });
}
