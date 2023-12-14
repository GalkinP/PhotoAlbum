const formReg = document.querySelector('#sing-up');

if (formReg) {
  formReg.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, login, password, passwordCheck } = e.target;
    if (password.value === passwordCheck.value) {
      const res = await fetch('/api/auth/registration', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          login: login.value,
          password: password.value,
        }),
      });
      const data = await res.json();
      if (data.message === 'success') {
        window.location.assign('/');
      }
    }
    formReg.reset();
  });
}
