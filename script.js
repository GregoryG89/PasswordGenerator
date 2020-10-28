// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var Pass = [];
var howLong;

var howLong = prompt("Choose the length of the password!");

for(var i =8; i < 127; i++){

    Pass.push(howLong);
    }

    for(var j = 0; j < Pass.length; j++ ){
        alert(Pass[j]);
}









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
