

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
  

