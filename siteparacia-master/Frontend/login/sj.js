function configuration() {
    let user = [localStorage.getItem("id"), localStorage.getItem("type")] // Pega as informações do login
    let main = document.getElementById("mainArea")
    if (user[1] == "client") {
        main.innerHTML = `
        <form id="formFiles" action="">
        <div class="table" style="width: 99%;">
          <div class="thead row">
            <div class="col">Nome</div>
            <div class="col">Arquivos</div>
            <div class="col">Prazo para envio</div>
            <div class="col center_">Concluído</div>
          </div>
          <div id="tbody">
            <!-- arquivos do cliente -->
          </div>
          <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">Enviar</button>
        </div>  
          </div>
      </div>
          </div>
        </div>
      </form>
        `;
        (async () => {
            const rawResponse = await fetch('https://vrjw9i-3000.preview.csb.app/user/access', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: user[0] })
            });
            const content = await rawResponse.json();
            const tbody = document.getElementById("tbody");
            for (let index = 0; index < content.user.files.length; index++) {
                (async () => {
                    const rawResponse = await fetch('https://vrjw9i-3000.preview.csb.app/files/file', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ what: content.user.files[index] })
                    });
                    const response = await rawResponse.json();

                    tbody.innerHTML += `
                            <div class="root row">
                                    <div class="row" id="conteudo${index}" data-bs-toggle="collapse" href="#collapseExample${index}" role="button"
                                    aria-expanded="false" aria-controls="collapseExample${index}">
                                    <div style="display:flex;align-items: center;" class="col">${response.document.what}</div>
                                    <div class="col">
                                        <div class="mb-3">
                                        <label for="formFileSm" class="form-label label_text_">${response.document.type}</label>
                                        <input class="form-control" type="file" id="formFileSm">
                                        </div>
                                    </div>
                                    <div style="display:flex;align-items: center;" class="col">${response.document.deadline}</div>
                                    <div class="col">
                                    <div class="form-check center_">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
                                    <label class="form-check-label" for="flexCheckDisabled">
                                    </label>
                                </div>
                                </div>  
                                <div class="row collapse" id="collapseExample${index}">
                                <div class="card card-body">
                                    ${response.document.obs}
                                </div>
                                </div>
                            </div>`
                })();
            }
        })();

    } else if (user[1] == "menager"){
        main.innerHTML = 
        `
        <div class="table" style="width: 99%; margin-top: 10px;">
        <div class="thead row">
          <div class="col">Nome</div>
          <div class="col">Arquivos</div>
          <div class="col">email</div>
          <div class="col">Status</div>
        </div>
        <div id="tbody">
          <!-- arquivos do cliente -->
        </div>
        <button type="button" id="btn_criar" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal">
        Criar usuário
      </button>
      </div>
        `
        getUsers();
        //getFiles();
    }
    localStorage.clear();
}


configuration(); // Faz a configuração inicial da aplicação


function getUsers() { // Obtem todos os usuários
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "https://vrjw9i-3000.preview.csb.app/user", true);
    ajax.onreadystatechange = () => {
        // && ajax.readyState == 4
        if (ajax.status == 200 && ajax.readyState == 4) {
            let dados = JSON.parse(ajax.responseText);
            const tbody = document.getElementById("tbody");
            for (let index = 0; index < dados.length; index++) {
                tbody.innerHTML += 
                `
                <div class="root row" data-bs-toggle="modal" role="button" data-bs-target="#exampleModal">
                <div class="col">${dados[index].name}</div>
                <div class="col">${"ESTÁGIARIO"}</div>
                <div class="col">${dados[index].email}</div>
                <div class="col ">${dados[index].status}</div>
              </div>
                `
                
            }
            
        }
    };
    ajax.send();
   
}

function getFiles() { // Obtem todos os arquivos
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "https://vrjw9i-3000.preview.csb.app/files", true);
    ajax.onreadystatechange = () => {
        // && ajax.readyState == 4
        if (ajax.status == 200) {
            let dados = JSON.parse(ajax.responseText);
            console.log(dados[0], ajax.readyState)
        }
    };
    ajax.send();
    document.getElementById("tbody")
}


// Obtém os dados do formulário de criação
const creatForm = document.getElementById("creatForm");


// Função para verificar se o email é válido
const isValidEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

// Função de criar
const creat = (email, password, name_, choice_a, choice_b) => {
  var filesGrup = []
  // Valida o email
  if (!isValidEmail(email)) {
    alert("Por favor, informe um email válido _"+email);
    return;
  }

if(choice_a == true){
  filesGrup.push("LOGO DA EMPRESA","FACEBOOK/INSTRAGAM ADS");
}

if(choice_b == true){
  filesGrup.push("FACEBOOK E INSTRAGAM","E-MAIL MARKETING")
}

if(choice_b == false && choice_a == false ){
  return alert("Selecione ao menos uma das alternativas no campo arquivos");
}



  // Envia os dados de criação para o servidor
(async () => {
    const rawResponse = await fetch('https://vrjw9i-3000.preview.csb.app/user/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, password: password, name: name_, username:name_.split(" ")[0], files: filesGrup, type:"client", status:"Envio de documentos"})
    });
  })();
  
}

// Adiciona o evento de submit ao formulário
creatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let name_ = document.getElementById("name").value;
  let choice_a = document.getElementById("treinee").checked;
  let choice_b = document.getElementById("estagio").checked;
  
  creat(email, password, name_, choice_a, choice_b);
  });





/*

// Função para fazer downloand por meio de uma url
fetch('_URL da imagem aqui_')
  .then(resp => resp.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // the filename you want
    a.download = 'todo-1.json';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    alert('your file has downloaded!'); // or you know, something with better UX...
  })
  .catch(() => alert('oh no!'));

  */