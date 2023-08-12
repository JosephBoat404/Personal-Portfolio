let generatedPassword = "404";
const inputElement = document.getElementById("myInput");

const buttonforcopy = document.getElementById("buttonforcopy");
const buttonfornewpass = document.getElementById("buttonfornewpass");

function validatorpass() {
  let passsubmitted = document.forms["myForm"]["unlockpage"].value;
  passsubmitted = passsubmitted.trim();

  if (passsubmitted === generatedPassword) {
    // alert("Password matches");
    return true;
  } else {
    // alert("Password does not match");
    return false;
  }
}

function NextButtonClick() {
  let element = document.querySelector(".IamJoseph");
  if (element.innerHTML.trim() === "I am<br>Joseph".trim()) {
    element.innerHTML =
      "A computer science <br> student with passion <br> for cybersecurity and <br/>web development";
    element.style.fontSize = "20px";
  } else {
    element.innerHTML = "I am<br>Joseph";
    element.style.fontSize = "84px";
  }
  console.log("called");
}
let element = document.querySelector(".IamJoseph");
console.log(element.innerHTML.trim());

function CopyButtonClick() {
  const myInput = document.getElementById("myInput");
  const textToCopy = myInput.innerHTML.replace(/;/g, "");
  navigator.clipboard.writeText(textToCopy);
}

function NewPassButtonClick() {
  const passwordLength = 14;
  let password = "";
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^*()_-+=[]{}|:,.?";
  const allCharacters = characters + numbers + specialCharacters;

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allCharacters.length);

    password += allCharacters[randomIndex];
  }
  inputElement.innerHTML = password;
  generatedPassword = password;
  console.log(password);
}


buttonforcopy.addEventListener("click", CopyButtonClick);
buttonfornewpass.addEventListener("click", NewPassButtonClick);

document.addEventListener("DOMContentLoaded", function () {
  const buttonForCopy = document.getElementById("buttonforcopy");
  const myToast = new bootstrap.Toast(document.getElementById("myToast"));

  buttonForCopy.addEventListener("click", function () {
    myToast.show();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function showInitialMessage() {
    const initialToast = new bootstrap.Toast(
      document.getElementById("initialToast")
    );
    initialToast.show();
  }
  showInitialMessage();

  const buttonForCopy = document.getElementById("buttonforcopy");
  const myToast = new bootstrap.Toast(document.getElementById("myToast"));

  buttonForCopy.addEventListener("click", function () {
    myToast.show();
  });
});
