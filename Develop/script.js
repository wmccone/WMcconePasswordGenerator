// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // function generatePassword(passLen) {
  // Originally wanted to use objects to no avail
  // var charSets = {
  //   letts: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  //   numbs: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  //   special: ["!", "@", "#", "$", "%", "&", "*", "^", "~", "*"],
  // }




  // Prompt User to select the length of the password between 8 and 128 characters
  var passLen = prompt("Welcome to the password generator, the password will be between 8 and 128 characters. Please choose how long you wish your password to be")

  // If the user selects less than 8 prompt them to try again
  if (passLen < 8) {
    alert("You must choose 8 or more characters, try again")
  }
  // If the user selects more than 128 have them try again
  else if (passLen > 128) {
    alert("You must choose 128 or less characters, try again")
  }
  // else create the password with the variable in the loop finishing after x times
  else {

    // Creating an array for the base configuration we will use to select characters
    var passGenArray = []
    // prompt user to choose whether they want lowercase
    var charLower = confirm("Would you like lowercase letters in your password?")
    if (charLower === true) {
      var count = passGenArray.push("abcdefghijklmnopqrstuvwxyz")
    }
    else { }
    // prompt user to choose whether they want uppercase
    var charUpper = confirm("Would you like uppercase letters in your password?")
    if (charUpper === true) {
      var count = passGenArray.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
    else { }
    // prompt user to choose if they want numbers
    var charNumber = confirm("Would you like numbers in your password?")
    if (charNumber === true) {
      var count = passGenArray.push("0123456789")
    }
    else { }
    // prompt user to choose if they want special characters
    var charSpecial = confirm("Would you like special characters in your password?")
    if (charSpecial === true) {
      var count = passGenArray.push("!@#$%^&*")
    }
    else { }

    console.log("The Passoword is " + passLen +" characters long")
    console.log("Using Uppercase: " + charUpper)
    console.log("Using Lowecase: " + charLower)
    console.log("Using Numbers: " + charNumber)
    console.log("Using Special Characters: " + charSpecial)


    // create a function to get random index of arrays
    function getRandom(arr) {
      var randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }

    var passwordArray = []
    // create a loop to generate a password array for the number of characters selected
    parseInt(passLen)
    for (var i = 0; i < passLen ; i++) {

      var charType = getRandom(passGenArray)
      var character = getRandom(charType)

      var final = passwordArray.push(character)
    }
    //put the array together to create the final password
    var password = passwordArray.join("")
  }

  // }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
