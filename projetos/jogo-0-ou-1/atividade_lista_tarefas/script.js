// Elementos do DOM
var resultArea = document.getElementById("resultArea");
var resultText = document.getElementById("resultText");
var historyList = document.getElementById("historyList");
var playerScoreEl = document.getElementById("playerScore");
var machineScoreEl = document.getElementById("machineScore");
var playerInput = document.getElementById("playerInput");

// Estado do jogo
var playerScore = 0;
var machineScore = 0;
var round = 0;

// Função que lê o input e chama o jogo
function playFromInput() {
  var valor = playerInput.value.trim();

  if (valor === "") {
    alert("Por favor, digite 0 ou 1!");
    return;
  }

  var playerChoice = Number(valor);

  if (playerChoice !== 0 && playerChoice !== 1) {
    alert("Valor inválido! Digite apenas 0 ou 1.");
    return;
  }

  play(playerChoice);

  // Limpa o campo e foca novamente
  playerInput.value = "";
  playerInput.focus();
}

// Permite jogar pressionando Enter
playerInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    playFromInput();
  }
});

// Função principal do jogo
function play(playerChoice) {
  // Gera a escolha da máquina (0 ou 1)
  var machineChoice = Math.floor(Math.random() * 2);

  // Determina o resultado
  var resultado;
  if (playerChoice === machineChoice) {
    resultado = "draw";
  } else if (playerChoice > machineChoice) {
    resultado = "win";
  } else {
    resultado = "lose";
  }

  round++;

  // Atualiza placar
  if (resultado === "win") {
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else if (resultado === "lose") {
    machineScore++;
    machineScoreEl.textContent = machineScore;
  }

  // Monta a mensagem de resultado
  var mensagem = "";
  if (resultado === "win") {
    mensagem = "Voce ganhou! Voce jogou " + playerChoice + " e a maquina jogou " + machineChoice + ".";
  } else if (resultado === "lose") {
    mensagem = "A maquina ganhou! Voce jogou " + playerChoice + " e a maquina jogou " + machineChoice + ".";
  } else {
    mensagem = "Empate! Ambos jogaram " + playerChoice + ".";
  }

  // Exibe o resultado
  resultArea.className = "result-area " + resultado;
  resultText.textContent = mensagem;

  // Adiciona ao histórico
  addHistory(round, playerChoice, machineChoice, resultado);
}

// Adiciona uma rodada ao histórico
function addHistory(roundNum, playerChoice, machineChoice, resultado) {
  var li = document.createElement("li");
  li.className = resultado;

  var roundSpan = document.createElement("span");
  roundSpan.className = "round-number";
  roundSpan.textContent = "Rodada " + roundNum;

  var detailSpan = document.createElement("span");
  detailSpan.textContent = "Voce: " + playerChoice + " | Maquina: " + machineChoice;

  var resultSpan = document.createElement("span");
  resultSpan.className = "round-result";
  if (resultado === "win") {
    resultSpan.textContent = "Vitoria";
  } else if (resultado === "lose") {
    resultSpan.textContent = "Derrota";
  } else {
    resultSpan.textContent = "Empate";
  }

  li.appendChild(roundSpan);
  li.appendChild(detailSpan);
  li.appendChild(resultSpan);

  // Insere no topo da lista
  historyList.insertBefore(li, historyList.firstChild);
}

// Reinicia o jogo
function resetGame() {
  playerScore = 0;
  machineScore = 0;
  round = 0;

  playerScoreEl.textContent = "0";
  machineScoreEl.textContent = "0";

  resultArea.className = "result-area";
  resultText.textContent = "Digite 0 ou 1 para comecar!";

  historyList.innerHTML = "";
}