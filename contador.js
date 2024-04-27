function atualizarContador() {
    let texto = document.getElementById('comentarios').value;
    let cont = texto.length;
    document.getElementById('cont').innerText = cont + '/300'
}