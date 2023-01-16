function configuration(){
    let user = [localStorage.getItem("id"),localStorage.getItem("type")]
    if (user[1] == "client") {
        (async () => {
            const rawResponse = await fetch('https://vrjw9i-3000.preview.csb.app/user/access', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({id: user[0]})
            });
            const content = await rawResponse.json();
            const tbody = document.getElementById("tbody");
            for (let index = 0; index < content.user.files.length; index++) {
                tbody.innerHTML =     `<div class="root row">
                <div class="row" id="conteudo${index}" data-bs-toggle="collapse" href="#collapseExample${index}" role="button"
                aria-expanded="false" aria-controls="collapseExample${index}">
                <div class="col">${content.user.files[0]}</div>
                <div class="col">
                    <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input class="form-control" type="file" id="formFile">
                    </div>
                </div>
                <div class="col">${content.user.files[0]}</div>
                <div class="col">${content.user.files[0]}</div>
                </div>
                <div class="row collapse" id="collapseExample${index}">
                <div class="card card-body">
                    ${"-"}
                </div>
                </div>
                </div>`
                
            }
    
          })();
    
    } else {
        getUsers();
        getFiles();
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
            console.log(dados)
            }
        };
        ajax.send();
    }
    
    function getFiles(){
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
    
