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
  

