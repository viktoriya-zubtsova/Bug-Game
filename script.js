const items = document.querySelectorAll('.main__menu_item');
const button = document.querySelector('.main__button');
const wrapper = document.querySelector('.wrapper');
const gameWrapper = document.querySelector('.game-wrapper');
const game = document.querySelector('.game');
let level = 3;

function getLevel() {
	document.querySelector('.easy').classList.remove('main__menu_item-active');
	document.querySelector('.middle').classList.remove('main__menu_item-active');
	document.querySelector('.hard').classList.remove('main__menu_item-active');
	this.classList.add('main__menu_item-active');
	level = this.getAttribute('value');
	return level;
	}
items.forEach (item => item.addEventListener('click', getLevel));

function createCard() {
		let card = document.createElement('div');
		card.classList.add('game__card');
		card.innerHTML = '<div class="game__card-back"><img src="img/back.svg"></div><div class="game__card-front"><img class="card-front_img"></div>';
		game.appendChild(card)
		}
button.onclick = () => {
  wrapper.classList.add('hidden');
	game.classList.remove('hidden');
	console.log(level);
	for (let i = 0; i < level; i++) {
	createCard()
	}
	// if (level == 10) {
	// 	gameWrapper.classList.add('level-10');
	// } else {
	// 	gameWrapper.classList.add('level-3-6');
	// }
	console.log(document.querySelectorAll('.game__card'));
	};

function flipCard() {
	this.classList.add('active');
	console.log(active);
	}
document.querySelectorAll('.game__card').forEach (item => item.addEventListener('click', this.classList.add('active')));
// document.onclick = () => {
// 	let active = document.querySelector('.active');
// 	if (active !== null) {
// 		game.classList.add('hidden');
// 		wrapper.classList.remove('hidden');
// 		}
// 	};
