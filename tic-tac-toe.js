window.addEventListener('DOMContentLoaded', (event) => {
	let currentPlayerSymbol = 'x';

	let squareValues = ['', '', '', '', '', '', '', '', ''];

	let gameBoard = document.querySelector('#tic-tac-toe-board');

	gameBoard.addEventListener('click', (event) => {
		let [firstPart, id] = event.target.id.split('-');
		let boardNumber = Number(id);
        // if board has something, ignore everything below
		if (squareValues[boardNumber] !== '') {
			return;
		}
		// logic later
		let img = document.createElement('img');
		if (currentPlayerSymbol === 'x') {
			img.src =
				'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg';
			currentPlayerSymbol = 'o';
			event.target.appendChild(img);
		} else if (currentPlayerSymbol === 'o') {
			img.src =
				'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg';
			currentPlayerSymbol = 'x';
			event.target.appendChild(img);
		}
		// event.target.appendChild(img);
	});
});
