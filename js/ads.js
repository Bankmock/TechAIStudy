
(function() {
  // Load the GPT.js script dynamically
  var script = document.createElement('script');
  script.src = "https://securepubads.shareus.io/scripts/tag/js/gpt.js";
  script.async = true;
  script.type = "text/javascript";

  script.onload = function() {
    window._shareustag = window._shareustag || { cmd: [] };

    _shareustag.cmd.push(function() {
      _shareustag.defineSlot(
        '/shareus-admanager/0530423619/B47xbLLveQ/K',
        ["Responsive"],
        'shareus-admanager-0530423619-B47xbLLveQ'
      );
    });
  };

  document.head.appendChild(script);
})();