function separar() {
    var nome = document.getElementById('nome'); //input de nome
    var txt = document.getElementById('txt'); //div do nome formatado
    nome = nome.value.toUpperCase();  //conteudo do input em caixa alta
    var array = nome.split(" "); //transforma em array
    array = array.filter(item => item != "DE" && item != "DA" && item != "DAS" && item != "DO" && item != "DOS" && item != "E") //remove os conectores
    var ultimoNome = array[array.length - 1] //guarda o ultimo nome
    array.pop();  //exclui ultimo nome
    var nomeFormatado = ultimoNome + ","  //insere o ultimo nome no comeco
    for (let i = 0; i < array.length; i++) {
        nomeFormatado += ` ${array[i].substr(0, 1)}.`  //mantem apenas as iniciais, acrecenta o ponto
    }

    txt.innerHTML =nomeFormatado; //exibe o nome formatado

}