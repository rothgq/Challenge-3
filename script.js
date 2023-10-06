// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,63,64,65,66,67,68,69,79,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,125,126,127,128];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","<",">","?","+",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numberArray = ["1","2","3","4","5","6","7","8","9","0",];


function generatePassword() {
  var userPreference = [];
  var passwordChoice = [];
  passwordLength = parseInt(window.prompt("How long would you like your password?"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength >128) {
    alert("Please choose a number between 8 and 128!");
    return passwordLength = parseInt(window.prompt("How long would you like your password?"));
  }
  if (confirm("Do you want lowercase letters?")) {
    userPreference = userPreference.concat(lowerCase);
  }
  if (confirm("Do you want uppercase letters?")) {
    userPreference = userPreference.concat(upperCase);
  }  
  if (confirm("Do you want numbers?")) {
    userPreference = userPreference.concat(numberArray);
  }
  if (confirm("Do you want special characters?")) {
    userPreference = userPreference.concat(specialCharacters);
  }
  for (var i = 0; i < passwordLength; i++) {
    var passwordRandom = Math.floor(Math.random() * userPreference.length);
    var password2 = userPreference[passwordRandom];
    passwordChoice.push(password2);
  }
  return passwordChoice.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
