function buscaCEP() {
    let cep = document.getElementById('cep').value;
    if (cep != "") {
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        //tratar a resposta da requisição
        req.onload = function() {
            if (req.status === 200) {
                let endereco = JSON.parse(req.response);
                document.getElementById("endereco").value = endereco.street;
                document.getElementById("cidade").value = endereco.city;
                document.getElementById('estado').value = endereco.state;
            } else if (req.status === 404) {
                document.getElementById('cep').value = "CEP inválido.";
            } else {
                alert('Erro ao fazer a requisição.')
            }
        }
    }
}

if (navigator.onLine == true) {
window.onload = function() {
    let idcep = document.getElementById('cep');
    idcep.addEventListener("blur", buscaCEP);
    
    let rua = document.getElementById('endereco');
    rua.setAttribute("readonly", true);
    let cdd = document.getElementById('cidade');
    cdd.setAttribute("readonly", true);
    let est = document.getElementById('estado');
    est.setAttribute("readonly", true);
}
}