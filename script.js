// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// User clicks the button to generate password. 
// Listening for the click
// Alert user for Password length and check that it is between 8-128

// Prompt user if they want lowercase letters
// Prompt user if they want uppercase letters
// Prompt user if they want numeric characters
// Prompt user if they want special characters
// Generate random characters and letters based on user responses