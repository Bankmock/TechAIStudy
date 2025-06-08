// Detect Telegram or Telegram Mini App via user-agent
var userAgent = navigator.userAgent.toLowerCase();
var isTelegram = userAgent.includes("telegram") || userAgent.includes("webview");

if (isTelegram) {
  // Show alert
  alert("Telegram is not allowed to download files. Please copy the URL and open it in an external browser.");

  // Create warning box
  var box = document.createElement("div");
  box.style.padding = "15px";
  box.style.background = "#ffe0e0";
  box.style.borderLeft = "5px solid red";
  box.style.marginTop = "20px";

  // Message
  var msg1 = document.createElement("p");
  msg1.innerHTML = "<strong>Telegram is not allowed to download files.</strong>";
  var msg2 = document.createElement("p");
  msg2.textContent = "Please copy the URL and open it in an external browser.";
  var msg3 = document.createElement("p");
  msg3.textContent = window.location.href;
  msg3.style.wordBreak = "break-all";

  // Copy Button
  var btn = document.createElement("button");
  btn.textContent = "📋 Copy URL";
  btn.style.padding = "10px 15px";
  btn.style.fontSize = "16px";
  btn.style.cursor = "pointer";

  // Copy URL functionality
  btn.onclick = function () {
    var tempInput = document.createElement("input");
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("URL copied to clipboard!");
  };

  // Append all
  box.appendChild(msg1);
  box.appendChild(msg2);
  box.appendChild(msg3);
  box.appendChild(btn);
  document.body.appendChild(box);
}