//Variables
var generateBtn
var password = ""
var passwordLength
var upperCase, upperCaseChar 
var lowercase, lowerCaseChar
var special, specialChar
var num, NumChar
var characterArray = ""

lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'

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
  console.clear()
  getPassLength()
  userLower()
  userUpper()
  userNumer()
  userSpec()
}

// Get the password length from the user
function getPassLength (){
    passwordLength = parseInt(prompt("Choose password length between 8-128."))
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
    characterArray += 'abcdefghijklmnopqrstuvwxyz'
  }
}

// Prompt user if they want uppercase letters
function userUpper(){
  upperCase = confirm('Confirm you want uppercase letters.')
  if (upperCase){
    characterArray += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
}

// Prompt user if they want numeric characters
function userNumer(){
  num = confirm('Confirm you want numbers.')
  if (num){
    characterArray += '0123456789'
  }
}
// Prompt user if they want special characters
function userSpec (){
  special = confirm('Confirm you want special characters.')
  if (special){
    characterArray += '~!@#$%^&*<>:'
  }
}

// Generate random password based on user selections
// Write password to the #password input
function writePassword() {
  if(characterArray === ""){
    alert("Please select at least one character type. Try again.")
    generatePass()
  }
    for (var i = 0; i < passwordLength; i++){
      password += characterArray.charAt(Math.ceil(Math.random() * characterArray.length))
    }
    
// adding a loop to verify that the password has all the requested characters
    // var passwordCheck = password.split("")
    // console.log(passwordCheck.length)
    //  if (lowercase) {
    //   passwordCheck.forEach(checkChar);
    //     console.log("Order")
    //   };
    

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
var iter

function checkChar(item, index, arr) {
  for (iter = 0; iter < passwordCheck.length; iter++) {
  }
  arr[index] = item + index
  
}
// function conlog(){
//   console.log(passwordLength)
//   console.log(lowercase);
//   console.log(upperCase);
//   console.log(num);
//   console.log(special);
//   console.log(characterArray)
// }