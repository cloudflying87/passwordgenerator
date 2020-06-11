//Variables
var generateBtn
var password = ""
var passwordLength
var upperCase, upperCaseChar 
var lowercase, lowerCaseChar
var special, specialChar
var num, NumChar
var characterArray = ""

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
// generateBtn.addEventListener("click", window.location.reload(true));
generateBtn.addEventListener("click", generatePass);
generateBtn.addEventListener("click", writePassword);

// User clicks the button to generate password. 
// Listening for the click

// Alert user for Password length and check that it is between 8-128
function generatePass (){
  characterArray = "", password = ""
  console.log('Char ' + characterArray)
  getPassLength()
  userLower()
  userUpper()
  userNumer()
  userSpec()
  conlog()
}

// Get the password length from the user
function getPassLength (){
    passwordLength = parseInt(prompt("Choose password lenght between 8-128"))
    if (passwordLength<8){
      getPassLength()
    }
    else if (passwordLength >128){
      getPassLength()
    }
  }

// Prompt user if they want lowercase letters add to the array
function userLower(){
  lowercase = confirm('Confirm you want lowercase letters.')
  if (lowercase){
    characterArray = characterArray + 'abcdefghijklmnopqrstuvwxyz'
  }
}

// Prompt user if they want uppercase letters
function userUpper(){
  upperCase = confirm('Confirm you want uppercase letters.')
  if (upperCase){
    characterArray = characterArray + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
}

// Prompt user if they want numeric characters
function userNumer(){
  num = confirm('Confirm you want numbers.')
  if (num){
    characterArray = characterArray + '0123456789'
  }
}
// Prompt user if they want special characters
function userSpec (){
  special = confirm('Confirm you want special characters.')
  if (special){
    characterArray = characterArray + '~!@#$%^&*<>:'
  }
}

// Generate random password based on user selections
// Write password to the #password input
function writePassword() {
  for (var i = 0; i < passwordLength; i++){
    password += characterArray.charAt(Math.ceil(Math.random() * characterArray.length))
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function conlog(){
  console.log(passwordLength)
  console.log(lowercase);
  console.log(upperCase);
  console.log(num);
  console.log(special);
  console.log(characterArray)
}