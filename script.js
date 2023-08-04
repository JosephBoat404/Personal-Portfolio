let generatedPassword = "";
const inputElement = document.getElementById("myInput");
const buttonfornext = document.getElementById("buttonfornext");
const buttonforcopy = document.getElementById("buttonforcopy");
const buttonfornewpass = document.getElementById("buttonfornewpass");

function validatorpass() {
  let passsubmitted = document.forms["myForm"]["unlockpage"].value;

  if (passsubmitted === generatedPassword) {
    alert("Password matches");
    return true;
  } else {
    alert("Password does not match");
    return false;
  }
}

function handleNextButtonClick() {
  let element = document.querySelector(".IamJoseph");
  if (element.innerHTML === "I am<br>Joseph") {
    element.innerHTML =
      "A computer science <br> student with passion <br> for cybersecurity and <br/>web development";
    element.style.fontSize = "20px";
  } else {
    element.innerHTML = "I am<br>Joseph";
    element.style.fontSize = "84px";
  }
}

function handleCopyButtonClick() {
  // Get the myInput element
  const myInput = document.getElementById("myInput");

  // Get the innerHTML of the myInput element
  const textToCopy = myInput.innerHTML;

  // Copy the text to the clipboard
  navigator.clipboard.writeText(textToCopy);

  // Alert the copied text
}

function handleNewPassButtonClick() {
  const passwordLength = 14;
  let password = "";
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_-+=[]{}|:;<>,.?/";
  const allCharacters = characters + numbers + specialCharacters;

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allCharacters.length);

    password += allCharacters[randomIndex];
  }
  inputElement.innerHTML = password;
  generatedPassword = password;
  console.log(password);
  console.log(passwordvalidator);
}

buttonfornext.addEventListener("click", handleNextButtonClick);
buttonforcopy.addEventListener("click", handleCopyButtonClick);
buttonfornewpass.addEventListener("click", handleNewPassButtonClick);
