function random(min, max) {
    let uuu = Math.floor( Math.random() * max) + min;
    if (uuu === 1) {
        return 11;
    } else if(uuu >= 11) {
        return 10;
    } else {
        return uuu;
    };
}



let player = {
    name: "tom",
    chips: 8
}
let cards = []
let sum = 0;

let hasBjk = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');



playerEl.textContent = `${player.name} :$${player.chips}`

function startGame() {
    isAlive =  true;
    let firstCard = random(2, 13);
    let secondCard = random(2, 13);
    
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    return renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    };

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack";
        hasBjk = true;
    } else {
        message = "You are no more in the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newGame() {
    if (isAlive === true && hasBjk === false) {
        let card = random(2, 13);

        sum += card;
        cards.push(card);

        renderGame();
    }
}

