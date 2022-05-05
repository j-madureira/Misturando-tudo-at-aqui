//Boas vindas
alert(`Bem vindo ao sistema newChobo!`)
var nome;
if(nome = prompt(`Informe seu nome:`)){
    alert(`${nome}, você já pode fazer cadastro!`)
}
else{
    while(nome == ""){
    alert(`Você ainda não informou seu nome!`);
    if(nome = prompt(`Informe seu nome para continuar:`)){
    alert(`${nome}, você já pode fazer cadastro!`);
    break;
    }
    }
}

//Criação de nome e senha para Login Cadastro
function criarNome(){
    if(usuario.nome = prompt(`Crie seu nome de usuário:`)){
    }
    else{
    while(usuario.nome == ""){
    alert(`Você ainda não criou seu nome de usuário!`);
    if(usuario.nome = prompt(`Crie seu nome de usuário para continuar:`)){
    break;
    }
    }
}
}

//Criar senha
function criarSenha(){
    if(usuario.senha = prompt(`Crie sua senha:`)){
    alert(`Você pode fazer Login!`);
    }
    else{
    while(usuario.senha == ""){
    alert(`Você ainda não criou sua senha!`);
    if(usuario.senha = prompt(`Crie sua senha para continuar:`)){
    alert(`você pode fazer Login!`);
    }
    }
    }
}

//Objeto usuario com nome de usuário e senha
var usuario = {
               nome: criarNome,
               senha: criarSenha
}

//Executando as funções
criarNome()
criarSenha()

//Login - nome de usuário
function conferirNome(){
    var nomeLogin = prompt(`Nome de usuário:`);
    if(nomeLogin == usuario.nome){
    }
    else{
    while(nomeLogin != usuario.nome){
    alert(`Nome de usuário incorreto!`);
    nomeLogin = prompt(`Digite seu nome de usuário para continuar:`);
    if(nomeLogin == usuario.nome){
    break;
    }
    }
    }
}

conferirNome();

//Login - senha

function conferirSenha(){
    var senhaLogin = prompt(`Senha:`);
    if(senhaLogin == usuario.senha){
    }
    else{
    while(senhaLogin != usuario.senha){
    alert(`Senha incorreta!`);
    senhaLogin = prompt(`Digite sua senha para continuar:`);
    if(senhaLogin == usuario.senha){
    break;
    }
    }
    }
}
conferirSenha();

//Boas vindas após o Login
alert(`Bem vindo ${nome}`);

//Cardápio
alert(`Cardápio Lanches:\n
                Lanche: Big Bacon\n
                Lanche: King Salad Bacon\n
                Lanche: Big Chease`);

var lanches = ["Big Bacon","King Salad Bacon","Big Chease"];
var pedidoLanche = prompt(`Peça seu lanche:`);
 
var index_lanche = lanches.indexOf(pedidoLanche);
if(index_lanche != -1){
}

else{
    while(index_lanche == -1){
    alert(`Não temos esse lanche aqui!`);
    pedidoLanche = prompt(`Peça algum lanche do cardápio:`);
    index_lanche = lanches.indexOf(pedidoLanche);
    if(index_lanche != -1){
    break;
    }
    }
}

//Cardápio bebida
alert(`Cardápio Bebidas:\n
                Bebida: Coca\n
                Bebida: Kuat\n
                Bebida: Morango Refri`);

var bebidas = ["Coca","Kuat","Morango Refri"];
var pedidoBebida = prompt(`Peça sua bebida:`);

var index_bebida = bebidas.indexOf(pedidoBebida);
if(index_bebida != -1){
}

else{
    while(index_bebida == -1){
    alert(`Não temos essa bebida aqui!`);
    pedidoBebida = prompt(`Peça alguma bebida do cardápio:`);
    index_bebida = bebidas.indexOf(pedidoBebida);
    if(index_bebida != -1){
    break;
    }
    }
}

//informar para o sistema o pedido
document.body.innerHTML = `<p>O cliente ${nome}, pediu um lanche: ${pedidoLanche} e um refrigerante: ${pedidoBebida}</p>`;