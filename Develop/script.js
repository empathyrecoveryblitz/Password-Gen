// Assignment code here

// variables for all possible characters
var specialCharacters ="\"$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var numeric = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// 
function generatePassword() {
  console.log("ello")

  // 1. Prompt the user for password criteria
  //  a. password length 8 - 120
  //  b. lower, upper, number, special

  // 2. Validate input

  // 3. Display password to page

  return "Generated password :)"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
