document.addEventListener("DOMContentLoaded", function () {
  var userAgent = navigator.userAgent.toLowerCase();
  var isTelegram = userAgent.includes("telegram") || userAgent.includes("webview");

 
    var currentURL = "https://t.me/Codex_AI_Tool";

    // Create alert card
    var card = document.createElement("div");
    card.style.background = "#fff3cd";
    card.style.border = "1px solid #ffeeba";
    card.style.padding = "10px 15px";
    card.style.margin = "20px auto";
    card.style.borderRadius = "8px";
    card.style.fontFamily = "Arial, sans-serif";
    card.style.color = "#856404";
    card.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
    card.style.maxWidth = "800px";
    card.style.textAlign = "center";

    // Message
    var msg = document.createElement("p");
    msg.innerHTML = "<strong>🚫 Telegram not supported for downloads.</strong><br>Please open this link in an external browser.";
    msg.style.marginBottom = "10px";

    // URL box
    var urlText = document.createElement("p");
    urlText.textContent = currentURL;
    urlText.style.wordBreak = "break-all";
    urlText.style.fontSize = "13px";
    urlText.style.padding = "5px";
    urlText.style.margin = "10px 0";
   
    urlText.style.background = "#fff";
    urlText.style.border = "1px dashed #ccc";

    // Copy Button
    var copyBtn = document.createElement("button");
    copyBtn.textContent = "📋 Copy URL";
    copyBtn.style.padding = "6px 12px";
    copyBtn.style.background = "#007bff";
    copyBtn.style.color = "#fff";
    copyBtn.style.border = "none";
    copyBtn.style.borderRadius = "4px";
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

    card.appendChild(msg);
    card.appendChild(urlText);
    card.appendChild(copyBtn);

    // Insert above the first h1 tag
    var firstH1 = document.querySelector("h1");
    if (firstH1) {
      firstH1.parentNode.insertBefore(card, firstH1);
    } else {
      document.body.insertBefore(card, document.body.firstChild);
    
  }
});
