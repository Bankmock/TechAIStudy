(function() {
  // Create a container for the ad
  var adContainer = document.createElement("div");
  adContainer.style.position = "fixed";
  adContainer.style.bottom = "0";
  adContainer.style.left = "50%";
  adContainer.style.transform = "translateX(-50%)";
  adContainer.style.width = "320px";
  adContainer.style.height = "50px";
  adContainer.style.zIndex = "9999";
  adContainer.style.backgroundColor = "transparent";

  // Append the container to the body
  document.body.appendChild(adContainer);

  // Create the ad options script
  var configScript = document.createElement("script");
  configScript.type = "text/javascript";
  configScript.innerHTML = `
    atOptions = {
      'key' : 'b522989fcf5cdf1fbc5167845934a0a9',
      'format' : 'iframe',
      'height' : 50,
      'width' : 320,
      'params' : {}
    };
  `;
  adContainer.appendChild(configScript);

  // Create the ad loader script
  var adScript = document.createElement("script");
  adScript.type = "text/javascript";
  adScript.src = "//www.highperformanceformat.com/b522989fcf5cdf1fbc5167845934a0a9/invoke.js";
  adContainer.appendChild(adScript);
})();