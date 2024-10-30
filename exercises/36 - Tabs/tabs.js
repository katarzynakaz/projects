// console.log('ya ya wes we get it.. IT WORKS!');


const tabs = document.querySelector('.tabs');
// loook inside tabs for role buttons
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// here because many elelements with the same function and to get specific one

// const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
//turn into array
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

// tablist container
// tab panel content

function handleTabClick(event) {
    // 1 console.log(event.currentTarget);
// hide all tab panels - hide all and unhide later
    tabPanels.forEach(function(panel){
    // console.log(panel);
        panel.hidden = true;
})

// make into arrow
// tabPanels.forEach(panel => {
    // panel.hidden = true;


// 2 mark all tabs as unselected
// tabButtons.forEach (tab => {
//     tab.ariaSelected = false;
//     // to get to propeprty with - inside it use camel ariaSelected
// })
// $0 does not access some properties on elemenr - aria and custom
// need to use .setAttribute instead
tabButtons.forEach(tab => {
    // tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false;
})




// 3 mark this tab as selected 
event.currentTarget.setAttribute('aria-selected', true);
// better to use accesibility atribute over class 


//4 find associated tab panel and show it
// grab id
const { id } = event.currentTarget.id;
// handy to pull of other properties too
console.log(id);
//find associated tab panel 
// use id in selector

// method 1
const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
tabPanel.hidden = false;

})}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

// method 2
// find in the array loop over panels
tabPanels.find(panel => {
    if(panel.getAttribute('aria-labelledby') === 'id') {
        return true;
    }
});
// find only on arrays

// to turn into an array
// const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));




