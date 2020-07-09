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

specialChar ='~!@#$%^&*<>:'
specialCharArr = specialChar.split("")

numChar = '0123456789'
numCharArr = numChar.split("")

new SlimSelect({
  select: '#lowerCaseCharacters',
  showSearch: false
})

new SlimSelect({
  select: '#upperCaseCharacters',
  showSearch: false
})

new SlimSelect({
  select: '#specialCharacters',
  showSearch: false
})

new SlimSelect({
  select: '#numbers',
  showSearch: false
})
// Assignment Code
var generateBtn = document.querySelector("#generate");
let checkInput = document.getElementById("passLength");

// Add event listener to generate button
// generateBtn.addEventListener("click", window.location.reload(true));
generateBtn.addEventListener("click", generatePass);
generateBtn.addEventListener("click", writePassword);
checkInput.addEventListener("change", checkPass)

// User clicks the button to generate password. 
// Listening for the click

// Alert user for Password length and check that it is between 8-128
function generatePass (){
  characterArray = "", password = ""
  // console.clear()
  getPassLength()
  userLower()
  userUpper()
  userNumer()
  userSpec()
}

// Get the password length from the user
function checkPass (){
  let passLength = document.getElementById("passLength").value
  if (passLength<8){
    document.getElementById("passLength").value = 8
  }
  else if (passLength >128){
    document.getElementById("passLength").value = 128
  }
}
function getPassLength (){
    passwordLength = parseInt(document.getElementById("passLength").value)
  }

// Prompt user if they want lowercase letters add to the array
function userLower(){
  if (document.getElementById("lowerCaseCharacters").value == 'yes'){
    characterArray += lowerCaseChar
  }
}

// Prompt user if they want uppercase letters
function userUpper(){
  if (document.getElementById("upperCaseCharacters").value == 'yes'){
    characterArray += upperCaseChar
  }
}
// Prompt user if they want special characters
function userSpec (){
  if (document.getElementById("specialCharacters").value == 'yes'){
    characterArray += specialChar
  }
}

// Prompt user if they want numeric characters
function userNumer(){
  if (document.getElementById("numbers").value == 'yes'){
    characterArray += numChar
  }
}

// Checking to make sure that 1 of every object is in the password
function findCommonElements3(arr1, arr2) { 
  return arr1.some(item => arr2.includes(item))
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
    passwordText.select()
    document.execCommand("copy")

}