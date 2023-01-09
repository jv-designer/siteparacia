// rota https://vrjw9i-3000.preview.csb.app/


console.log("raiz")
function getAndShowUsersContent() {
    const userFiles = "";
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "https://vrjw9i-3000.preview.csb.app/user", true);
    ajax.onreadystatechange = () => {
        if (ajax.status == 200) { // && ajax.readyState == 4
        let dados = JSON.parse(ajax.responseText);
        console.log(dados[0], ajax.readyState)
        }
    };
    ajax.send();
   console.log("funcionado")
}

/*
const userFile = `<tr>
<td>${}</td>
<td><input type="file" id="myFile${i}" name="${}"></input></td>
<td>${}</td>
<td>${}</td>
</tr>`
*/

