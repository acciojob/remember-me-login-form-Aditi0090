document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");

    function updateExistingButton() {
        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");
        existingButton.style.display = (savedUsername && savedPassword) ? "block" : "none";
    }

    updateExistingButton();

    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (checkbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        updateExistingButton();
    });

    existingButton.addEventListener("click", () => {
        const savedUsername = localStorage.getItem("username");
        alert(`Logged in as ${savedUsername}`);
    });
});
