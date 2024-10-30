const item = document.querySelector('.item');



item.innerHTML = `
    <div>
        <h1>Hey</h1>
    </div>
    `;

template out html and put variables where they go and set inner html of element to update
${interpolate}


or we can create own variables and slot them in
const src = `https://picsum.photos/200`;
const desc = 'cute cat';
const myHTML = `
    <div className="wrapper">
        <h2>cute cats</h2>
        <img src="${src}" alt=""/>
    </div>
    `;


    <h2>cute cats</h2>
    becomes
    <h2>Cute ${desc}</h2>


    negative security script tags 
    and also `` is a string so cant do like element classList.add etc

    
it only becomes an element when dumped into the dom by setting innerhtml by
item.innerHTML = myHTML
also can be made into dom by Range

const myFragment = document.createRange();
.createContextualFragment(myHTML);
document.body.appendChild(myFragment)  //or insert adjacent

recap 
create html from string1 dump into html with innerHTML 
or change to dom notes with createContextualFragment and ump into body

