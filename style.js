function calculaIdade() {
    var idade_da_pessoa = parseInt(prompt("Digite a sua idade: "))

    if (idade_da_pessoa >= 18 && habilitacao == 1) {
        alert("Você já pode dirigir, pois tem idade suficiente")
    } else (
        alert("Você não pode dirigir, pois não tem idade o suficiente")
    )
}

function sucessor() {
    var valor = parseInt(prompt("Digite o valor: "))
    alert("O sucessor de " + valor + " é: " + (valor + 1))
}

function diasDaSemana() {
    let numero = parseInt(prompt("Ingrese un número"));
    switch (numero) {
        case 1:
            alert("Domingo");
            break;
        case 2:
            alert("Segunda");
            break;
        case 3:
            alert("Terça");
            break;
        case 4:
            alert("Quarta");
            break;
        case 5:
            alert("Quinta");
            break;
        case 6:
            alert("Sexta");
            break;
        case 7:
            alert("Sabádo");
            break;
        default:
            alert("Não ha dia correspondente");
            break;
    }
}

function antecessor() {
    var valor = parseInt(prompt("Digite o valor: "));

    alert("O antecessor de " + valor + " é: " + (valor - 1))
}

function alterarFundo() {

    document.getElementsByTagName('body')[0].style.background = "#93E252"
}

function voto() {
    let idade = parseInt(prompt("Digite sua idade: "))
    let mensagem = (idade < 16) ? "Não pode votar" : (idade < 18) ? "Voto opcional" : "O voto é obrigatorio";
    alert(mensagem);
}

function Mes() {
    let mes = parseInt(prompt("Digite um número para saber o mes: "))
    let mensagem = (mes == 1) ? "Janeiro" : (mes == 2) ? "Fevereiro" : (mes == 3) ? "Março" : (mes == 4) ? "Abril" : (mes == 5) ? "Maio" : (mes == 6) ? "Junho" : (mes == 7) ? "Julho" : (mes == 8) ? "Agosto" : (mes == 9) ? "Setembro" : (mes == 10) ? "Outubro" : (mes == 11) ? "Novembro" : "Dezembro";
    alert(mensagem)
}
