// select elements on the page  canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
// context where drawing is happening
const ctx = canvas.getContext('2d');
// shake button
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;
// true constant in caps

// set canvas for drawing


// const width = canvas.width;
// const height = canvas.height;

// console.log(width,height);
// make it shorter - destructuting 
const {width, height } = canvas;


// create random x and y starting points on canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
//make sure it's let as reassigned

//default to get a smooth line instead of squared off by default
ctx.lineJoin = 'round'; 
ctx.lineCap = 'round';
// def line width is 1px 
ctx.lineWidth = 10;

// set up start line point
// ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.lineTo(200, 200);
// ctx.stroke();
//swap statci point to random x and random y
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke(); // start drawing


// write draw function 
// options instead of function(one, twom three, four, five +)
// function draw(options) {
//     console.log(options);
// }
function draw({ key }) {
    console.log(key);
    // to start drawing from x and y
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move x and y values depending on user
    // x -= MOVE_AMOUNT;
    // // x -= 10 shorter
    // y -= MOVE_AMOUNT;
    ctx.lineTo(x, y);
    ctx.stroke();
    // use switch to go up down left right

switch (key) {
    case `ArrowUp`

    break;


}
 


or if

if (key === `ArrowUp`) {

} else if (key === `ArrowDown`) {


} else if (key === `ArrowLeft`) {

}


//handler for keys
// function handleKey() {
//     console.log('handling key');
// }
// to preventy default screen scrolling add
function handleKey(e) {
    
    if (e.key.includes('Arrow')) {
        // console.log(e.key);
        // console.log('handling key');
        e.preventDefault();
        draw({ key: e.key});
}}

// clear shake function



// listen for arrow keys
window.addEventListener('keydown', handleKey);
