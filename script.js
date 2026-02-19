let userName = "Lynn";
console.log("Welcome to the JavaScript world", userName + "!");

// Get elements
const button = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

// Add click event
button.addEventListener("click", function() {
  message.textContent = `Welcome, ${userName}!`;
});