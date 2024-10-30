// Make a div
const newDiv = document.createElement('div');
// add a class of wrapper to it
newDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(newDiv)

// make an unordered list
const myUl = document.createElement('ul');

// add three list items with the words "one, two, three" in them

const myLi1 = document.createElement('li');
li.textContent = 'one';

myUl.appendChild(li)

const myLi2 = document.createElement('li');
li.textContent = 'two';
myUl.appendChild(li)
const myLi3 = document.createElement('li');
li.textContent = 'three';
myUl.appendChild(li)


or 

const ul =`<ul>
    <li>one</li>
    <li>two></li>
    <li>three</li>
</ul>`;

// put that list into the above wrapper
// wrapper.insertAdjacentElelement(myUl);

newDiv.innerHTML = ul;


// create an image
const img = document.createElement('img');

// set the source to an image
img.src = "https://picsum.photos/200";

// set the width to 250
img.width = 250;

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = "cute cat";

// Append that image to the wrapper
// wrapper.appendChild('img');
newDiv.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const divWithP = document.createElement(`
    <div class="divP">
        <p>p1</p>
        <p>p2</p>
    </div>
`);


// put this div before the unordered list from above
// newDiv.firstChild('divWithP');
ul.insertAdjacentElelement('beforebegin', divWithP);

// add a class to the second paragraph called warning
// const p2 = document.querySelector(innerHTML='p2');
const divP = document.querySelector('.divP')
divP.children[1].classList.add('warning')


// remove the first paragraph
// const p1 = document.querySelector(innerHTML='p1');
// p1.remove();
divP.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {

};

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
    return innerHeight.HTML = `
            <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
            <button class="delete" type="button">&times; Delete</button>
            </div>
            `
};

// make a new div with a class of cards
const divCards = document.createElement();
divCards.classList.add('cards')

// make 4 player cards using generatePlayerCard
// const player1 = generatePlayerCard('kaska', 35, 167);
// const player2 = generatePlayerCard('kaska2', 35, 167);
// const player3 = generatePlayerCard('kaska3', 35, 167);
// const player4 = generatePlayerCard('laser', 9, 16);

let cardsHTML = generatePlayerCard('kaska', 35, 168);
cardsHTML = cardsHTML + generatePlayerCard('kaska2', 35, 168);
cardsHTML += generatePlayerCard('kaska3', 35, 168);
cardsHTML += generatePlayerCard('kaska4', 35, 168);

or array and loop 
or 
cards.insertAdjacentElelement('afterbegin', generatePlayerCard('kaska', 35, 168);

// append those cards to the div
cards.innerHTML = cardsHTML;
div.insertAdjacentElelement('beforebegin', cards)

// divCards.appendChild(player1);
// player1.insertAdjacentElelement(player2)

// put the div into the DOM just before the wrapper element


// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// const delButton = document.createElement('deletebutton');
// player1.appendChild('delButton')
create inside html card

// select all the buttons!
// const allButtons = document.querySelectorAll('delButton')
const allButtons = document.querySelectorAll('delete')

// make out delete function
function deleteC(event) {
    const buttonClicked = event.currentTarget;
    buttonClicked.parentElement.remove();
    // or
    // buttonClicked.closest('.cards').remove();
}


// loop over them and attach a listener

const looppedCards = (divCards) => divCards
let cards = [];
cards = [player1, player2, player3]
function loops(cards) {
    let (i=0, i<cards i++) {

    }
}

allButtons.forEach(button => button.addEventListener('click', deleteC));
