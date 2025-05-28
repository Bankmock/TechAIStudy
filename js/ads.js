(function () {
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

  document.addEventListener('DOMContentLoaded', function () {
    const h1s = document.querySelectorAll('h1');
    for (let h1 of h1s) {
      if (!h1.closest('header')) {
        h1.parentNode.insertBefore(adWrapper, h1.nextSibling);
        break;
      }
    }
  });
})();



(function () {
  document.addEventListener('DOMContentLoaded', function () {
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





 
