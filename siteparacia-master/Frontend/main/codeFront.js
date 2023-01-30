// Obtém os dados de login do formulário
const loginForm = document.getElementById("loginForm");


// Função para verificar se o email é válido
const isValidEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

// Função de login
const login = (email, password) => {
  // Valida o email
  if (!isValidEmail(email)) {
    alert("Por favor, informe um email válido _"+email);
    return;
  }

  // Envia os dados de login para o servidor
  (async () => {
    const rawResponse = await fetch('https://vrjw9i-3000.preview.csb.app/user/authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, password: password})
    });
    const content = await rawResponse.json();
    if (rawResponse.status == 200){
      localStorage.setItem("id", content.document.id);
      localStorage.setItem("type", content.document.type);

      // Redireciona o usuário para aplicação
      window.location = "index.html"; 
    }else{
     alert("Erro no login, por favor verifique email e senha.")
    }
  })();
}

// Adiciona o evento de submit ao formulário
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  login(email, password);
  });





