alert("hi");(function() {
  // Create outer scroll container
  var scrollContainer = document.createElement("div");
  scrollContainer.style.position = "fixed";
  scrollContainer.style.top = "0";
  scrollContainer.style.left = "0";
  scrollContainer.style.right = "0";
  scrollContainer.style.overflowX = "auto";
  scrollContainer.style.whiteSpace = "nowrap";
  scrollContainer.style.zIndex = "9999";
  scrollContainer.style.backgroundColor = "#ffffff00"; // transparent

  // Optional: Smooth scrolling
  scrollContainer.style.scrollBehavior = "smooth";

  // Create inner ad item container
  var adItem = document.createElement("div");
  adItem.style.display = "inline-block";
  adItem.style.width = "468px";
  adItem.style.height = "60px";

  // Add config script to ad item
  var configScript = document.createElement("script");
  configScript.type = "text/javascript";
  configScript.innerHTML = `
    atOptions = {
      'key' : '3353fc740693589865911ed5c4e259c1',
      'format' : 'iframe',
      'height' : 60,
      'width' : 468,
      'params' : {}
    };
  `;
  adItem.appendChild(configScript);

  // Add loader script to ad item
  var loaderScript = document.createElement("script");
  loaderScript.type = "text/javascript";
  loaderScript.src = "//www.highperformanceformat.com/3353fc740693589865911ed5c4e259c1/invoke.js";
  adItem.appendChild(loaderScript);

  // Append ad item to scroll container
  scrollContainer.appendChild(adItem);

  // Append scroll container to body
  document.body.appendChild(scrollContainer);
})();


window.addEventListener('load', function () {

      // --- Bottom Ad Code ---
      // Create a scrollable container for the bottom ad
      const bottomScrollContainer = document.createElement("div");
      bottomScrollContainer.style.position = "fixed";
      bottomScrollContainer.style.bottom = "0";
      bottomScrollContainer.style.left = "0";
      bottomScrollContainer.style.width = "100%";
      bottomScrollContainer.style.overflowX = "auto";
      bottomScrollContainer.style.whiteSpace = "nowrap";
      bottomScrollContainer.style.zIndex = "9999"; // Ensures it stays on top of other content
      bottomScrollContainer.style.padding = "10px 0";
      bottomScrollContainer.style.backgroundColor = "#fff"; // Optional, for better visibility

      // Inner wrapper to hold the bottom ad
      const bottomAdWrapper = document.createElement("div");
      bottomAdWrapper.style.display = "inline-block";
      bottomAdWrapper.style.minWidth = "320px";
      bottomAdWrapper.style.height = "49px";

      // Create the first <script> tag (atOptions config for bottom ad)
      const bottomConfigScript = document.createElement("script");
      bottomConfigScript.type = "text/javascript";
      bottomConfigScript.innerHTML = `
        atOptions = {
          'key' : 'b522989fcf5cdf1fbc5167845934a0a9',
          'format' : 'iframe',
          'height' : 50,
          'width' : 320,
          'params' : {}
        };
      `;

      // Create the second <script> tag (invoke.js for bottom ad)
      const bottomAdScript = document.createElement("script");
      bottomAdScript.type = "text/javascript";
      bottomAdScript.src = "//www.highperformanceformat.com/b522989fcf5cdf1fbc5167845934a0a9/invoke.js";

      // Append both scripts to the bottom ad wrapper
      bottomAdWrapper.appendChild(bottomConfigScript);
      bottomAdWrapper.appendChild(bottomAdScript);

      // Append the bottom ad wrapper to its scrollable container
      bottomScrollContainer.appendChild(bottomAdWrapper);

      // Insert the scrollable container at the bottom of the page
      document.body.appendChild(bottomScrollContainer);
    });
