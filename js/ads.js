(function() {
  const today = new Date().toISOString().split('T')[0]; // Get current date (YYYY-MM-DD)

  // Check if stored date is today, else clear all related storage
  const lastDate = localStorage.getItem("ads_date");
  if (lastDate !== today) {
    localStorage.removeItem("admoloads");
    localStorage.removeItem("eonads");
    localStorage.removeItem("multiplewallads");
    localStorage.setItem("ads_date", today);
  }

  // Check for admoloads
  if (!localStorage.getItem("admoloads")) {
    localStorage.setItem("admoloads", "true");
    
    (function() {
      document.addEventListener('DOMContentLoaded', function() {
        const allH1 = document.querySelectorAll('h1');
        let targetH1 = null;

        for (const h1 of allH1) {
          if (!h1.closest('header')) {
            targetH1 = h1;
            break;
          }
        }

        if (targetH1) {
          const bannerDiv = document.createElement('div');
          bannerDiv.className = 'admoloBanner';
          bannerDiv.setAttribute('data-publisher', 'eyJpdiI6ImhjRWhCbTl2ZFBqSFZON1hSSHFQTnc9PSIsInZhbHVlIjoiTkEyUFhqVmNNLzhMbnNlMGZUV1lldz09IiwibWFjIjoiZmUxNjQxOWM3MzZlNTVhYTJhNTBiYTkxMWY4NGQxNTNkOTkwMjkzY2M3NjljN2Y0N2I4MzQ0YjU0MjI5YTgzNCIsInRhZyI6IiJ9');
          bannerDiv.setAttribute('data-adsize', '320x180');

          targetH1.parentNode.insertBefore(bannerDiv, targetH1.nextSibling);
        }
      });
    })();

    (function() {
      document.addEventListener('DOMContentLoaded', function() {
        const adsElement = document.querySelector('.ads');
        if (adsElement) {
          const bannerDiv = document.createElement('div');
          bannerDiv.className = 'admoloBanner';
          bannerDiv.setAttribute('data-publisher', 'eyJpdiI6IkM2MFdyTFVNa2c4ZGlyeG1FeUVFTXc9PSIsInZhbHVlIjoibVdIN0VqWjF5TnloVHkvUnRLZVpWUT09IiwibWFjIjoiMTAxYmZmZmQ1MWFlYTZjMGJhYjg4NGI2NTQ4OGI5NWFiMWUwODVhNTBiMTVhNjZmZjg4YmY4ZWNmMWNiMWIwMSIsInRhZyI6IiJ9');
          bannerDiv.setAttribute('data-adsize', '300x300');

          adsElement.parentNode.insertBefore(bannerDiv, adsElement);
        }
      });
    })();

    (function() {
      document.addEventListener('DOMContentLoaded', function() {
        const ads9Element = document.querySelector('.ads9');
        if (ads9Element) {
          const bannerDiv = document.createElement('div');
          bannerDiv.className = 'admoloBanner';
          bannerDiv.setAttribute('data-publisher', 'eyJpdiI6IndsMmFUZ0VrbGg5VG5UTG1OOXJnT3c9PSIsInZhbHVlIjoiVys3OFVMMDhxVk54aDdkWDluSGlFdz09IiwibWFjIjoiOGVjYWRiMDhlZTYxN2YxYTA5YzlkNDEyNmMzMDgyMjgzYWZmNDNkMmM2NDMzMDRkOWMzMWQyNGExOTg2OWM5YyIsInRhZyI6IiJ9');
          bannerDiv.setAttribute('data-adsize', '560x315');

          ads9Element.parentNode.insertBefore(bannerDiv, ads9Element);
        }
      });
    })();
  } else if (!localStorage.getItem("eonads")) {
    localStorage.setItem("eonads", "true");
    
    (function() {
      document.addEventListener('DOMContentLoaded', function() {
        const allH1 = document.querySelectorAll('h1');
        let targetH1 = null;

        // Find first <h1> not inside a <header>
        for (let i = 0; i < allH1.length; i++) {
          if (!allH1[i].closest('header')) {
            targetH1 = allH1[i];
            break;
          }
        }

        if (targetH1) {
          // Create ad container
          const container = document.createElement('div');

          // Create Eonads elements
          const anchor = document.createElement('a');
          anchor.href = 'https://www.eonads.com';
          anchor.className = 'ex5';
          anchor.target = '_blank';
          anchor.textContent = 'Ads by Eonads';

          const ins = document.createElement('ins');
          ins.className = 'e336x280';
          ins.id = '336x280';
          ins.setAttribute('data-revive-hash', '2b8c21aa488d1df45330671cabf4dd66');
          ins.setAttribute('data-revive-zoneid', '62772');
          ins.setAttribute('data-revive-id', 'f87497be83f6ed6b52c3b340d803ae0d');

          const script = document.createElement('script');
          script.async = true;
          script.src = '//network.eonads.com/adserver/www/delivery/asyncjs.php';

          // Append ad elements to container
          container.appendChild(anchor);
          container.appendChild(ins);
          container.appendChild(script);

          // Insert after the h1
          if (targetH1.nextSibling) {
            targetH1.parentNode.insertBefore(container, targetH1.nextSibling);
          } else {
            targetH1.parentNode.appendChild(container);
          }
        }
      });
    })();

    (function() {
      document.addEventListener('DOMContentLoaded', function() {
        const target = document.querySelector('.ads');
        if (!target || !target.parentNode) return;

        // Create ad container
        const container = document.createElement('div');

        // Create ad label
        const anchor = document.createElement('a');
        anchor.href = 'https://www.eonads.com';
        anchor.className = 'ex5';
        anchor.target = '_blank';
        anchor.textContent = 'Ads by Eonads';

        // Create ad placeholder
        const ins = document.createElement('ins');
        ins.className = 'e336x280';
        ins.id = '336x280';
        ins.setAttribute('data-revive-hash', '2b8c21aa488d1df45330671cabf4dd66');
        ins.setAttribute('data-revive-zoneid', '62650');
        ins.setAttribute('data-revive-id', 'f87497be83f6ed6b52c3b340d803ae0d');

        // Create script
        const script = document.createElement('script');
        script.async = true;
        script.src = '//network.eonads.com/adserver/www/delivery/asyncjs.php';

        // Append elements to container
        container.appendChild(anchor);
        container.appendChild(ins);
        container.appendChild(script);

        // Insert before .ads
        target.parentNode.insertBefore(container, target);
      });
    })();

    (function() {
      document.addEventListener('DOMContentLoaded', function() {
        const target = document.querySelector('.ads9');
        if (!target || !target.parentNode) return;

        // Create a container for the ad
        const container = document.createElement('div');

        // Create ad label
        const anchor = document.createElement('a');
        anchor.href = 'https://www.eonads.com';
        anchor.className = 'ex2';
        anchor.target = '_blank';
        anchor.textContent = 'Ads by Eonads';

        // Create ad placeholder
        const ins = document.createElement('ins');
        ins.className = 'e300x250';
        ins.id = '300x250';
        ins.setAttribute('data-revive-hash', '2b8c21aa488d1df45330671cabf4dd66');
        ins.setAttribute('data-revive-zoneid', '62211');
        ins.setAttribute('data-revive-id', 'f87497be83f6ed6b52c3b340d803ae0d');

        // Create the async script
        const script = document.createElement('script');
        script.async = true;
        script.src = '//network.eonads.com/adserver/www/delivery/asyncjs.php';

        // Append all elements to the container
        container.appendChild(anchor);
        container.appendChild(ins);
        container.appendChild(script);

        // Insert container before .ads9
        target.parentNode.insertBefore(container, target);
      });
    })();
  } else if (localStorage.getItem("eonads") && !localStorage.getItem("multiplewallads")) {
    localStorage.setItem("multiplewallads", "true");
    
    (function() {
      document.addEventListener('DOMContentLoaded', function() {
        const allH1 = document.querySelectorAll('h1');
        let targetH1 = null;

        // Find first h1 NOT inside a header tag
        for (let i = 0; i < allH1.length; i++) {
          if (!allH1[i].closest('header')) {
            targetH1 = allH1[i];
            break;
          }
        }

        if (targetH1) {
          const iframe = document.createElement('iframe');
          iframe.src = 'https://multiwall-ads.shop/vbanner.php?mwbanner=1586&size=300';
          iframe.scrolling = 'no';
          iframe.style.display = 'block';
          iframe.style.verticalAlign = 'bottom';
          iframe.style.border = '0px';
          iframe.style.width = '300px';
          iframe.style.height = '250px';

          // Insert iframe after h1
          if (targetH1.nextSibling) {
            targetH1.parentNode.insertBefore(iframe, targetH1.nextSibling);
          } else {
            targetH1.parentNode.appendChild(iframe);
          }
        }
      });
    })();

    (function() {
      document.addEventListener('DOMContentLoaded', function() {
        const target = document.querySelector('.ads9');
        if (target && target.parentNode) {
          const iframe = document.createElement('iframe');
          iframe.src = 'https://multiwall-ads.shop/vbanner.php?mwbanner=1586&size=300';
          iframe.scrolling = 'no';
          iframe.style.display = 'block';
          iframe.style.verticalAlign = 'bottom';
          iframe.style.border = '0px';
          iframe.style.width = '300px';
          iframe.style.height = '250px';

          target.parentNode.insertBefore(iframe, target);
        }
      });
    })();
  }

  // If all 3 are present
  if (localStorage.getItem("admoloads") &&
      localStorage.getItem("eonads") &&
      localStorage.getItem("multiplewallads")) {
    (function() {
      window.atOptions = {
        'key': 'f6a50813422437971b3b8f04a6d36d5b',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };

      var adScript = document.createElement('script');
      adScript.type = 'text/javascript';
      adScript.src = '//www.highperformanceformat.com/f6a50813422437971b3b8f04a6d36d5b/invoke.js';

      var adWrapper = document.createElement('div');
      adWrapper.style.width = '300px';
      adWrapper.style.height = '250px';
      adWrapper.style.margin = '20px auto';
      adWrapper.style.textAlign = 'center';
      adWrapper.style.overflowX = 'auto';
      adWrapper.appendChild(adScript);

      document.addEventListener('DOMContentLoaded', function() {
        const h1s = document.querySelectorAll('h1');
        for (let h1 of h1s) {
          if (!h1.closest('header')) {
            h1.parentNode.insertBefore(adWrapper, h1.nextSibling);
            break;
          }
        }
      });
    })();

    (function() {
      document.addEventListener('DOMContentLoaded', function() {
        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src = '//pl25250725.profitableratecpm.com/2c5610f6e714632e87626d65ca558bbd/invoke.js';

        const container = document.createElement('div');
        container.id = 'container-2c5610f6e714632e87626d65ca558bbd';

        const wrapper = document.createElement('div');
        wrapper.style.margin = '20px 0';
        wrapper.appendChild(script);
        wrapper.appendChild(container);

        const adsElement = document.querySelector('.ads9');
        if (adsElement && adsElement.parentNode) {
          adsElement.parentNode.insertBefore(wrapper, adsElement);
        }
      });
    })();
  }
})();