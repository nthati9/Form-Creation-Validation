<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <style>
        #form-feedback {
            display: none;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <form id="registration-form">
        <input type="text" id="username" placeholder="Username" required>
        <input type="email" id="email" placeholder="Email" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit">Register</button>
    </form>
    <div id="form-feedback"></div>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById("registration-form");
            const feedbackDiv = document.getElementById("form-feedback");

            form.addEventListener("submit", function(event) {
                event.preventDefault(); // Prevent form submission

                // Retrieve and trim user inputs
                const username = document.getElementById("username").value.trim();
                const email = document.getElementById("email").value.trim();
                const password = document.getElementById("password").value.trim();

                // Initialize validation variables
                let isValid = true;
                const messages = [];

                // Username validation
                if (username.length < 3) {
                    isValid = false;
                    messages.push("Username must be at least 3 characters long.");
                }

                // Email validation
                if (!email.includes('@') || !email.includes('.')) {
                    isValid = false;
                    messages.push("Email must contain both '@' and '.' characters.");
                }

                // Password validation
                if (password.length < 8) {
                    isValid = false;
                    messages.push("Password must be at least 8 characters long.");
                }

                // Display feedback
                feedbackDiv.style.display = "block"; // Make feedbackDiv visible
                if (isValid) {
                    feedbackDiv.textContent = "Registration successful!";
                    feedbackDiv.style.color = "#28a745"; // Green color for success
                } else {
                    feedbackDiv.innerHTML = messages.join("<br>");
                    feedbackDiv.style.color = "#dc3545"; // Red color for errors
                }
            });
        });
    </script>
</body>
</html>

