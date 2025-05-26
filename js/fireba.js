import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";
  import { get, child } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDA5amfr2yrIYOigtzMhSk6GAWblmBXTbM",
    authDomain: "track-7c3fe.firebaseapp.com",
    databaseURL: "https://track-7c3fe-default-rtdb.firebaseio.com",
    projectId: "track-7c3fe",
    storageBucket: "track-7c3fe.appspot.com",
    messagingSenderId: "747868329046",
    appId: "1:747868329046:web:0b004d95822708c55097f7",
    measurementId: "G-GP7T9RY4JM"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);

  let userIP = "Unknown";

// Count existing users to generate serial number
async function generateUserId() {
  const now = new Date();
  const date = now.toISOString().split("T")[0]; // YYYY-MM-DD
  const time = now.toTimeString().split(" ")[0].replace(/:/g, '-'); // HH-MM-SS

  return `user_${date}_${time}`;
}

  // Get user IP
  fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => userIP = data.ip);

  window.onload = () => {
    const isRegistered = localStorage.getItem("bankmocklogin");
    if (isRegistered === "true") {
    	document.getElementById("registerModal").style.display = "none";
    } else {
      document.getElementById("registerModal").style.display = "flex";
    }
  };
  const time = await generateUserId(); 
  // Declare registerUser globally
  window.registerUser = function () {
    const name = document.getElementById("fullName").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
  alert("Please enter a valid email address.");
  return;
}
    const city = document.getElementById("city").value.trim();
    const password = document.getElementById("password").value.trim();
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    if (!name || !mobile || !email || !city || !password) {
      alert("Please fill all fields.");
      return;
    }

    const userId = "user_" + time;
    const userData = {
      name,
      mobile,
      email,
      city,
      password,
      ip: userIP,
      userAgent,
      platform,
      registeredAt: new Date().toLocaleString()
    };

    set(ref(database, "users/" + userId), userData)
      .then(() => {
        localStorage.setItem("bankmocklogin", "true");
        alert("Registration successful!");
        document.getElementById("registerModal").style.display = "none";
        window.location.href = "dashboard.html";
      })
      .catch(err => alert("Firebase error: " + err.message));
  };