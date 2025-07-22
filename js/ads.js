(function() {
  var s = document.createElement('script');
  s.src = 'https://fpyf8.com/88/tag.min.js';
  s.setAttribute('data-zone', '158684');
  s.async = true;
  s.setAttribute('data-cfasync', 'false');
  document.head.appendChild(s);
})();




(function () {
  const ads = [
    {
      // 1. Sticky Top Horizontal Scrollable Banner (7752)
      position: 'top-sticky',
      channel: 7752,
      site: 1522,
      width: 728,
      height: 90
    },
    {
      // 2. Bottom Fixed Banner (7742)
      position: 'bottom-fixed',
      channel: 7742,
      site: 1522,
      width: 300,
      height: 50
    },
    {
      // 3. Just after <h1> (7762)
      position: 'after-h1',
      channel: 7762,
      site: 1522,
      width: 336,
      height: 280
    },
    {
      // 4. Just after <body> tag, centered (7772)
      position: 'after-body',
      channel: 7772,
      site: 1522,
      width: 300,
      height: 250
    },
    {
      // 5. Just above .blog (7922)
      position: 'above-blog',
      channel: 7922,
      site: 1522,
      width: 250,
      height: 250
    }
  ];

  function loadAd(ad, container) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.src = 'https://delivery.cpmroi.com/sppc.php';
    script.onload = function () {
      if (typeof sppc_show === 'function') {
        sppc_show({
          site: ad.site,
          channel: ad.channel,
          width: ad.width,
          height: ad.height,
          refresh: -1,
          refresh_int: 300
        });
      }
    };
    container.appendChild(script);
  }

  ads.forEach(ad => {
    let container, wrapper;

    switch (ad.position) {
      case 'top-sticky':
        wrapper = document.createElement('div');
        wrapper.style.position = 'sticky';
        wrapper.style.top = '0';
        wrapper.style.overflowX = 'auto';
        wrapper.style.backgroundColor = '#fff';
        wrapper.style.zIndex = '9999';
        wrapper.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        container = document.createElement('div');
        container.style.minWidth = ad.width + 'px';
        container.style.height = ad.height + 'px';
        container.style.margin = '0 auto';
        container.style.textAlign = 'center';
        wrapper.appendChild(container);
        document.body.insertBefore(wrapper, document.body.firstChild);
        loadAd(ad, container);
        break;

      case 'bottom-fixed':
        wrapper = document.createElement('div');
        wrapper.style.position = 'fixed';
        wrapper.style.bottom = '0';
        wrapper.style.left = '50%';
        wrapper.style.transform = 'translateX(-50%)';
        wrapper.style.zIndex = '9999';
        wrapper.style.width = ad.width + 'px';
        wrapper.style.height = ad.height + 'px';
        wrapper.style.textAlign = 'center';
        wrapper.style.backgroundColor = '#f0f0f0';
        container = document.createElement('div');
        wrapper.appendChild(container);
        document.body.appendChild(wrapper);
        loadAd(ad, container);
        break;

      case 'after-h1':
        const h1 = document.querySelector('h1');
        if (h1) {
          container = document.createElement('div');
          container.style.width = ad.width + 'px';
          container.style.height = ad.height + 'px';
          container.style.margin = '20px auto';
          container.style.textAlign = 'center';
          h1.parentNode.insertBefore(container, h1.nextSibling);
          loadAd(ad, container);
        }
        break;

      case 'after-body':
        wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.justifyContent = 'center';
        wrapper.style.margin = '10px auto';
        container = document.createElement('div');
        container.style.width = ad.width + 'px';
        container.style.height = ad.height + 'px';
        container.style.textAlign = 'center';
        wrapper.appendChild(container);
        if (document.body.firstChild) {
          document.body.insertBefore(wrapper, document.body.firstChild);
        } else {
          document.body.appendChild(wrapper);
        }
        loadAd(ad, container);
        break;

      case 'above-blog':
        const blog = document.querySelector('.blog');
        if (blog) {
          wrapper = document.createElement('div');
          wrapper.style.display = 'flex';
          wrapper.style.justifyContent = 'center';
          wrapper.style.margin = '20px auto';
          container = document.createElement('div');
          container.style.width = ad.width + 'px';
          container.style.height = ad.height + 'px';
          container.style.textAlign = 'center';
          wrapper.appendChild(container);
          blog.parentNode.insertBefore(wrapper, blog);
          loadAd(ad, container);
        }
        break;
    }
  });
})();
