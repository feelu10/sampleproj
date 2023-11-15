 // Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the login form by its ID
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
      // Get references to the input fields
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("psw");

      // Add an event listener for the form submission
      loginForm.addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the user's email and password from the input fields
        const email = emailInput.value;
        const password = passwordInput.value;

        console.log("Login form submitted:", { email, password });

        // Send a POST request to your server with the login data
        try {
          const response = await fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          console.log("Login response:", response);

          if (!response.ok) {
            // Handle login failure
            console.error("Error during login:", response.statusText);
            return;
          }

          // Parse the JSON response
          const data = await response.json();

          console.log("Login data:", data);

          // Check the user's account type and redirect accordingly
          if (data.accountType === "Student") {
            window.location.href = "/StudentHomepage";
          } else if (data.accountType === "Counselor") {
            window.location.href = "/CounselorHomepage";
          } else {
            console.error("Unknown account type:", data.accountType);
          }
        } catch (error) {
          console.error("Error during login:", error);
        }
      });
    }
  });
