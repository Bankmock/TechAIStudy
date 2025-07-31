(function() {
  // Create the ad container
  var adDiv = document.createElement("div");
  adDiv.id = "slot_368621";
  adDiv.style.position = "fixed";
  adDiv.style.top = "0";
  adDiv.style.left = "0";
  adDiv.style.width = "100%";
  adDiv.style.zIndex = "9999";
  adDiv.style.background = "#fff";
  adDiv.style.textAlign = "center";
  adDiv.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";

  // Create padding for body to prevent overlap
  document.body.style.paddingTop = "60px"; // adjust height if needed

  // Create the script element
  var script = document.createElement("script");
  script.src = "https://linkslot.ru/bancode_new.php?id=368621";
  script.async = true;

  // Append the script to the ad container
  adDiv.appendChild(script);

  // Append the ad container to the body
  document.body.prepend(adDiv);
})();
(function() {
  // Create style for fixed bottom banner
  const style = document.createElement('style');
  style.innerHTML = `
    #traficstocBanner {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      max-width: 100%;
      height: 60px;
      background: #ffffff;
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    }
    body {
      margin-bottom: 60px !important;
    }
  `;
  document.head.appendChild(style);

  // Create container div
  const banner = document.createElement('div');
  banner.id = 'traficstocBanner';

  // Inner div for ad script
  const adDiv = document.createElement('div');
  adDiv.id = 'traficstoc_2801';
  adDiv.style.cssText = 'width:100%;max-width:468px;height:60px;';

  // Create ad script
  const script = document.createElement('script');
  script.src = 'https://traficstoc.ru/banner.php?user=2801';
  script.async = true;

  // Append everything
  adDiv.appendChild(script);
  banner.appendChild(adDiv);
  document.body.appendChild(banner);
})();
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





