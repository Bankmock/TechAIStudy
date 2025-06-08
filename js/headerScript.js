(function () {
  var userAgent = navigator.userAgent.toLowerCase();
  var isTelegram = userAgent.includes("telegram") || userAgent.includes("webview");

  if (isTelegram) {
    alert("Telegram is not allowed to download files.\n\nPlease copy this URL and open it in your external browser:\n\n" + window.location.href);

    var box = document.createElement("div");
    box.style.padding = "15px";
    box.style.background = "#ffe0e0";
    box.style.borderLeft = "5px solid red";
    box.style.margin = "20px";
    box.style.fontFamily = "sans-serif";

    var msg = document.createElement("p");
    msg.innerHTML = "<strong>⚠️ Telegram is not allowed to download files.</strong><br>Please copy the URL and open it in an external browser.";

    var urlText = document.createElement("p");
    urlText.textContent = window.location.href;
    urlText.style.wordBreak = "break-all";
    urlText.style.padding = "10px";
    urlText.style.background = "#fff";
    urlText.style.border = "1px solid #ccc";

    var copyBtn = document.createElement("button");
    copyBtn.textContent = "📋 Copy URL";
    copyBtn.style.marginTop = "10px";
    copyBtn.style.padding = "10px 15px";
    copyBtn.style.cursor = "pointer";
    copyBtn.onclick = function () {
      var input = document.createElement("input");
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      alert("URL copied to clipboard!");
    };

    box.appendChild(msg);
    box.appendChild(urlText);
    box.appendChild(copyBtn);
    document.body.appendChild(box);
  }
})();