// function scrollToAccept() {
const terms = document.querySelector('.terms-and-conditions');
if (!terms) {
    return; //if no item on page found
}
terms.addEventListener('scroll', function(event) {
    console.log(event);
});

// }

// scrollToAccept();



// can wrap all code in function (if page specific)

//scroll does not bubble

terms.addEventListener('scroll', function(event) {
//     console.log(event.currentTarget#.scrollTop);
//     console.log(event.currentTarget.scrollHeight);
// });

// old way to figure out where onto on page to scroll






// use div 
const watch = document.querySelector('.watch');
// observer



function obCallback(payload) {
    console.log(payload)
}

const ob = new IntersectionObserver(obCallBack);
//watcher that watches elements, need to tell what elements to watch

ob.observe(watch);
//now assigned to strong tag - fires on page load and when element reached


ob.observe(terms.lastElementChild); //to see last item on screen to know wnd is here
//last paragraph tag to be 100 on screen


const ob = new IntersectionObserver(obCallBack, {
    root: terms, //options object - by default it will be body
    threshold: 1, //all element on pagebu
}
);

//if threshold is lower end elelment ois not fully registerd on page - add anothe elelemnt below 
// too see 100% on page


const button = document.querySelector('.accept')


function obCallBack(payload) {
    if (payload[0].intersectionRation === 1) {
        button.disabled = false;
        console.log('removing disabled');
    // } else {
    //     button.disabled = true;
        //for images - good


    //srop observing
    ob.unobserve(terms.lastElementChild);
    }
    }
}
// buttton disabled is turned to false and css kicks in 
// html stops from being clickable 



