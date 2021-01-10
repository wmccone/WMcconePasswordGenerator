// Assignment Code
var generateBtn = document.querySelector("#generate");

// Adding a shuffle function to use at the end for good measure
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Write password to the #password input
function writePassword() {
  
  // I wrote the code before I realized how the precode wanted me to add the code to the html, so I needed to remove generatePassword().
  // var password = generatePassword();
  // function generatePassword(passLen) {

  // Prompt User to select the length of the password between 8 and 128 characters
  var passLen = prompt("Welcome to the password generator, the password will be between 8 and 128 characters. Please choose how long you wish your password to be")

  parseInt(passLen)
  // If the user selects less than 8 prompt them to try again
  if (passLen < 8) {
    alert("You must choose 8 or more characters, try again")
  }
  // If the user selects more than 128 have them try again
  else if (passLen > 128) {
    alert("You must choose 128 or less characters, try again")
  }
  // If the user enters something that is not a number
  else if (isNaN(passLen) === true) {
    alert("Sorry dude, you need to enter a number to select the number of characters you want. Try again")
  }

  else {
    // This will be the finished password Array before we turn it into a string.
    var passwordArray = []

    // Creating an array for the base configuration we will use to select characters
    var passGenArray = []

    // Prompt user to choose whether they want lowercase
    var charLower = confirm("Would you like lowercase letters in your password?")
    if (charLower === true) {
      passLen--
      passGenArray.push("abcdefghijklmnopqrstuvwxyz")
      passwordArray.push(getRandom("abcdefghijklmnopqrstuvwxyz".split("")))
    }

    // Prompt user to choose whether they want uppercase
    var charUpper = confirm("Would you like uppercase letters in your password?")
    if (charUpper === true) {
      passLen--
      passGenArray.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
      passwordArray.push(getRandom("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")))
    }

    // Prompt user to choose if they want numbers
    var charNumber = confirm("Would you like numbers in your password?")
    if (charNumber === true) {
      passLen--
      passGenArray.push("0123456789")
      passwordArray.push(getRandom("0123456789".split("")))
    }

    // Prompt user to choose if they want special characters
    var charSpecial = confirm("Would you like special characters in your password?")
    if (charSpecial === true) {
      passLen--
      passGenArray.push("!@#$%^&*")
      passwordArray.push(getRandom("!@#$%^&*".split("")))
    }

    // Check to make sure that the user has selected some kind of characters to pick from.
    if (charLower === false && charUpper === false && charNumber === false && charSpecial === false) {
      alert("Sorry dude, you will need to select some characters for the password to be created. Try again")
    }

    // In case you need to check the selections, decomment the logs below

    // console.log("The Passoword is " + passLen +" characters long")
    // console.log("Using Uppercase: " + charUpper)
    // console.log("Using Lowecase: " + charLower)
    // console.log("Using Numbers: " + charNumber)
    // console.log("Using Special Characters: " + charSpecial)


    // create a function to get random index of arrays
    function getRandom(arr) {
      var randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }

    // create a loop to generate a password array for the number of characters selected
    for (var i = 0; i < passLen; i++) {

      var charType = getRandom(passGenArray)
      var character = getRandom(charType)

      passwordArray.push(character)
    }
    // Shuffle the final array to get it truly random.
    shuffle(passwordArray)

    // Put the array together to create the final password
    var password = passwordArray.join("")
  }

  // Commented out from the generatepassword function I removed
  // }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
