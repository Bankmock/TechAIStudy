(function () {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAd);
  } else {
    injectAd();
  }

  function injectAd() {
    // Create container div
    var adDiv = document.createElement('div');
    adDiv.id = 'shareus-admanager-0530423619-B47xbLLveQ';

    // Insert just after <body> tag
    if (document.body.firstChild) {
      document.body.insertBefore(adDiv, document.body.firstChild);
    } else {
      document.body.appendChild(adDiv);
    }

    // Load Shareus script
    var script = document.createElement('script');
    script.src = 'https://securepubads.shareus.io/scripts/tag/js/gpt.js';
    script.async = true;
    script.type = 'text/javascript';

    script.onload = function () {
      window._shareustag = window._shareustag || { cmd: [] };
      _shareustag.cmd.push(function () {
        _shareustag.defineSlot(
          '/shareus-admanager/0530423619/B47xbLLveQ/K',
          ['Responsive'],
          'shareus-admanager-0530423619-B47xbLLveQ'
        );
      });
    };

    document.head.appendChild(script);
  }
})();