  const confirmPassword = document.getElementById('confirmPassword');
  const userNameError = document.getElementById('username-error');
  console.log(userNameError);
  const password = document.getElementById('password');
  password.addEventListener('input', validarSenha);
  confirmPassword.addEventListener('input', validarSenha);  
  
  function validarSenha() {

    console.log(confirmPassword)
  
    if (password.length < 8) {
      userNameError.textContent = "As senhas devem ter pelo menos 8 dígitos.";
      userNameError.style.display = 'block';
      return false;
    }
 
    if (password.value.length > 0 && confirmPassword.value.length > 0 && password.value !== confirmPassword.value) {
      userNameError.style.display = 'block';
      userNameError.textContent = "As senhas digitadas não conferem";
    return false;
  }else{
    userNameError.style.display='none';
    
  }
  console.log(password.value);
    return true;
  }

  