const wrapper = document.querySelector('.wrapper');
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
document.querySelectorAll('.main__menu_item').forEach (item => item.addEventListener('click', getLevel));

function createCard() {
	let card = document.createElement('div');
	card.classList.add('game__card');
	card.innerHTML = '<div class="game__card-back"><img class="card_img" src="img/back.png"></div><div class="game__card-front"><img class="card_img card-front_img"></div>';
	game.appendChild(card);
	}

function getFront() {
	let random = Math.random();
	let front = document.querySelectorAll('.card-front_img');
	if (random > 0.7) {
		front.forEach (item => item.src ='img/bag.svg')
	} else {
		front.forEach (item => item.src ='img/front.svg')
		};
	}

function flipCard() {
	this.classList.add('active');
	active = document.querySelector('.active');
	document.querySelectorAll('.game__card').forEach (item => item.addEventListener('click', newGame));
	}

function newGame() {
	 if (active !== null) {
		wrapper.classList.remove('hidden');
		game.classList.add('hidden');
	  while (game.firstChild) {
	    game.removeChild(game.firstChild);
			}
		}
	}

document.querySelector('.main__button').onclick = () => {
  wrapper.classList.add('hidden');
	game.classList.remove('hidden');
	for (let i = 0; i < level; i++) {
	createCard();
	}
	if (level == 10) {
		game.classList.remove('level-3-6');
		game.classList.add('level-10');
	} else {
		game.classList.add('level-3-6');
		game.classList.remove('level-10');
	}
	getFront();
	document.querySelectorAll('.game__card').forEach (item => item.addEventListener('click', flipCard));
	}
