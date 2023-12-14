const formReg = document.querySelector('#sing-up');

if (formReg) {
  formReg.addEventListener('submit', async(event) => {
    event.preventDefault;
    const{name,login,password,passwordCheck} = e.target;
    if(password.value === passwordCheck.value) {
        const res = await fetch()
    }
  })
}
