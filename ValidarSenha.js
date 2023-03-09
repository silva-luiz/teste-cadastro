const confirmPassword = document.getElementById('confirmPassword');
const userNameError = document.getElementById('username-error');
console.log(userNameError);
const password = document.getElementById('password');
password.addEventListener('input', validarSenha);
confirmPassword.addEventListener('input', validarSenha);

const form = document.getElementById("formulario").addEventListener("submit", enviarApi);

function enviarApi() {

  const formData = new FormData(form);

  fetch('http://127.0.0.1:8080/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: formData.get('nome'),
      email: formData.get('email'),
      password: formData.get('password')
    })
  })
    .then(() => {

      alert('Dados enviados com sucesso!');
    })
    .catch(() => {
      alert('Não foi possível enviar os dados para a API');

    });
}


function validarSenha() {



  if (password.value.length < 8 && confirmPassword.value.length < 8) {
    userNameError.textContent = "As senhas devem ter pelo menos 8 dígitos.";
    userNameError.style.display = 'block';
    return false;
  }

  if (password.value.length > 0 && confirmPassword.value.length > 0 && password.value !== confirmPassword.value) {
    userNameError.style.display = 'block';
    userNameError.textContent = "As senhas digitadas não conferem";
    return false;
  } else {
    userNameError.style.display = 'none';

  }

  return true;
}