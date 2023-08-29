let generatedPassword = "404";
const inputElement = document.querySelector(".displaygen");
const inputElement1 = document.querySelector(".displaygen1");
const copyButtons = document.querySelectorAll(".buttonforcopy");
const newPassButtons = document.querySelectorAll(".buttonfornewpass");
const element = document.querySelector(".IamJoseph");

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
}

function validatorpass() {
  // Get the submitted password from the form
  let passsubmitted = document.forms["myForm"]["unlockpage"].value;
  passsubmitted = passsubmitted.trim();

  // Check if the submitted password matches the generated password
  if (passsubmitted === generatedPassword && generatedPassword !== undefined && generatedPassword !== null) {
    // If the passwords match, return true to proceed to the next page
    return true;
  } else {
    // If the passwords do not match, show an error toast
    var errorToast = new bootstrap.Toast(document.getElementById('liveToast'));
    errorToast.show();
    
    // Display an error message in the toast body
    var toastBody = document.querySelector('#liveToast .toast-body');
    toastBody.textContent = 'Password incorrect';
    
    // Return false to prevent form submission
    return false;
  }
}

function CopyButtonClick(event) {
  const myInput = document.querySelector(".displaygen");
  const myInput1 = document.querySelector(".displaygen1");
  const textToCopy = myInput.innerHTML.replace(/;/g, "");
  const textToCopy1 = myInput1.innerHTML.replace(/;/g, "");
  navigator.clipboard.writeText(textToCopy1);
}

copyButtons.forEach(function (button) {
  button.addEventListener("click", CopyButtonClick);
});

newPassButtons.forEach(function (button) {
  button.addEventListener("click", NewPassButtonClick);
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

// Function to show the toast on page load
document.addEventListener('DOMContentLoaded', function() {
  var toast = new bootstrap.Toast(document.getElementById('liveToast'));
  toast.show();
});