// Declarar uma variável qualquer, que receba um objeto vazio.
var Computador = new Object();

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = new Object();

pessoa.nome = "Samuel";
pessoa.sobrenome = "Oliveira";
pessoa.sexo = "Masculino";
pessoa.idade = 17;
pessoa.altura = 1.74;
pessoa.peso = 80;
pessoa.andando = false;
pessoa.caminhouQuantosMetros = 0;
/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
function fazerAniversario() {
    pessoa.idade++;
    return pessoa.idade
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
function andar(metrosCaminhados) {
    pessoa.andando = true;
    pessoa.caminhouQuantosMetros = pessoa.caminhouQuantosMetros + metrosCaminhados;
    return metrosCaminhados;  
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
function parar() {
    return pessoa.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
function nomeCompleto() {
    return "Olá! Meu nome é " + pessoa.nome + " " + pessoa.sobrenome + "!";
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
function mostrarIdade() {
    return "Olá, eu tenho " + pessoa.idade + " anos!";
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
function mostrarPeso() {
    return "Eu peso " + pessoa.peso + " Kg."
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
function mostrarAltura() {
    return "Minha altura é " + pessoa.altura + "m.\n"
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(nomeCompleto()); //Olá! Meu nome é Samuel Oliveira!

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(mostrarIdade()); //Olá, eu tenho 17 anos!

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(mostrarPeso()); //Eu peso 80 Kg.

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(mostrarAltura()); //Minha altura é 1.74m.

/*
Faça a `pessoa` fazer 3 aniversários.
*/
for (var rep = pessoa.idade + 3; pessoa.idade < rep;pessoa.idade + 1) {
    console.log("Fiz " + fazerAniversario() + " anos");
}
    
/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log("A pessoa tem " + pessoa.idade + " anos\n"); //A pessoa tem 20 anos

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
console.log("A pessoa caminhou " + andar(15) + " metros");

console.log("A pessoa caminhou " + andar(20) + " metros");

console.log("A pessoa caminhou " + andar(30) + " metros\n");

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

if (pessoa.andando == true) {
    console.log("A pessoa está andando!" + '(' + pessoa.andando + ')'); //A pessoa está andando!(true)
}
else {
    console.log("A pessoa está parada!" + '(' + pessoa.andando + ')');
}

/*
Se a pessoa ainda está andando, faça-a parar.
*/
parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

if (pessoa.andando == true) {
    console.log("A pessoa está andando!" + '(' + pessoa.andando + ')'); 
}
else {
    console.log("A pessoa está parada!" + '(' + pessoa.andando + ')\n'); //A pessoa está parada!(false)
}

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log("A pessoa andou " + (pessoa.caminhouQuantosMetros) + " metros\n"); //A pessoa andou 65 metros


/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
pessoa.apresentacao = function(){
   if (pessoa.sexo === 'Feminino') {
       var  generoArtigo = 'a';
   }
   else if (pessoa.sexo === 'Masculino') {
       generoArtigo = 'o';
   }
   if (pessoa.idade === 1) {
       var idadeVal = 'ano'  
   }
   else if (pessoa.idade > 1) {
       idadeVal = 'anos'
   }
   if (pessoa.caminhouQuantosMetros === 1) {
       var metrosVal = 'metro'
   }
   else if (pessoa.caminhouQuantosMetros > 1) {
       metrosVal = 'metros'
   }

    return "Olá, eu sou " + generoArtigo + ' ' + pessoa.nome +", tenho " + pessoa.idade + ' ' + idadeVal + "," + pessoa.altura + ", meu peso é " + pessoa.peso + " kg e, só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros + ' ' + metrosVal +"!";
}

// Agora, apresente-se ;)
console.log(pessoa.apresentacao());
