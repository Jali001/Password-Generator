// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword()
{
  //!!!!THESE ARE THE DEFINING VARIABLES FOR THE PASSWORD!!!!
    //variable for the final criteria and characters
    var criteria = '';

    //variable for the generated password within the function generatePassword
    var pass ="";

    //variable for the length of the password
    var passwordLength;

    //variable to determine if the user wants lowercase characters
    var wantsLowerCase;

    //variable to determine if the user wants uppercase characters
    var wantsUpperCase;

    //variable to determine if the user wants numbers
    var wantsNumbers;

    //variable to determine if the user wants want special characters
    var wantsSpecial;

  //BELOW ARE THE FUNCTIONS AND PROMPTS FOR REQUESTING THE PASSWORD CRITERIA
   //Request user to enter the for the password
      var introPrompt = "Please enter the critiera for the password you wish to create."
      alert (introPrompt);

   //Request user to input password minimum length
    passwordLength = prompt("Please enter a number that is between that is greater than or equal to 8 and less than or equal to 128");
    passwordLength = parseInt(passwordLength);

      while(isNaN(passwordLength) === true || (passwordLength < 8 || passwordLength > 128))
      {
          var wrongInput = "Please enter a valid input";
          alert(wrongInput);
        
        passwordLength = prompt("Please enter a number that is between that is greater than or equal to 8 and less than or equal to 128");
        passwordLength = parseInt(passwordLength);
      
      }

    //Request the user if they want to add lowercase letters 
    wantsLowerCase = prompt("Would you like to add lowercase letters? (Yes/No)");
    wantsLowerCase = wantsLowerCase.toLowerCase();
      //if the user enters anything besides a yes or no (not case sensitive) the user is prompted again
      while(wantsLowerCase != "yes" && wantsLowerCase != "no")
      {
    
        var wrongInput = "Please enter a valid input";
        alert(wrongInput);
        wantsLowerCase = prompt("Would you like to add lowercase letters? (Yes/No)");
        wantsLowerCase = wantsLowerCase.toLowerCase();

      }

  //Request the user if they want to add uppercase letters
   wantsUpperCase = prompt("Would you like to add uppercase letters? (Yes/No)");
   wantsUpperCase = wantsUpperCase.toLowerCase();
     //if the user enters anything besides a yes or no (not case sensitive) the user is prompted again
     while(wantsUpperCase  != "yes" && wantsUpperCase != "no")
     {
   
       var wrongInput = "Please enter a valid input";
       alert(wrongInput);
       wantsUpperCase  = prompt("Would you like to add uppercase letters? (Yes/No)");
       wantsUpperCase = wantsUpperCase.toLowerCase();

     }

  //Request the user if they want numbers
  wantsNumbers = prompt("Would you like to add numbers (Yes/No)");
  wantsNumbers = wantsNumbers.toLowerCase();
    //if the user enters anything besides a yes or no (not case sensitive) the user is prompted again
    while(wantsNumbers != "yes" && wantsNumbers != "no")
    {
  
      var wrongInput = "Please enter a valid input";
      alert(wrongInput);
      wantsNumbers  = prompt("Would you like to add numbers? (Yes/No)");
      wantsNumbers = wantsNumbers.toLowerCase();

    }
  //Request the user of they want special characters
  wantsSpecial = prompt("Would you like to add special characters? (Yes/No)");
  wantsSpecial = wantsSpecial.toLowerCase();
    //if the user enters anything besides a yes or no (not case sensitive) the user is prompted again
    while(wantsSpecial != "yes" && wantsSpecial != "no")
    {
  
      var wrongInput = "Please enter a valid input";
      alert(wrongInput);
      wantsSpecial  = prompt("Would you like to add special characters? (Yes/No)");
      wantsSpecial = wantsSpecial.toLowerCase();

    }
  
  //Code below fills out what the final criteria will be for the password
  if(wantsLowerCase === "yes")
  {
    criteria = criteria +'abcdefghijklmnopqrstuvwxyx';
    console.log("user wanted lowercase letters");
  }

  if(wantsUpperCase === "yes")
  {
    criteria = criteria + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log("User wanted uppercase letters");
  }

  if(wantsNumbers === "yes")
  {
  criteria = criteria + '1234567890';
  console.log("User wanted numbers");
  }

  if(wantsSpecial === "yes")
  {
    criteria = criteria + '!@#$%^&*()_+-=';
    console.log("User wanted special characters");
  }

  console.log("The code may include the following characters: "+ criteria);

  //this loop selects the characters for the password
  var result = '';

  for(var i = 0; i< passwordLength;i++)
  {
    result += criteria.charAt(Math.floor(Math.random()* criteria.length));
    pass = result;
  }


return pass;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




