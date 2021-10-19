/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(booleano) {
    
    if (booleano == true) {
        return console.log(true)
    }
    else if (booleano == false){
        return console.log(false)
    }
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false, NaN, undefined, '', "", 0, null);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true, 1, {}, [], 25, "true", -45, 54.2, Infinity, -Infinity);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = new Object();

carro.marca = "Chevrolet";
carro.modelo = "Corsa";
carro.placa = "DRT5684";
carro.ano = 2012;
carro.cor = "Azul";
carro.quantasPortas = 4;
carro.assentos = 5;
carro.quantidadePessoas = 0;

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
var mudarCor = function(novaCor) {
    return carro.cor = novaCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var obterCor = function () {
    return console.log("A cor do carro é " + carro.cor);
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo = () => console.log("O modelo do carro é " + carro.modelo);

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var obterMarca = () => console.log("A marca do carro é " + carro.marca);

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
var obterMarcaModelo = () => console.log("Esse carro é um " + carro.marca + " do modelo " + carro.modelo);

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
var adicionarPessoas = (numeroPessoas) => {
    debugger;
    //Se a quantidade de pessoas + o numero de pessoas passada pelo parâmetro tem que ser menor ou igual a 5
    if ((carro.quantidadePessoas + numeroPessoas) <= 5) {       
        carro.quantidadePessoas += numeroPessoas; //A quantidade de pessoas do carro + o numero de pessoas passadas pelo parâmetro é = a quantidade de pessoas no carro
        return console.log("Já temos " + carro.quantidadePessoas + " pessoas no carro!");
    }
    //Se o numero de pessoas + a quantidade de pessoas no carro for maior ou igual a quantidade de assentos no carro ou numero de pessoas passadas pelo parâmetro seja maior que 5
    else if ((numeroPessoas + carro.quantidadePessoas) >= carro.assentos || numeroPessoas > 5){
        var assentosRestantes = carro.assentos - carro.quantidadePessoas; //Os assentos restantes é = a quantidade de assentos no carro - a quantidade de pessoas no carro 
        return console.log("Só cabem mais " + assentosRestantes + " pessoas!");
    }     
    else {
        return console.log("O carro já está lotado!"); //Se o carro estiver lotado será levado para o else
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
obterCor();

// Mude a cor do carro para vermelho.
mudarCor("Vermelho");

// E agora, qual a cor do carro?
obterCor();

// Mude a cor do carro para verde musgo.
mudarCor("Verde musgo");

// E agora, qual a cor do carro?
obterCor();

// Qual a marca e modelo do carro?
obterMarcaModelo();

// Adicione 2 pessoas no carro.
adicionarPessoas(2);

// Adicione mais 4 pessoas no carro.
adicionarPessoas(4);

// Faça o carro encher.
adicionarPessoas(3);

// Tire 4 pessoas do carro.
adicionarPessoas(-4);

// Adicione 10 pessoas no carro.
adicionarPessoas(10);

// Quantas pessoas temos no carro?
console.log("Tem " + carro.quantidadePessoas + " pessoa");
