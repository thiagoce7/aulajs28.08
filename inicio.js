function logar() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  
  

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  if (login.match(validRegex)) {
    
    if (login == 'admin@gmail.com' && senha == 'admin'){
      showFlashMessage('Logado com sucesso', '#0b2762', '15px', '#00cc00' );
      

      setTimeout( () => {
          location.href = "home.html";
      }, 2000 );

    }
    else
    {
      showFlashMessage('Erro no login', '#0b2762', '15px','#ff6363');
    }

  } else {
    showFlashMessage('Email invalido', '#0b2762', '15px','#ff6363');
  }
}

function showFlashMessage(message = 'mensagem default', cor = 'black', tamanho = '20px', cor_da_letra = 'white', id_do_flash = 'flash-message') {    
  const flashMessage = document.getElementById(id_do_flash);
  flashMessage.innerHTML = message;
  flashMessage.style.display = "flex";
  flashMessage.style.backgroundColor = cor;
  flashMessage.style.fontSize = tamanho;
  flashMessage.style.color = cor_da_letra;

  setTimeout(() => {
    flashMessage.style.display = "none";
  }, 3000);
}

function smoke(display_text = "flex"){
  const fire = document.getElementById('power');
  fire.style.display = display_text;
}

function senhaEsc(mensage){
  const email = document.getElementById('email').value;    
  showFlashMessage(mensage, '#fff', '12px', '#3085d6', 'sucesso');
}