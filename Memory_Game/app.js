const cardsArray = [

    {
        name: 'fries',
        img: 'images/fries.png'
    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },

    {
        name: 'pizza',
        img: 'images/pizza.png'
    },

    {
        name: 'fries',
        img: 'images/fries.png'
    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },

    {
        name: 'pizza',
        img: 'images/pizza.png'
    },


];


cardsArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('#grid');
const result = document.querySelector('#result');
const popupTab = document.querySelector('.popup');
const popupText = document.querySelector('.popup h2');

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];


function createBroad() {
    cardsArray.forEach((cardEl, i) => {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.append(card)
    })

}
createBroad();

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You have clicked the same image!');
    }


    if (cardsChosen[0] == cardsChosen[1]) {
        showPopUp('You found a match!');
        // alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
       showPopUp('Sorry try again!');
        // alert('Sorry try again!')
    }

    result.textContent = cardsWon.length
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardsArray.length / 2) {
        result.textContent = 'Congrats! You nailed it'
    }

}

function flipCard(e) {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardsArray[cardId].img);
    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function showPopUp(text) {
    popupTab.style.display = 'block';
    popupText.textContent = text;
    setTimeout(() => {
        popupTab.style.display = 'none';
    }, 800);

}

