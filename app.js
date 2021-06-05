import get from './get.js';

const adminiD = [ 'Rock', 'Paper', 'Scissor' ];

//* selectors
const play = get('.play');
const playerpic = get('.playerPic');
const adminpic = get('.adminPic');
const rock = get('.rock');
const paper = get('.paper');
const sci = get('.sci');
const btnContainer = get('.btn-container');
const title = get('.title');

//* end of selectors

let random = Math.floor(Math.random() * adminiD.length);

//* Functions
const main = () => {
	btnContainer.classList.remove('hide');
	play.classList.add('hide');
	playerpic.classList.add('animation');
	adminpic.classList.add('animation');
	buttonGame();
};

play.addEventListener('click', () => {
	main();
});

//! functionaity to check

const checkRock = () => {
	if (random === 0) {
		adminpic.innerHTML = `<img src="assest/rock.png" />`;
		title.textContent = `Its a Tie`;
	} else if (random === 1) {
		adminpic.innerHTML = `<img src="assest/paper.png" />`;
		title.textContent = `Admin Wins`;
	} else if (random === 2) {
		adminpic.innerHTML = `<img src="assest/scissors.png" />`;
		title.textContent = `Player Wins`;
	}
};

const checkPaper = () => {
	if (random === 0) {
		adminpic.innerHTML = `<img src="assest/rock.png" />`;
		title.textContent = `Player Wins`;
	} else if (random === 1) {
		adminpic.innerHTML = `<img src="assest/paper.png" />`;
		title.textContent = `Its a Tie`;
	} else if (random === 2) {
		adminpic.innerHTML = `<img src="assest/scissors.png" />`;
		title.textContent = `Admin Wins`;
	}
};
const checkSci = () => {
	if (random === 0) {
		adminpic.innerHTML = `<img src="assest/rock.png" />`;
		title.textContent = `Admin Wins`;
	} else if (random === 1) {
		adminpic.innerHTML = `<img src="assest/paper.png" />`;
		title.textContent = `Player Wins`;
	} else if (random === 2) {
		adminpic.innerHTML = `<img src="assest/scissors.png" />`;
		title.textContent = `Its a Tie `;
	}
};
//* ---------------End of Function----------//

const removeAnimation = () => {
	playerpic.classList.remove('animation');
	adminpic.classList.remove('animation');
};

const hide = () => {
	return btnContainer.classList.add('hide');
};
//! playing buttons
const buttonGame = () => {
	rock.addEventListener('click', () => {
		removeAnimation();
		playerpic.innerHTML = ` <img src="assest/rock p1.png" alt="playerrock" />`;
		checkRock();
		hide();
	});
	paper.addEventListener('click', () => {
		removeAnimation();
		playerpic.innerHTML = ` <img src="assest/paper p1.png" alt="playerpaper" />`;
		checkPaper();
		hide();
	});
	sci.addEventListener('click', () => {
		removeAnimation();
		playerpic.innerHTML = `<img src="assest/scissor p1.png" alt="playerscissor"/>`;
		checkSci();
		hide();
	});
};
