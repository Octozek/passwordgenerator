function generatePassword() {
    var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");

    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Please enter a valid password length between 8 and 128 characters.");
        return;
    }

    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include uppercase letters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
        alert("Please select at least one character type.");
        return;
    }

    // Define characters
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    // Combines characters of whatever the user desires
    var allChars = "";
    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumeric) allChars += numericChars;
    if (includeSpecial) allChars += specialChars;

    // Generates the password using the selected characters sets
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    // Returns the generated password
    return password;
}

// Call the function and store the generated password
var newPassword = generatePassword();

// Display the generated password
alert("Your generated password is: " + newPassword);