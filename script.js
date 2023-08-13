let generatedPassword = "404";
const inputElement = document.querySelector(".displaygen");
const inputElement1 = document.querySelector(".displaygen1");
const copyButtons = document.querySelectorAll(".buttonforcopy");
const newPassButtons = document.querySelectorAll(".buttonfornewpass");

function validatorpass() {
  let passsubmitted = document.forms["myForm"]["unlockpage"].value;
  passsubmitted = passsubmitted.trim();

  if (passsubmitted === generatedPassword) {
    return true;
  } else {
    return false;
  }
}


let element = document.querySelector(".IamJoseph");
console.log(element.innerHTML.trim());

function CopyButtonClick(event) {
  const myInput = document.querySelector(".displaygen");
  const myInput1 = document.querySelector(".displaygen1");
  const textToCopy = myInput.innerHTML.replace(/;/g, "");
  const textToCopy1 = myInput1.innerHTML.replace(/;/g, "");
  navigator.clipboard.writeText(textToCopy1);
}



function NewPassButtonClick(event) {
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
  inputElement1.innerHTML = password;

  generatedPassword = password;
  console.log(password);
}

copyButtons.forEach(function (button) {
  button.addEventListener("click", CopyButtonClick);
});

newPassButtons.forEach(function (button) {
  button.addEventListener("click", NewPassButtonClick);
});

document.addEventListener("DOMContentLoaded", function () {
  function showInitialMessage() {
    const initialToast = new bootstrap.Toast(
      document.getElementById("initialToast")
    );
    initialToast.show();
  }
  showInitialMessage();

  const myToast = new bootstrap.Toast(document.getElementById("myToast"));
});

document.addEventListener('DOMContentLoaded', function () {
  var copyButtons = document.querySelectorAll('.buttonforcopy');
  copyButtons.forEach(function (copyButton) {
    var tooltip = new bootstrap.Tooltip(copyButton, {
      trigger: 'manual',
      title: 'Copied!',
      placement: 'top'
    });

    copyButton.addEventListener('click', function () {
      tooltip.show();
      setTimeout(function () {
        tooltip.hide();
      }, 2000);
    });
  });
});
