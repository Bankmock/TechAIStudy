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


(function () {
  // Wait for DOM to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAdAfterH1);
  } else {
    injectAdAfterH1();
  }

  function injectAdAfterH1() {
    // Find the first <h1> element
    var h1 = document.querySelector('h1');
    if (!h1) return;

    // Create the ad container div
    var adDiv = document.createElement('div');
    adDiv.id = 'shareus-admanager-0530423619-GcCXsOwHUO';

    // Insert the ad div right after <h1>
    if (h1.nextSibling) {
      h1.parentNode.insertBefore(adDiv, h1.nextSibling);
    } else {
      h1.parentNode.appendChild(adDiv);
    }

    // Load the GPT.js script
    var script = document.createElement('script');
    script.src = 'https://securepubads.shareus.io/scripts/tag/js/gpt.js';
    script.async = true;
    script.type = 'text/javascript';

    // Once script is loaded, define the ad slot
    script.onload = function () {
      window._shareustag = window._shareustag || { cmd: [] };
      _shareustag.cmd.push(function () {
        _shareustag.defineSlot(
          '/shareus-admanager/0530423619/GcCXsOwHUO/H',
          ['Responsive'],
          'shareus-admanager-0530423619-GcCXsOwHUO'
        );
      });
    };

    document.head.appendChild(script);
  }
})();

(function () {
  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAdAboveBlog);
  } else {
    injectAdAboveBlog();
  }

  function injectAdAboveBlog() {
    // Find the first element with class "blog"
    var blogElement = document.querySelector('.blog');
    if (!blogElement) return;

    // Create the ad div
    var adDiv = document.createElement('div');
    adDiv.id = 'shareus-admanager-0530423619-v1QnC4P59y';

    // Insert the ad div just above the blog element
    blogElement.parentNode.insertBefore(adDiv, blogElement);

    // Load GPT.js script
    var script = document.createElement('script');
    script.src = 'https://securepubads.shareus.io/scripts/tag/js/gpt.js';
    script.async = true;
    script.type = 'text/javascript';

    script.onload = function () {
      window._shareustag = window._shareustag || { cmd: [] };
      _shareustag.cmd.push(function () {
        _shareustag.defineSlot(
          '/shareus-admanager/0530423619/v1QnC4P59y/Ads',
          ['Responsive'],
          'shareus-admanager-0530423619-v1QnC4P59y'
        );
      });
    };

    document.head.appendChild(script);
  }
})();