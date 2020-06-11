//Variables
var generateBtn
var password, passwordText
var passwordLength
var upperCase, upperCaseChar 
var lowercase, lowerCaseChar
var special, specialChar
var num, NumChar
var characterArray = ""

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePass);
generateBtn.addEventListener("click", writePassword);

// User clicks the button to generate password. 
// Listening for the click

// Alert user for Password length and check that it is between 8-128
function generatePass (){
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
// Call random generators based on user responses for the length of the user specified password

// for (var i = 0; i < passwordLength; i++){

  if (upperCase){
   var character = upperCaseSel
  }
  
// }

// Randomly generate uppercase letter
function upperCaseFun(){
  upperCaseSel = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  lowerCaseSel = 'abcdefghijklmnopqrstuvwxyz'
  specialCharSel = '~!@#$%^&*<>:'
  NumCharSel = '0123456789'
  

}
// Randomly generate lowercase letters
function lowerCaseFun(){

}

function conlog(){
  console.log('Conlog')
  console.log(passwordLength)
  console.log(lowercase);
  console.log(upperCase);
  console.log(num);
  console.log(special);
  console.log(characterArray)
}
// function makeid(length) {
//   var result           = '';
//   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for ( var i = 0; i < length; i++ ) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;


// console.log(makeid(5))