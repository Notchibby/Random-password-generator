// Assignment Code

var generateBtn = document.querySelector("#generate");

var character_type = [];
const capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special_characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "~", "`", "[", "{", "]", "}", "|"];
var random_password = [];


function generatePassword() {
  var password_length = window.prompt("Choose password length: Between 8 and 128 characters.");
  password_length = password_length;

  if (!password_length || password_length < 8 || password_length > 128) {
    return;
  }
  console.log(password_length)

  var upper_case = window.prompt("Do you want your password to contain uppercase letters ?: Y or N")
  upper_case = upper_case.toUpperCase();

  if (upper_case === "Y") {
    for (var i = 0; i < capital.length; i++) {
      character_type.push(capital[i]);
    }
  }
  else { alert("No uppercase letters chosen") };


  var lower_case = window.prompt("Do you want your password to contain lowercase letters: Y or N")
  lower_case = lower_case.toUpperCase();

  if (lower_case === "Y") {
    for (var i = 0; i < lowercase.length; i++) {
      character_type.push(lowercase[i]);
    }
  }
  else { alert("No lowercase letters chosen") };


  var number = window.prompt("Do you want your password to contain numbers: Y or N")
  number = number.toUpperCase();

  if (number === "Y") {
    for (var i = 0; i < numeric.length; i++) {
      character_type.push(numeric[i]);
    }
  }
  else { alert("No numbers chosen") };


  var special_character = window.prompt("Do you want your password to contain special characters: Y or N")
  special_character = special_character.toUpperCase();
  if (special_character === "Y") {
    console.log(special_characters);
    for (var i = 0; i < special_characters.length; i++) {
      character_type.push(special_characters[i]);
    }
    console.log(character_type);
  }
  else { alert("No special characters chosen") };

  for (var i = 0; i < password_length; i++) {
    var index = Math.floor(Math.random() * character_type.length);
    random_password.push(character_type[index]);
  };
  console.log(random_password)


  

};

// Write password to the #password input
function writePassword() {
  //

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; random_password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
