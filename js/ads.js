// Inject external script
var script = document.createElement('script');
script.src = 'https://groleegni.net/401/9019209';
try {
  (document.body || document.documentElement).appendChild(script);
} catch (e) {
  console.error('Failed to append ad script:', e);
}

// Rewarded Interstitial
function showRewardedAd() {
  if (typeof show_9379707 === 'function') {
    show_9379707().then(function () {
      // Reward logic after ad watch
      alert('You have seen an ad!');
    });
  } else {
    console.warn('Ad function show_9379707 not available yet.');
  }
}

// Rewarded Popup
function showRewardedPopup() {
  if (typeof show_9379707 === 'function') {
    show_9379707('pop').then(function () {
      // Reward logic here
    }).catch(function (e) {
      // Handle error
      console.error('Ad failed or was skipped:', e);
    });
  } else {
    console.warn('Ad function show_9379707 not available yet.');
  }
}

// In-App Interstitial
function showInAppInterstitial() {
  if (typeof show_9379707 === 'function') {
    show_9379707({
      type: 'inApp',
      inAppSettings: {
        frequency: 2,
        capping: 0.1,
        interval: 30,
        timeout: 5,
        everyPage: false
      }
    });
  } else {
    console.warn('Ad function show_9379707 not available yet.');
  }
}

// Optionally call these functions where needed:
// showRewardedAd();
// showRewardedPopup();
// showInAppInterstitial();