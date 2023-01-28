function configuration() {
    let user = [localStorage.getItem("id"), localStorage.getItem("type")]
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

    } else {
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

configuration();


function getUsers() {
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

function getFiles() {
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


    //http://whatsrel.com.br/wp-content/uploads/2019/09/Cia-de-talentos-1080.png

/* 
                conteudo += 
*/








// Obtém os dados de login do formulário
const creatForm = document.getElementById("creatForm");


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
    const rawResponse = await fetch('https://vrjw9i-3000.preview.csb.app/user/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, password: password})
    });
  })();
}

// Adiciona o evento de submit ao formulário
creatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  login(email, password);
  });





