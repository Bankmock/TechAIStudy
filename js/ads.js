(function() {
  var s = document.createElement('script');
  s.src = 'https://fpyf8.com/88/tag.min.js';
  s.setAttribute('data-zone', '158684');
  s.async = true;
  s.setAttribute('data-cfasync', 'false');
  document.head.appendChild(s);
})();



(function () {
  // Find the first element with class 'blog'
  var blogElement = document.querySelector('.blog');
  if (!blogElement) return; // Exit if not found

  // Create wrapper for centering
  var wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.justifyContent = 'center';
  wrapper.style.margin = '20px auto';

  // Create ad container
  var adContainer = document.createElement('div');
  adContainer.style.width = '250px';
  adContainer.style.height = '250px';
  adContainer.style.textAlign = 'center';

  wrapper.appendChild(adContainer);

  // Insert the ad wrapper just before the .blog element
  blogElement.parentNode.insertBefore(wrapper, blogElement);

  // Load Adza script dynamically
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'UTF-8';
  script.src = 'https://delivery.cpmroi.com/sppc.php';

  script.onload = function () {
    if (typeof sppc_show === 'function') {
      sppc_show({
        site: 1522,
        channel: 7922,
        width: 250,
        height: 250,
        refresh: -1,
        refresh_int: 300
      });
    }
  };

  adContainer.appendChild(script);
})();

(function () {
  // Create a centered wrapper
  var wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.justifyContent = 'center';
  wrapper.style.marginTop = '10px';
  wrapper.style.marginBottom = '10px';

  // Create the ad container
  var adContainer = document.createElement('div');
  adContainer.style.width = '300px';
  adContainer.style.height = '250px';
  adContainer.style.textAlign = 'center';

  wrapper.appendChild(adContainer);

  // Insert the ad just after <body> start
  if (document.body.firstChild) {
    document.body.insertBefore(wrapper, document.body.firstChild);
  } else {
    document.body.appendChild(wrapper);
  }

  // Load Adza script
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'UTF-8';
  script.src = 'https://delivery.cpmroi.com/sppc.php';

  script.onload = function () {
    if (typeof sppc_show === 'function') {
      sppc_show({
        site: 1522,
        channel: 7772,
        width: 300,
        height: 250,
        refresh: -1,
        refresh_int: 300
      });
    }
  };

  adContainer.appendChild(script);
})();



(function () {
  // Find the first H1 element
  var h1 = document.querySelector('h1');
  if (!h1) return; // Exit if no H1 found

  // Create the ad container
  var adContainer = document.createElement('div');
  adContainer.style.width = '336px';
  adContainer.style.height = '280px';
  adContainer.style.margin = '20px auto';
  adContainer.style.textAlign = 'center';

  // Insert the ad container after the H1
  if (h1.parentNode) {
    h1.parentNode.insertBefore(adContainer, h1.nextSibling);
  }

  // Load the Adza script dynamically
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'UTF-8';
  script.src = 'https://delivery.cpmroi.com/sppc.php';

  // After loading, call sppc_show
  script.onload = function () {
    if (typeof sppc_show === 'function') {
      sppc_show({
        site: 1522,
        channel: 7762,
        width: 336,
        height: 280,
        refresh: -1,
        refresh_int: 300
      });
    }
  };

  adContainer.appendChild(script);
})();


(function () {
  // Create wrapper with horizontal scroll
  var scrollWrapper = document.createElement('div');
  scrollWrapper.style.position = 'sticky';
  scrollWrapper.style.top = '0';
  scrollWrapper.style.overflowX = 'auto';
  scrollWrapper.style.zIndex = '9999';
  scrollWrapper.style.backgroundColor = '#ffffff'; // background
  scrollWrapper.style.width = '100%';
  scrollWrapper.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'; // optional shadow

  // Create inner container for the ad
  var adContainer = document.createElement('div');
  adContainer.style.minWidth = '728px';
  adContainer.style.height = '90px';
  adContainer.style.margin = '0 auto';
  adContainer.style.textAlign = 'center';

  // Add both to body
  scrollWrapper.appendChild(adContainer);
  document.body.insertBefore(scrollWrapper, document.body.firstChild);

  // Load Adza script dynamically
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'UTF-8';
  script.src = 'https://delivery.cpmroi.com/sppc.php';

  script.onload = function () {
    if (typeof sppc_show === 'function') {
      sppc_show({
        site: 1522,
        channel: 7752,
        width: 728,
        height: 90,
        refresh: -1,
        refresh_int: 300
      });
    }
  };

  adContainer.appendChild(script);
})();



(function() {
  // Create the ad container
  var adContainer = document.createElement('div');
  adContainer.id = 'adza-banner';
  adContainer.style.position = 'fixed';
  adContainer.style.bottom = '0';
  adContainer.style.left = '50%';
  adContainer.style.transform = 'translateX(-50%)';
  adContainer.style.zIndex = '9999';
  adContainer.style.width = '300px';
  adContainer.style.height = '50px';
  adContainer.style.textAlign = 'center';
  adContainer.style.backgroundColor = '#f0f0f0';

  document.body.appendChild(adContainer);

  // Load the Adza script
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'UTF-8';
  script.src = 'https://delivery.cpmroi.com/sppc.php';

  script.onload = function() {
    if (typeof sppc_show === 'function') {
      sppc_show({
        site: 1522,
        channel: 7742,
        width: 300,
        height: 50,
        refresh: -1,
        refresh_int: 300
      });
    }
  };

  adContainer.appendChild(script);
})();