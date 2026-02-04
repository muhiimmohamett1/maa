document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const level = document.getElementById("level").value;
  const school = document.getElementById("school").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");

  // Validation
  if (name === "" || level === "" || school === "" || email === "") {
    message.style.color = "red";
    message.textContent = "Please fill all fields";
    return;
  }

  // Success
  message.style.color = "green";
  message.textContent = "Student registered successfully!";
});