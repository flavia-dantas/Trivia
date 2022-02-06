var nome = prompt("Digite o seu nome");//valor digitado pelo usuário salvo na variável nome
document.getElementById("nome").innerHTML = "Olá, " + nome + "!";
//comando para modificar a variável identificada como nome no HTML

//prompt é exibido e o que foi escolhido pelo usuário é armazenado na variável questionário
var questionario = prompt("Olá, " + nome + " !" + "\n" + "Deseja iniciar iniciar o teste? " + "\n" + "1. Sim " + "\n" + "2. Não");


if (questionario == 1) {
  //se for igual a 1, continua a execução do programa

  function verificarRespostas() {

    var total = 5;//total de questões
    var pontos = 0;//variável que armazena o número de respostas corretas
    var resumoRespostas = ""; //variável que armazena as questões e suas respostas são corretas ou incorretas

    var formulario = document.forms["formularioQuiz"];
    //obtém os valores do form após a chamada da função verificarRespostas
    var respostas = ["Inglaterra", "Obi-Wan Kenobi", "Hulk", "9", "Expelliarmus"];// variável com o gabarito

    //laço que verifica se todas as questões foram respondidas, soma as respostas corretas e exibe o resumo das respostas
    for (var i = 1; i <= total; i++) {

      if (formulario["pergunta" + i].value === null || formulario["pergunta" + i].value === "") {// verifica se a questão foi respondida, se não foi, alerta o usuário
        alert("Por favor, responda a pergunta " + i);
        return false;//sair da função
      } else {
        if (formulario["pergunta" + i].value === respostas[i - 1]) {//verifica se a resposta está correta e incrementa
          pontos++;
          resumoRespostas += "\n" + " Questão " + i + " - " + formulario["pergunta" + i].value + " - CORRETA";
        } else {
          resumoRespostas += "\n" + " Questão " + i + " - " + formulario["pergunta" + i].value + " - INCORRETA";
        }
      }
    }

    alert("Você acertou " + pontos + " questões" + resumoRespostas);// exibe o resultado e as respostas
    jogarNovamente();//chamada da função jogarNovamente 
    return false;

  }

} else {
  alert("Questionário Encerrado");
  window.close();//fecha a página
}
//função que verifica se o usuário quer continuar jogando
function jogarNovamente() {
  novaJogada = prompt("Jogar novamente? " + "\n" + "1. Sim " + "\n" + "2. Não");
  if (novaJogada == 1) {
    location.reload();//recarrega a página
  } else {
    alert("Questionário Encerrado");
    window.close();//fecha a página
  }

}