document.addEventListener("DOMContentLoaded", function () {
  var userAgent = navigator.userAgent.toLowerCase();
  var isTelegram = userAgent.includes("telegram") || userAgent.includes("webview");

  if (isTelegram) {
    var currentURL = window.location.href;

    // Create overlay
    var overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    overlay.style.zIndex = "9999";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";

    // Create modal box
    var modal = document.createElement("div");
    modal.style.background = "#fff";
    modal.style.padding = "20px";
    modal.style.borderRadius = "10px";
    modal.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    modal.style.fontFamily = "Arial, sans-serif";
    modal.style.maxWidth = "90%";
    modal.style.textAlign = "center";

    // Message
    var msg = document.createElement("p");
    msg.innerHTML = "<strong>🚫 Telegram is not allowed to download files.</strong><br><br>Please open this link in an external browser.";
    msg.style.marginBottom = "15px";

    // URL box
    var urlText = document.createElement("p");
    urlText.textContent = currentURL;
    urlText.style.wordBreak = "break-all";
    urlText.style.padding = "10px";
    urlText.style.background = "#f4f4f4";
    urlText.style.border = "1px solid #ccc";
    urlText.style.marginBottom = "15px";

    // Copy Button
    var copyBtn = document.createElement("button");
    copyBtn.textContent = "📋 Copy URL";
    copyBtn.style.padding = "10px 15px";
    copyBtn.style.marginRight = "10px";
    copyBtn.style.background = "#007bff";
    copyBtn.style.color = "#fff";
    copyBtn.style.border = "none";
    copyBtn.style.borderRadius = "5px";
    copyBtn.style.cursor = "pointer";

    copyBtn.onclick = function () {
      var input = document.createElement("input");
      input.value = currentURL;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      copyBtn.textContent = "✅ Copied!";
      setTimeout(() => {
        copyBtn.textContent = "📋 Copy URL";
      }, 2000);
    };

    // Open in external browser link
    var openBtn = document.createElement("a");
    openBtn.textContent = "🌐 Open in Browser";
    openBtn.href = currentURL;
    openBtn.target = "_blank";
    openBtn.style.display = "inline-block";
    openBtn.style.padding = "10px 15px";
    openBtn.style.background = "#28a745";
    openBtn.style.color = "#fff";
    openBtn.style.textDecoration = "none";
    openBtn.style.borderRadius = "5px";

    modal.appendChild(msg);
    modal.appendChild(urlText);
    modal.appendChild(copyBtn);
    modal.appendChild(openBtn);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  }
});