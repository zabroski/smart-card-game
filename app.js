const cards = document.querySelectorAll(".memory-card");

let cardIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if(this === firstCard) return;

   this.classList.add("flip")

   if(!cardIsFlipped) {
       //first click -> first card
       cardIsFlipped = true;
       firstCard = this;
       console.log({cardIsFlipped, firstCard})
       return 
   }
     //secon click -> second card  
       cardIsFlipped = false;
       secondCard = this;
       checkForMath(); 
};

function checkForMath () {
    let isMathed = firstCard.dataset.name === secondCard.dataset.name;
    isMathed? disableCards() : unFlipCards();
};

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard()

};

function unFlipCards () {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        lockBoard = false;
    }, 4000)

};


function resetBoard() {
    [cardIsFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
};


//ILFE -> IMMEADITE INVOKE FUNCTION EXPRESS => FUNCTION IS CALLED IMMEDIATELY AFTER ITS DEFINITION

(function shuffle() {
    cards.forEach(function(card) {
        let randomPositions = Math.floor(Math.random() * 12);
        console.log(randomPositions)
        card.style.order = randomPositions;
    });
})();

cards.forEach(function (card) {
    card.addEventListener("click", flipCard);
    
});

