function clientView(){
let user = [localStorage.getItem("name"),localStorage.getItem("files"),localStorage.getItem("name")]
console.log(user)
}

clientView();


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

/*
`<div class="root row">
<div class="row" id="conteudo${}" data-bs-toggle="collapse" href="#collapseExample${}" role="button"
aria-expanded="false" aria-controls="collapseExample${}">
<div class="col">${}</div>
<div class="col">
    <div class="mb-3">
    <label for="formFile" class="form-label">Default file input example</label>
    <input class="form-control" type="file" id="formFile">
    </div>
</div>
<div class="col">${}</div>
<div class="col">${}</div>
</div>
<div class="row collapse" id="collapseExample${}">
<div class="card card-body">
    ${}
</div>
</div>
</div>`
*/

//http://whatsrel.com.br/wp-content/uploads/2019/09/Cia-de-talentos-1080.png