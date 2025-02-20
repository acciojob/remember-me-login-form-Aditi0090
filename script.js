document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberMeCheckbox = document.getElementById("checkbox");
  const submitButton = document.getElementById("submit");
  const existingUserButton = document.getElementById("existing");

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingUserButton.style.display = "block";
  }

  submitButton.addEventListener("click", (event) => {
    event.preventDefault(); 

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    alert(`Logged in as ${username}`);

    if (rememberMeCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
  });

  existingUserButton.addEventListener("click", () => {
    alert(`Logged in as ${savedUsername}`);
  });
});
