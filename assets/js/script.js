let preloader = document.querySelector('#preloader');

if (preloader) {
  window.addEventListener('load', () => {
    // Additional 3 seconds delay
    setTimeout(() => {
      preloader.remove();
    }, 3000);
  });
}

// Function to display a message and an image in the center of the page
const showMessageAndImage = (message, imagePath) => {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.textAlign = 'center';
  container.style.zIndex = '1000';
  container.style.padding = '10px';

  container.style.width = '180px'; 
  container.style.height = '140px'; 

  // Add background color to the container
  container.style.backgroundColor = '#31c4fc';

  // Create and append the message element
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageElement.style.textAlign = 'center';
  messageElement.style.fontWeight = '700';
  messageElement.style.color = 'white'; 
  messageElement.style.fontSize = '20px'; 
  container.appendChild(messageElement);

  // Create and append the image element (loading GIF)
  const imageElement = document.createElement('img');
  imageElement.src = imagePath;
  imageElement.alt = 'Loading';
  imageElement.style.margin = '0 auto';
  imageElement.style.width = '40px'; 
  imageElement.style.marginTop = '8px'; 
  container.appendChild(imageElement);

  // Append the container to the body
  document.body.appendChild(container);

  // Remove the container after 10 seconds
  setTimeout(() => {
    document.body.removeChild(container);
  }, 10000);
};

const userCreds = sessionStorage.getItem("user-creds");
const signUpButton = document.querySelector('.sign-up');
const applyButton = document.querySelector('.apply-here');
const fullStack = document.querySelector('.full-stack');
const graphicDesign = document.querySelector('.graphic-design');
const desktopPublish = document.querySelector('.desktop-publish');
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));
let Greet = document.getElementById('greet');
let autoText = document.getElementById('auto-text');

if (userCreds) {
    // User is logged in
    signUpButton.textContent = 'Sign Out';
    signUpButton.addEventListener('click', (event) => {
        // Prevent default form submission
        event.preventDefault();

        // Display signout message and image
        showMessageAndImage("Signing Out...", "/assets/images/loading.gif");

        // Simulate a delay (3 seconds) before signing out
        setTimeout(() => {
        sessionStorage.removeItem("user-creds");
        sessionStorage.removeItem("user-info");
        window.location.href = 'FORM/login25.html';
        }, 10000);

    });

    // Assuming UserInfo is an object with properties userName and fullName
    const { userName, fullName } = UserInfo;
    Greet.innerText = `${userName}!`;
    autoText.innerText = `${fullName}`;
    // Greet.innerText = `Hello ${userName}, ${fullName}!`;

    fullStack.href = '../../QUIZ 3/PAGES/full-stack.html';
    graphicDesign.href = '../../QUIZ 3/PAGES/graphic-design.html'
    desktopPublish.href = '../../QUIZ 3/PAGES/desktop-publish.html'
} else {
    // User is not logged in
    signUpButton.textContent = 'Sign Up';
    signUpButton.href = 'FORM/register25.html';

    // applyButton.href = 'FORM/login25.html';
    // fullStack.href = 'FORM/login25.html';
    // graphicDesign.href = 'FORM/login25.html';
    // desktopPublish.href = 'FORM/login25.html';
}