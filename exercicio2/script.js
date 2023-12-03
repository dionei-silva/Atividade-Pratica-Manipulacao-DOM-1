/* 2. Crie uma página que tenha o título "Contador de Cliques". Na
página deve ter 2 botões, um deles deve estar escrito INCREMENTAR
e o outro deve estar escrito ZERAR CONTADOR, logo abaixo dos
botões deve ter um parágrafo contendo a seguinte frase "O
contador está com 0 cliques". */
let clicar = 0;
// captura elemento que sera modificado
let novoParagrafo = document.getElementById("paragrafo");
function incrementar() {
    // incrementa a variavel
    clicar++;

    // modifica conteudo
    paragrafo.innerText = `O contador está com ${clicar} cliques`;
}
function zerar() {
    clicar = 0;
    paragrafo.innerText = `O contador está com ${clicar} cliques`;
}
