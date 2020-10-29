// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
 

            // User input and make sure they enter a Num1 8 - 128 or prompts again till they answer
    var howLong = prompt("Choose the length of the Password! 8 - 128")
       for( howLong === false; howLong < 8 || howLong > 128; howLong++)   {
         

       }                         
                                                                                


        var Lcase = confirm("Do you want lower case in Password")
        var Ucase = confirm("Do you want upper case in Password?")
        var Ncase = confirm("Do you want Num1s in Password?")
        var Scase = confirm("Do you want Special keys in Password?")
        console.log(Ucase, Ncase, Scase);
    
            if((Ucase === false) && Ncase === false && Scase === false && Lcase === false){
               alert("Must choose a valid criteria!");} 

            //    else if (Ucase === true && Ncase === true && Scase === true){
            //        var charSet = 
            //    }

               


        

// Special characters array
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters array
num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Lowbetical characters array
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Upcase letters array
upP = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",]

function generate () {
    var password = "";
    for (i = 0; i < 10; i++) {
        var randomLetter = arr[Math.floor(arr.length * Math.random())];
        password += randomLetter;
    }
    document.getElementById("pw").textContent = password;
}

document.querySelector('#button-clicker').addEventListener('click', function (event) {
    event.preventDefault();
    generate();
});



for(var q = 0; q < howLong; q++){
    randomPassword.push(Math.floor(math.ranom) * 10)}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
