// function handleJoinNowButtons() {
//     const joinNowButtons = document.querySelectorAll('.join-now-button');
//     const UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

//     joinNowButtons.forEach(button => {
//         button.addEventListener('click', (event) => {
//             // Prevent default behavior (navigation) of the link
//             event.preventDefault();

//             // Check if the user is logged in
//             if (UserInfo) {
//                 // User is logged in, redirect to register form
//                 window.location.href = 'FORM/register.html';
//             } else {
//                 // User is not logged in, redirect to login page
//                 window.location.href = 'FORM/login25.html';
//             }
//         });
//     });
// }

// // Call the function to set up the behavior for "Join Now" buttons
// handleJoinNowButtons();