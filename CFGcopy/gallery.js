// // show open close listen for clicks

// function Gallery(gallery) {
//     if (!gallery) {
//         return;
//     }
// //select elements
// //images list

// const images = Array.from(gallery.querySelector('img'));
// const modal = document.querySelector('.modal');
// const prevButton = modal.querySelector('.prev');
// const nextButton = modal.querySelector('.next');
// //keep tracj of current open image
// let currentImage;

// //open modal to user
// function openModal() {
//     console.info('open');
//     //check if open
//     if(modal.matches('open')) {
//         return; //stop function from runnning
//     } modal.classList.add('open');
// }

// //show image
// function showImage(el) {
//  if(!el) {
//     console.info('no image');
//     return;
//  }
// //update modal with info
// console.log(el);
// modal.querySelector('img').src = el.src;
// modal.querySelector('h2').textContent = el.title;
// modal.querySelector('figure p').textContent = el.dataset.description;
// currentImage = el;
// }
// //function to handle click
// function handleImageClick(event) {
//     //pass image tag to show img
//     showImage(event.currentTarget);
// }
// // Event listeners for Previous and Next buttons
// function handlePrevButtonClick() {
//     const index = images.indexOf(currentImage);
//     const prevIndex = (index - 1 + images.length) % images.length;
//     showImage(images[prevIndex]);
// }

// function handleNextButtonClick() {
//     const index = images.indexOf(currentImage);
//     const nextIndex = (index + 1) % images.length;
//     showImage(images[nextIndex]);
// }

// //selct array, loop over each img using handleImageClick function
// images.forEach(image => image.addEventListener('click', handleImageClick));
// prevButton.addEventListener('click', handlePrevButtonClick);
// nextButton.addEventListener('click', handleNextButtonClick);
// }

// //use on page
// const breakfast = Gallery(document.querySelector('.gallery1'));
// const dinner = Gallery(document.querySelector('.gallery2'));
// const dessert = Gallery(document.querySelector('.gallery3'));