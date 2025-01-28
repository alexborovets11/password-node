// Select the input, button, and feedback elements
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");
const checkButton = document.querySelector("button");

// Add an event listener for the button click
checkButton.addEventListener("click", () => {
  const password = passwordInput.value;
  let isValid = true;
  const messages = []; // Array to store feedback messages

  messages.push('<span class="invalid">Password is invalid.</span>');

  
  if (password.length < 8) {
    isValid = false; // Mark as invalid if the rule is not met
    messages.push(
      '<span class="invalid">Password must be at least 8 characters long.</span>'
    );
  }

  //  Check for at least one special character
  if (!/[!@#$%^&*]/.test(password)) {
    isValid = false;
    messages.push(
      '<span class="invalid">Password must include at least one special character (!@#$%^&*).</span>'
    );
  }

  //  Check for spaces
  if (/\s/.test(password)) {
    isValid = false;
    messages.push(
      '<span class="invalid">Password must not contain spaces.</span>'
    );
  }

  //  Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    isValid = false;
    messages.push(
      '<span class="invalid">Password must include at least one uppercase letter.</span>'
    );
  }

  //  Check for at least one digit
  if (!/\d/.test(password)) {
    isValid = false;
    messages.push(
      '<span class="invalid">Password must include at least one numeric digit.</span>'
    );
  }

  // Clear previous messages if password is valid
  if (isValid) {
    feedback.innerHTML = '<span class="valid">Password is Valid!</span>';
  } else {
    feedback.innerHTML = messages.join("<br>");
  }
});