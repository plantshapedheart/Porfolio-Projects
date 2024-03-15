

function passwordGenerate(length, lowercase, uppercase, specialCharacters, numbers) {
    const lowerAlph = "abcdefghijklmnopqrstuvwxz";
    const upperAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "01234567890";
    const specialChars = "!@#$%^&*()_+-="

    let allowedCharacters = ""
    let password = "";

    allowedCharacters += lowercase ? lowerAlph : "";
    allowedCharacters += uppercase ? upperAlph : "";
    allowedCharacters += specialCharacters ? specialChars : "";
    allowedCharacters += numbers ? num : "";
    
    if(length <= 0) {
        return `(password must be at least 1 character)`
        
    }
    if(allowedCharacters.length === 0) {
        return `(one character minimum must be selected)`;
    }

    for(let q = 0; q < length; q++) {
        const randomSuggest = Math.floor(Math.random() * allowedCharacters.length);
        password += allowedCharacters[randomSuggest];
    }

    return password;

}

const passLength = 12;
const lowercase = true;
const uppercase = true;
const specialCharacters = true;
const numbers = true;

const password = passwordGenerate(passLength, lowercase, uppercase, specialCharacters, numbers)

console.log(`Generated Password: ${password}`);

// let pass = password();

var x = document.createElement("h3");  
x.textContent = "Generated password: " + password;
document.body.appendChild(x);