

function toggleTheme() {
      const html = document.documentElement;
      const isDark = html.getAttribute('data-theme') === 'dark';
      html.setAttribute('data-theme', isDark ? 'light' : 'dark');
      document.querySelector('.toggle').innerText = isDark ? 'ðŸŒ— Dark' : 'â˜€ Light';
    }

    function toggleMenu() {
      const dropdown = document.getElementById('menu');
      dropdown.classList.toggle('show');
    }


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
  
(function () {
  // Wait for DOM to fully load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectAdBanner);
  } else {
    injectAdBanner();
  }

  function injectAdBanner() {
    // Add top padding to the body so content doesn't hide behind the banner
    document.body.style.paddingTop = "60px";
    document.body.style.margin = "0";

    // Create a container div
    var bannerContainer = document.createElement('div');
    bannerContainer.style.position = 'fixed';
    bannerContainer.style.top = '0';
    bannerContainer.style.left = '50%';
    bannerContainer.style.transform = 'translateX(-50%)';
    bannerContainer.style.zIndex = '9999';
    bannerContainer.style.backgroundColor = '#fff';
    bannerContainer.style.borderBottom = '1px solid #ccc';

    // Create the iframe
    var iframe = document.createElement('iframe');
    iframe.src = 'https://shark-ads.ru/context/get/919/344/1/468/60';
    iframe.scrolling = 'no';
    iframe.style.width = '468px';
    iframe.style.height = '60px';
    iframe.style.padding = '0';
    iframe.style.border = '1px dotted grey';
    iframe.frameBorder = '0';

    // Append iframe to container and container to body
    bannerContainer.appendChild(iframe);
    document.body.appendChild(bannerContainer);
  }
})();

