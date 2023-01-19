function configuration() {
    let user = [localStorage.getItem("id"), localStorage.getItem("type")]
    if (user[1] == "client") {
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
                    var type_ = ""
                    if (response.document.type != "HTML") {
                        type_ = "file"
                    }else{
                        type_ = "text"
                    }
                    tbody.innerHTML += `
                            <div class="root row">
                                    <div class="row" id="conteudo${index}" data-bs-toggle="collapse" href="#collapseExample${index}" role="button"
                                    aria-expanded="false" aria-controls="collapseExample${index}">
                                    <div style="display:flex;align-items: center;" class="col">${response.document.what}</div>
                                    <div class="col">
                                        <div class="mb-3">
                                        <label for="formFileSm" class="form-label label_text_">${response.document.type}</label>
                                        <input class="form-control" type="${type_}" id="formFileSm">
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