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
const cardsChosen = [];
const cardsChosenIds = [];


function createBroad () {
    cardsArray.forEach((cardEl, i) => {    
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.append(card)
    })

}
createBroad();

function checkMatch () {
    const cards = document.querySelectorAll('#grid img');
    
    console.log(cards);

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
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

 