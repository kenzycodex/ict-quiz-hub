// document.addEventListener('DOMContentLoaded', function () {
//     // Show preloader for 3 seconds
//     setTimeout(function () {
//         document.getElementById('preloader').style.display = 'none';
//         // After preloader, show the content
//         document.body.style.overflow = 'visible';
//     }, 3000);
// });

let preloader = document.querySelector('#preloader');

if (preloader) {
  window.addEventListener('load', () => {
    // Additional 3 seconds delay
    setTimeout(() => {
      preloader.remove();
    }, 3000);
  });
}
