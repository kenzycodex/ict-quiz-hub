// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyD7jYj6NTxndCm7iPcPmQ8FzzKuvTKEcT8",
authDomain: "ict-quiz-hub.firebaseapp.com",
projectId: "ict-quiz-hub",
storageBucket: "ict-quiz-hub.appspot.com",
messagingSenderId: "632219145073",
appId: "1:632219145073:web:8f0eb8a0b721152ec39cd0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);
const dref = ref(db);

let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let loginForm = document.getElementById("loginForm");
let successMessage = document.getElementById('successMessage');
let errorMessage = document.getElementById('errorMessage');

let SignInUser = evt => {
    evt.preventDefault();

    signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
        .then((credentials) => {
            loginForm.reset();
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
        
            setTimeout(() => {
                // Save user info and credentials to sessionStorage
                get(child(dref, 'users/' + credentials.user.uid)).then((snapshot) => {
                    if (snapshot.exists) {
                        sessionStorage.setItem("user-info", JSON.stringify({
                            fullName: snapshot.val().fullName,
                            userName: snapshot.val().userName
                        }))
                        sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                        window.location.href = '../index.html';
                    }
                });
            }, 4000);
        })
        .catch((error) => {
            errorMessage.style.display = 'block'; // Display the error message
            successMessage.style.display = 'none'; // Hide the success message

            // You can customize the error message based on the error code or message
            console.error('Firebase Authentication Error:');
            console.error('Error Code:', error.code);
            console.error('Error Message:', error.message);

            setTimeout(() => {
             errorMessage.style.display = 'none';
           }, 4000);
        });
}

loginForm.addEventListener("submit", SignInUser);