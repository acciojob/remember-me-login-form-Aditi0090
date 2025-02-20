//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingUserButton = document.getElementById("existing");

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    
    if (storedUsername && storedPassword) {
        existingUserButton.style.display = "block";
    } else {
        existingUserButton.style.display = "none";
    }

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;
        const rememberMe = rememberCheckbox.checked;

        if (rememberMe) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert(`Logged in as ${username}`);
        existingUserButton.style.display = rememberMe ? "block" : "none";
    });

    existingUserButton.addEventListener("click", function () {
        if (storedUsername) {
            alert(`Logged in as ${storedUsername}`);
        }
    });
});
