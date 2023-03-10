const gameNameInput = document.getElementById('game-name');
const createGameButton = document.getElementById('create-game-button');

gameNameInput.addEventListener('input', () => {
  if (gameNameInput.value.length < 3) {
    createGameButton.disabled = true;
  } else {
    createGameButton.disabled = false;
  }
});