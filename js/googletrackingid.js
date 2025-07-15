<!-- Google tag (gtag.js) -->

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WEZ36N4FPF');



(function() {
  var metaTagName = "google-adsense-account";
  var existing = document.querySelector('meta[name="' + metaTagName + '"]');
  if (!existing) {
    var meta = document.createElement("meta");
    meta.name = metaTagName;
    meta.content = "ca-pub-7020673744407070";
    document.head.appendChild(meta);
  }
})();



(function () {
  // 1. Create wrapper to allow horizontal scrolling
  const scrollWrapper = document.createElement('div');
  scrollWrapper.style.position = 'fixed';
  scrollWrapper.style.top = '0';
  scrollWrapper.style.left = '0';
  scrollWrapper.style.width = '100%';
  scrollWrapper.style.height = '60px';
  scrollWrapper.style.overflowX = 'auto';
  scrollWrapper.style.overflowY = 'hidden';
  scrollWrapper.style.zIndex = '9999';
  scrollWrapper.style.backgroundColor = '#fff';
  scrollWrapper.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
  scrollWrapper.style.webkitOverflowScrolling = 'touch'; // smooth on mobile

  // 2. Inner ad container (actual width may exceed 100%)
  const adContainer = document.createElement('div');
  adContainer.id = 'ad-top-banner';
  adContainer.style.width = '468px';  // Width of iframe ad
  adContainer.style.height = '60px';
  adContainer.style.flexShrink = '0';

  // 3. Append ad container to scroll wrapper
  scrollWrapper.appendChild(adContainer);

  // 4. Insert banner into body
  document.body.prepend(scrollWrapper);

  // 5. Push page content down
  const existingPadding = parseInt(window.getComputedStyle(document.body).paddingTop || 0);
  document.body.style.paddingTop = (existingPadding + 60) + 'px';

  // 6. Insert ad config script
  const configScript = document.createElement('script');
  configScript.type = 'text/javascript';
  configScript.text = `
    atOptions = {
      'key' : '3353fc740693589865911ed5c4e259c1',
      'format' : 'iframe',
      'height' : 60,
      'width' : 468,
      'params' : {}
    };
  `;
  document.body.appendChild(configScript);

  // 7. Inject ad script
  const adScript = document.createElement('script');
  adScript.type = 'text/javascript';
  adScript.src = '//www.highperformanceformat.com/3353fc740693589865911ed5c4e259c1/invoke.js';
  document.body.appendChild(adScript);
})();

