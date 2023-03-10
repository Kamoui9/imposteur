const usernameInput = document.getElementById('username');
const createGameButton = document.getElementById('create-game-button');
const joinGameButton = document.getElementById('join-game-button');

// Récupère l'URL actuelle
const url = new URL(window.location.href);

// Vérifie si l'argument 'token' est présent et non nul dans l'URL
const token = url.searchParams.get('token');
const hasToken = (token !== null && token !== '');


usernameInput.addEventListener('input', () => {
  if (usernameInput.value.length < 3) {
    createGameButton.disabled = true;
    joinGameButton.disabled = true;

  } else {
    createGameButton.disabled = false;
    joinGameButton.disabled = !hasToken;
  }
});