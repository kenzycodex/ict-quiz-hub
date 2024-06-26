// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7jYj6NTxndCm7iPcPmQ8FzzKuvTKEcT8",
  authDomain: "ict-quiz-hub.firebaseapp.com",
  projectId: "ict-quiz-hub",
  storageBucket: "ict-quiz-hub.appspot.com",
  messagingSenderId: "632219145073",
  appId: "1:632219145073:web:8f0eb8a0b721152ec39cd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const submit = document.getElementById('submit');
const fullNameInput = document.getElementById('full-name');
const userNameInput = document.getElementById('username');
const phoneNumberInput = document.getElementById('number');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const registrationForm = document.getElementById('registerForm');

submit.addEventListener('click', (event) => {
  event.preventDefault();

  const fullName = fullNameInput.value;
  const userName = userNameInput.value;
  const phoneNumber = phoneNumberInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Send email verification
      sendEmailVerification(user)
        .then(() => {
          console.log("Email verification sent!");
        })
        .catch((error) => {
          console.error("Error sending email verification:", error);
        });

      set(ref(database, 'users/' + user.uid), {
        fullName: fullName,
        userName: userName,
        phoneNumber: phoneNumber,
        email: email
      });

      registrationForm.reset();

      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';

      setTimeout(() => {
        window.location.href = 'login25.html';
      }, 4000);
    })
    .catch((error) => {
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';

      console.error('Firebase Authentication Error:');
      console.error('Error Code:', error.code);
      console.error('Error Message:', error.message);

      setTimeout(() => {
        errorMessage.style.display = 'none';
      }, 4000);
    });
});
