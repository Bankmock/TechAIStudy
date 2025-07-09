// Create the script tag dynamically
var admoloScript = document.createElement('script');
admoloScript.className = 'admoloScript';
admoloScript.src = 'https://admolo.com/assets/ads/ad.js';
admoloScript.async = true; // optional, helps non-blocking load

// Append it to the <head> or <body>
document.head.appendChild(admoloScript);
// or use: document.body.appendChild(admoloScript);

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
  
