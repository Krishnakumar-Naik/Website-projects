document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace the following lines with your server-side authentication logic
    // For this example, we'll assume the username is "admin" and password is "password"
    if (username === "admin" && password === "password") {
        window.location.href="sporthome.html"
        // You can redirect the user to a dashboard or any other page after successful login
        // Example: window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
);












