//Variables
var generateBtn
var password = ""
var passwordLength
var upperCase, upperCaseChar, upperCaseCharArr
var lowercase, lowerCaseChar, lowerCaseCharArr
var special, specialChar, specialCharArr
var num, NumChar, numCharArr
var characterArray = ""

lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
lowerCaseCharArr = lowerCaseChar.split("")

upperCaseChar ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
upperCaseCharArr = upperCaseChar.split("")

specialChar = '0123456789'
specialCharArr = specialChar.split("")

numChar ='~!@#$%^&*<>:'
numCharArr = numChar.split("")

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
    characterArray += lowerCaseChar
  }
}

// Prompt user if they want uppercase letters
function userUpper(){
  upperCase = confirm('Confirm you want uppercase letters.')
  if (upperCase){
    characterArray += upperCaseChar
  }
}

// Prompt user if they want numeric characters
function userNumer(){
  num = confirm('Confirm you want numbers.')
  if (num){
    characterArray += specialChar
  }
}
// Prompt user if they want special characters
function userSpec (){
  special = confirm('Confirm you want special characters.')
  if (special){
    characterArray += numChar
  }
}
// Checking to make sure that 1 of every object is in the password
function findCommonElements3(arr1, arr2) { 
  return arr1.some(item => arr2.includes(item))
  console.log("Find")
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
    console.log(password)
// Using a function to make sure the password has all the requested characters
    var passwordCheck = password.split("")
    
     if (lowercase) {
       if (!findCommonElements3(passwordCheck, lowerCaseCharArr)){
        console.log("lowerCase - False");
        password = ""
        writePassword();
       };
      };
    if(upperCase){
      if (!findCommonElements3(passwordCheck, upperCaseCharArr)){
        console.log("upperCase - False");
        password = ""
        writePassword();
       };
    }
    if(num){
      if (!findCommonElements3(passwordCheck, numCharArr)){
        console.log("num - False");
        password = ""
        writePassword();
       };
    if(special){
      if (!findCommonElements3(passwordCheck, specialCharArr)){
        console.log("special - False");
        password = ""
        writePassword();
       };
    }
    }
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}



// function conlog(){
//   console.log(passwordLength)
//   console.log(lowercase);
//   console.log(upperCase);
//   console.log(num);
//   console.log(special);
//   console.log(characterArray)
// }