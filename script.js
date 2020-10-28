// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
        var howLong = prompt("Choose the length of the Password!");
            console.log(howLong);
        var Lcase = confirm("Do you want lower case in Password?")
        var Ucase = confirm("Do you want upper case in Password?")
        var Ncase = confirm("Do you want numbers in Password?")
        var Scase = confirm("Do you want Special keys in Password?")
        console.log(Lcase, Ucase, Ncase, Scase)
        
         
        // lowercase -abcdefghijklmnopqrstuvwxyz
        // uppercase - ABCDEFGHIJKLMNOPQRSTUVWXYZ
        //number 0123456789
        // special characters as a string !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

        function Lower(){
        
        
        }
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
