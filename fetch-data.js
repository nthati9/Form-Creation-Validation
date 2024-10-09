<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch User Data</title>
    <style>
        #api-data {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div id="api-data">Loading user data...</div>

    <script>
        // Initialize the Async Function
        async function fetchUserData() {
            // Define the API URL
            const apiUrl = 'https://jsonplaceholder.typicode.com/users';
            // Select the Data Container Element
            const dataContainer = document.getElementById('api-data');

            try {
                // Fetch data using await
                const response = await fetch(apiUrl);
                // Convert the response to JSON
                const users = await response.json();

                // Clear the loading message
                dataContainer.innerHTML = '';

                // Create and append user list
                const userList = document.createElement('ul');
                users.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.textContent = user.name;
                    userList.appendChild(listItem);
                });
                dataContainer.appendChild(userList);
            } catch (error) {
                // Error handling
                dataContainer.innerHTML = '';
                dataContainer.textContent = 'Failed to load user data.';
            }
        }

        // Invoke fetchUserData on DOMContentLoaded
        document.addEventListener('DOMContentLoaded', fetchUserData);
    </script>
</body>
</html>

