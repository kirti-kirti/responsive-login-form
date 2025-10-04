function validateForm() {
  const a = document.getElementById("n1").value.trim();
  const b = document.getElementById("n2").value.trim();
  const c = document.getElementById("n3").value.trim();
  const d = document.getElementById("n4").value.trim();
  const email = document.getElementById("email").value.trim();

  document.querySelectorAll(".error").forEach(e => e.innerText = "");

  // User ID validation
  if (a === "") {
    document.getElementById("error-n1").innerText = "User ID is required";
    return false;
  } else if (!/^[A-Za-z0-9_]{4,15}$/.test(a)) {
    document.getElementById("error-n1").innerText =
      "Use 4–15 letters/numbers/underscores only";
    return false;
  }

  // Contact validation
  if (b === "") {
    document.getElementById("error-n2").innerText = "Contact number is required";
    return false;
  } else if (!/^[6-9]\d{9}$/.test(b)) {
    document.getElementById("error-n2").innerText =
      "Enter a valid 10-digit Indian number";
    return false;
  }

  // Password validation
  if (c === "") {
    document.getElementById("error-n3").innerText = "Password is required";
    return false;
  } else if (c.length < 8) {
    document.getElementById("error-n3").innerText =
      "Password must be at least 8 characters";
    return false;
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      c
    )
  ) {
    document.getElementById("error-n3").innerText =
      "Password must have uppercase, lowercase, number & special char";
    return false;
  }

  // Confirm Password
  if (d === "") {
    document.getElementById("error-n4").innerText = "Please confirm your password";
    return false;
  } else if (c !== d) {
    document.getElementById("error-n4").innerText = "Passwords do not match";
    return false;
  }

  // Email validation
  if (email === "") {
    document.getElementById("error-email").innerText = "Email is required";
    return false;
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  ) {
    document.getElementById("error-email").innerText = "Invalid email format";
    return false;
  }

  // Final confirmation
  return confirm("Are you sure you want to submit the form?");
}

// Password strength indicator
function checkStrength() {
  const c = document.getElementById("n3").value;
  const strength = document.getElementById("strength");

  if (c.length === 0) {
    strength.innerText = "";
  } else if (c.length < 6) {
    strength.innerText = "Weak 🔴";
    strength.style.color = "red";
  } else if (c.length < 10) {
    strength.innerText = "Medium 🟠";
    strength.style.color = "orange";
  } else {
    strength.innerText = "Strong 🟢";
    strength.style.color = "green";
  }
}

// 👁️ Show/Hide Password
function togglePassword(inputId, btnId) {
  const input = document.getElementById(inputId);
  const btn = document.getElementById(btnId);

  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "🙈";
  } else {
    input.type = "password";
    btn.textContent = "👁️";
  }
}
