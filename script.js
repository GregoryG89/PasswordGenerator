// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
 


    var howLong = parseInt(prompt("Choose the length of the Password!"));
            console.log(howLong);
            if (!howLong) {
                alert("This needs a value")} 
                else if (howLong < 8 || howLong > 128) {
                // Validates user input
                // Start user input prompts
                howLong = parseInt(prompt("You must choose between 8 and 128"));}
                                                                                

else {
        var Ucase = confirm("Do you want upper case in Password?")
        var Ncase = confirm("Do you want numbers in Password?")
        var Scase = confirm("Do you want Special keys in Password?")
        console.log(Ucase, Ncase, Scase);
    }
        
        var U = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  ;
        var N = "0123456789"
        var S = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        
        // uppercase - ABCDEFGHIJKLMNOPQRSTUVWXYZ
        //number - 0123456789
        // special characters as a string !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

        function Upper(){
        
        }
        function numeric(){
        
    }
        function Special(){
        }

var Pass = [];
var howLong;



// for(var i =8; i < 127; i++){

//     Pass.push(howLong);
//     }

//     for(var j = 0; j < Pass.length; j++ ){
//         alert(Pass[j]);
// }









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
