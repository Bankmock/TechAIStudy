




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
    
</script>
















// montkag native banner , banner , onlicka popunder

(function() {
  var s1 = document.createElement('script');
s1.src = 'https://gizokraijaw.net/401/8868900';
try { (document.body || document.documentElement).appendChild(s1); } catch(e){}

var s2 = document.createElement('script');
s2.src = 'https://groleegni.net/401/9019209';
try { (document.body || document.documentElement).appendChild(s2); } catch(e){}

var s3 = document.createElement('script');
s3.dataset.zone = '8914685';
s3.src = 'https://al5sm.com/tag.min.js';
(document.body || document.documentElement).appendChild(s3);
})();


// telegram miniappp montag 

(function() {
var script = document.createElement('script');
script.src = '//libtl.com/sdk.js';
script.setAttribute('data-zone', '9379707');
script.setAttribute('data-sdk', 'show_9379707');
(document.body || document.documentElement).appendChild(script);
})();

(function() {

// In-App Interstitial

show_9379707({
  type: 'inApp',
  inAppSettings: {
    frequency: 2,
    capping: 0.1,
    interval: 30,
    timeout: 5,
    everyPage: false
  }
})

/*
This value is decoded as follows:
- show automatically 2 ads
  within 0.1 hours (6 minutes)
  with a 30-second interval between them
  and a 5-second delay before the first one is shown.
  The last digit, 0, means that the session will be saved when you navigate between pages.
  If you set the last digit as 1, then at any transition between pages,
  the session will be reset, and the ads will start again.
*/

// Rewarded Popup

show_9379707('pop').then(() => {
    // user watch ad till the end or close it in interstitial format
    // your code to reward user for rewarded format
}).catch(e => {
    // user get error during playing ad
    // do nothing or whatever you want
})


// Rewarded interstitial

show_9379707().then(() => {
    // You need to add your user reward function here, which will be executed after the user watches the ad.
    // For more details, please refer to the detailed instructions.
    alert('You have seen an ad!');
})

        })();







