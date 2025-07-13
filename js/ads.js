// Make sure aclib is loaded before running this
const runAd = () => {
    if (typeof aclib !== 'undefined' && typeof aclib.runBanner === 'function') {
        aclib.runBanner({
            zoneId: '10084830',
        });
    } else {
        // Retry after short delay if aclib not loaded yet
        setTimeout(runAd, 100);
    }
};

// Load the aclib script dynamically
const script = document.createElement('script');
script.id = 'aclib';
script.type = 'text/javascript';
script.src = '//acscdn.com/script/aclib.js';
script.onload = runAd; // Run banner after script loads
document.head.appendChild(script);



// Ad Script 1 - Appended after full page load
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
      bottomAdWrapper.style.height = "50px";

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

    // Ad Script 2 - Insert below first <h1> not inside <header>
    (function () {
      window.atOptions = {
        'key': 'f6a50813422437971b3b8f04a6d36d5b',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };

      var adScript = document.createElement('script');
      adScript.type = 'text/javascript';
      adScript.src = '//www.highperformanceformat.com/f6a50813422437971b3b8f04a6d36d5b/invoke.js';

      var adWrapper = document.createElement('div');
      adWrapper.style.width = '300px';
      adWrapper.style.height = '250px';
      adWrapper.style.margin = '20px auto';
      adWrapper.style.textAlign = 'center';
      adWrapper.style.overflowX = 'auto';
      adWrapper.appendChild(adScript);

      document.addEventListener('DOMContentLoaded', function () {
        const h1s = document.querySelectorAll('h1');
        for (let h1 of h1s) {
          if (!h1.closest('header')) {
            h1.parentNode.insertBefore(adWrapper, h1.nextSibling);
            break;
          }
        }
      });
    })();

    // Ad Script 3 - Insert before element with class .ads9
    (function () {
      document.addEventListener('DOMContentLoaded', function () {
        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src = '//pl25250725.profitableratecpm.com/2c5610f6e714632e87626d65ca558bbd/invoke.js';

        const container = document.createElement('div');
        container.id = 'container-2c5610f6e714632e87626d65ca558bbd';

        const wrapper = document.createElement('div');
        wrapper.style.margin = '20px 0';
        wrapper.appendChild(script);
        wrapper.appendChild(container);

        const adsElement = document.querySelector('.blog');
        if (adsElement && adsElement.parentNode) {
          adsElement.parentNode.insertBefore(wrapper, adsElement);
        }
      });
    })();








