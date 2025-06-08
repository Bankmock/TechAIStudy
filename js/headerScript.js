(function () {
  var userAgent = navigator.userAgent.toLowerCase();
  var isTelegram = userAgent.includes("telegram") || userAgent.includes("webview");

  if (isTelegram) {
    var currentURL = window.location.href;

    // Try redirecting using intent:// (Android Chrome)
    setTimeout(function () {
      if (currentURL.startsWith("https://")) {
        var fallback = currentURL;
        var intentURL = currentURL.replace("https://", "intent://") +
          "#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=" +
          encodeURIComponent(fallback) + ";end";

        window.location.href = intentURL;
      }
    }, 2000); // Delay before redirect

    // Create modal overlay
    var overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = 9999;
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";

    // Modal box
    var modal = document.createElement("div");
    modal.style.background = "#fff";
    modal.style.padding = "20px";
    modal.style.borderRadius = "8px";
    modal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    modal.style.maxWidth = "90%";
    modal.style.fontFamily = "sans-serif";
    modal.style.textAlign = "center";

    var msg = document.createElement("p");
    msg.innerHTML = "<strong>⚠️ Telegram is not allowed to download files.</strong><br>Please copy this URL and open it in Chrome or your external browser.";
    msg.style.marginBottom = "10px";

    var urlText = document.createElement("p");
    urlText.textContent = currentURL;
    urlText.style.wordBreak = "break-all";
    urlText.style.padding = "10px";
    urlText.style.background = "#f9f9f9";
    urlText.style.border = "1px solid #ccc";
    urlText.style.marginBottom = "10px";

    var copyBtn = document.createElement("button");
    copyBtn.textContent = "📋 Copy URL";
    copyBtn.style.padding = "10px 15px";
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

    modal.appendChild(msg);
    modal.appendChild(urlText);
    modal.appendChild(copyBtn);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  }
})();