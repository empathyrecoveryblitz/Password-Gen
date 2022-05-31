// Assignment code here
function generatePassword() {
  var placeHolder = "";

  var inputLength = window.prompt(
    "Password legnth? Min: 8 Max: 128"
  );
  if (inputLength >= 8 && inputLength <= 128) {
    var includeLowercase = window.confirm(
      "Lowercase characters in your password?"
    );
    console.log(includeLowercase);

    var includeUppercase = window.confirm(
      "Uppercase characters in your password?"
    );
    console.log(includeUppercase);

    var includeNumeric = window.confirm(
      "Numeric characters in your password?"
    );

    var includeSpecial = window.confirm(
      "Special characters in your password?"
    );
    if (includeLowercase || includeUppercase || includeNumeric || includeSpecial) {
      for (i = 0; i < inputLength; i++) {
        if (includeLowercase && placeHolder.length < inputLength) {
          var randomNumber = Math.floor(Math.random() * 26 + 97);
          console.log(randomNumber);
          placeHolder = placeHolder + String.fromCharCode(randomNumber);
        }
  
        if (includeUppercase && placeHolder.length < inputLength) {
          var randomNumber = Math.floor(Math.random() * 26 + 65);
          console.log(randomNumber);
          placeHolder = placeHolder + String.fromCharCode(randomNumber);
        }
  
        if (includeNumeric && placeHolder.length < inputLength) {
          var randomNumber = Math.floor(Math.random() * 10 + 48);
          console.log(randomNumber);
          placeHolder = placeHolder + String.fromCharCode(randomNumber);
        }
  
        if (includeSpecial && placeHolder.length < inputLength) {
          var randomNumber = Math.floor(Math.random() * 14 + 33);
          console.log(randomNumber);
          placeHolder = placeHolder + String.fromCharCode(randomNumber);
        }
      }
      return placeHolder;
    } else {
      window.alert("At least one of the criteria is required.")
      return "Error";
    }

  } else {
    window.alert(
      "Please read carefully."
    );
    return "Error";
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var textArea = document.querySelector("#password");

  textArea.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);