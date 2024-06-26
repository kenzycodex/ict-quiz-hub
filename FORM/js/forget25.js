// Import the necessary functions from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyD7jYj6NTxndCm7iPcPmQ8FzzKuvTKEcT8",
  authDomain: "ict-quiz-hub.firebaseapp.com",
  projectId: "ict-quiz-hub",
  storageBucket: "ict-quiz-hub.appspot.com",
  messagingSenderId: "632219145073",
  appId: "1:632219145073:web:8f0eb8a0b721152ec39cd0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle form submission
document.getElementById('resetForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    sendPasswordResetEmail(auth, email)
    .then(() => {
        // Password reset email sent successfully
        document.getElementById('resetForm').reset();
        document.getElementById('resetForm').style.display = 'none';
        document.getElementById('resetSent').style.display = 'block';

        // Get the element by id and set the href attribute with the user's email
        const userEmailLink = document.getElementById('userEmailLink');
        userEmailLink.href = 'mailto:' + email;
        userEmailLink.innerText = email; // Optionally, set the text content as well
    })
    .catch((error) => {
        // Handle errors, if any
        console.error('Firebase Authentication Error:');
        console.error('Error Code:', error.code);
        console.error('Error Message:', error.message);
    });

});
