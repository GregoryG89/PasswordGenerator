// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// 

// Special character array
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric character array
num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// lower alpbetical characters array
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Upcase aphbetical characters array
upP = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"];

var placeHold


                               
       var get = document.querySelector("#generate");

        get.addEventListener("click", function () {
     ps = generatePassword();
      document.getElementById("password").placeholder = ps;
});

                                                                                


        function generatePassword()
        {
 

            
            // User input and make sure they enter a num 8 - 128 or prompts again till they answer
              var howLong = prompt("Choose the length of the Password! 8 - 128")
    for( howLong === false; howLong < 8 || howLong > 128; howLong++)   {
     
         var howLong = prompt("Choose a password >>BETWEEN<< 8 and 128 please")
         console.log(howLong);

         Lcase = confirm("Do you want lower case in Password")
          Ucase = confirm("Do you want upper case in Password?")
          Ncase = confirm("Do you want nums in Password?")
          Scase = confirm("Do you want Special keys in Password?")
         console.log(Ucase, Ncase, Scase);
     



            if (!Scase && !Ncase && !Ucase && !Lcase) {
            placeHold = alert("You must choose a criteria!");
    
        }
        // First if statement that uses user input prompts to determine 
        // Else if for 4 positive options
        else if (Scase && Ncase && Ucase && Lcase) {
    
            placeHold = special.concat(num, lower, UpP);
        }
        // Else if for 3 positive options
        else if (Scase && Ncase && Ucase) {
            placeHold = special.concat(num, UpP);
        }
        else if (Scase && Ncase && Lcase) {
            placeHold = special.concat(num, lower);
        }
        else if (Scase && Lcase && Ucase) {
            placeHold = special.concat(lower, UpP);
        }
        else if (Ncase && Lcase && Ucase) {
            placeHold = num.concat(lower, UpP);
        }
        // Else if for 2 positive options 
        else if (Scase && Ncase) {
            placeHold = special.concat(num);
    
        } else if (Scase && Lcase) {
            placeHold = special.concat(lower);
    
        } else if (Scase && Ucase) {
            placeHold = special.concat(UpP);
        }
        else if (Lcase && Ncase) {
            placeHold = lower.concat(num);
    
        } else if (Lcase && Ucase) {
            placeHold = lower.concat(UpP);
    
        } else if (Ncase && Ucase) {
            placeHold = num.concat(UpP);
        }
   
        else if (Scase) {
            placeHold = special;
        }
        else if (Ncase) {
            placeHold = num;
        }
        else if (Lcase) {
            placeHold = lower;
        }
        // Created space variable to fill uppercase conversion
        else if (Ucase) {
            placeHold = Upp;
        };
    
        var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < howLong; i++) {
        var pickplaceHold = placeHold[Math.floor(Math.random() * placeHold.length)];
        password.push(pickplaceHold);
    }
    
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
        }
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
        