// Simple function to generate OTP based on a secret key and current timestamp
function generateOTP() {
  const secretKey = document.getElementById("secret-key").value;
  if (!secretKey) {
    alert("Please enter a secret key.");
    return;
  }

  // For the sake of this example, let's use a simple hash-like operation with timestamp.
  const timestamp = Math.floor(Date.now() / 1000 / 30); // Time-based OTP (30 sec intervals)
  const hash = (secretKey + timestamp).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const otp = hash % 1000000; // Generate a 6-digit OTP
  const formattedOtp = otp.toString().padStart(6, '0');
  
  document.getElementById("otp-display").textContent = `Generated OTP: ${formattedOtp}`;
}

// Function to verify the entered OTP
function verifyOTP() {
  const secretKey = document.getElementById("secret-key").value;
  const userOtp = document.getElementById("otp-input").value;

  if (!secretKey || !userOtp) {
    alert("Please fill in both the secret key and OTP.");
    return;
  }

  const timestamp = Math.floor(Date.now() / 1000 / 30); // Sync with the same interval
  const hash = (secretKey + timestamp).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const correctOtp = hash % 1000000;
  
  if (parseInt(userOtp) === correctOtp) {
    document.getElementById("verification-result").textContent = "OTP Verified Successfully!";
    document.getElementById("verification-result").style.color = "green";
  } else {
    document.getElementById("verification-result").textContent = "Invalid OTP!";
    document.getElementById("verification-result").style.color = "red";
  }
}
