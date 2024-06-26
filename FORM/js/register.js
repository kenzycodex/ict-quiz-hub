// Import only the necessary functions from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

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
const db = getDatabase(app);

// Handle form submission
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = document.getElementById('nameInput').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const dob = document.getElementById('dob').value;
  const address = document.getElementById('address').value;
  const gender = document.getElementById('gender').value;
  const course = document.querySelector('input[name="course"]:checked').value;
  const level = document.querySelector('input[name="level"]:checked').value;

  // Save data to Firebase Realtime Database
  const registrationsRef = ref(db, 'registrations');
  push(registrationsRef, {
    fullName: fullName,
    email: email,
    phone: phone,
    dob: dob,
    address: address,
    gender: gender,
    course: course,
    level: level
  })
    .then(() => {
      console.log("Registration successful!");
      alert("Registration successful!");
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Error submitting registration. Please try again.");
    });

  // Clear the form
  this.reset();
});

// Get the user info from session storage
let userInfo = JSON.parse(sessionStorage.getItem("user-info"));

// Check if userInfo is not null
if (userInfo) {
  // Get the fullName from userInfo
  let fullName = userInfo.fullName;

  // // Replace the placeholder in the input value
  document.getElementById('nameInput').value = fullName;

  // Display the value
  document.getElementById('displayValue').innerText = `Registered name: ${fullName}`;
}
