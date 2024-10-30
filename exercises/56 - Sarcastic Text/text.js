// 1---------------- grab consts

const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));
/* eslint-disable */
const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
  };
  /* eslint-enable */
// 6----------- paste as need dixtionary  - it's an object eslint that pits on individual line 


const filters = {
    sarcastic: function(letter, index) {
        // console.log(letter, index);  here we cans ee ir logs as number so we can do below based on odd and even
        // ********* moduloTodd St, Glasgow
        // if it is aodd it will return 1 (truthy ) this if statement will trip
        if(index % 2) {
            return letter.toUpperCase();
        }
        // if it is even so 0 it will return zero and we will lowercase it
        return letter.toLowerCase();
    },
    funky: function() {
   //7 ---------------   first check if there is a funky letter for this case
        let funkyLetter = funkyLetters[letter];
        if(funkyLetter) return funkyLetter;

   // if there is not check if lowercase version is there
        funkyLetter = funkyLetter[letter.toLowerCase()]; 
        if(funkyLetter) return funkyLetter;

   // if there is nothing return regular letter
        return letter;




    },
    unable: function(letetr) {
        // need random number 0 1 2 or 1 2 3
        // 1 in 3 chance it will turn into a ... rather than character
        const random = Math.floor(Math.random() * 3);
        if (letter === ' ' && random === 2) {
            return '...';
        }
        return letter;
    },
}

// ********************* modulo to find the remainder after they are all evenly divided
// 10% 2 is 0
// 10% 3 is 1 
// so anytime 1 odd anytime 0 even



// 2-------------- handler for text 

function transformText(text) {
    // 6 ---------------------- filters are hardcoded, it would be goood to use them based on the selection of radio button 
    // grab filter thats checked
    // const filter = document.querySelector('[name="filter"]:checked').value; 
    // const filter = document.querySelector('[name="filter"]:checked')? looks for the thing that is selected and 
    // .value;  at the end goves the value of input

    // alternative 6 is 
    // wrap in array from as its a node list - better as it's alreadt there faster 
    // const filter =  Array.from(filterInputs).fins( input => input.checked); 
    // this changes it into an array each time a person types, so place it onm top instead on consts so once turned on page load
    //as ots unnecessary
    const filter =  filterInputs.fins( input => input.checked); 



    // 4 --------------- take the text and loop over each letter 
    // const mod = Array.from(text).map(filters.sarcastic);

    const mod = Array.from(text).map(filters[filter]);
    // instead of hard coding sarcastic it ill be filter thats selected [] as its prop
   
// 5 --------- loop over sarcastic filter


    // result.textContent = text; // change to modified join on nothing ''
    result.textContent = mod.join('');
}






// 3-------- create filters
// group all filters into an object
// all filters will be functions taken from a map function 



textarea.addEventListener('input', e => transformText(e.target.value));

// trigger filter on click on radio

filterInputs.forEach(input => input.addEventListener('input', () => {
    transformText(textarea.value);
}))
// loop over inputs, each input has an event listener for input e , when input e triggers, we run transform that passes in value of the text

// you can storemethods in an object as well as populate them from an externl input 




