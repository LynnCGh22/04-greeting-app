let userName = "Lynn";
console.log("Welcome to the JavaScript world", userName + "!");

// Get elements
const button = document.getElementById("welcomeBtn");
const message = document.getElementById("message");
const nameInput = document.getElementById("nameInput");
// Add click event
button.addEventListener("click", function() {
  message.textContent = `Welcome, ${userName}!`;
  if (userName === "") {
    message.textContent = "Oops! Please enter your name 😊";
    return;
  }

  message.textContent = `Welcome, ${userName}! 🚀 You're officially part of the Hello Hub crew!`;

   // ✅ Clear the input field
  nameInput.value = "";
});