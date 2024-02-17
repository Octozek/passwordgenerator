function generatePassword() {
    var passwordlength = prompt("Enter the length of the password (between 8 and 128 characters):");

    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Please enter a valid password length between 8 and 128 characters.");
        return;
}

  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");


