// Create the ad container div
const adDiv = document.createElement('div');
adDiv.id = 'shareus-admanager-0530423619-GcCXsOwHUO';
document.body.appendChild(adDiv);

// Load the GPT script dynamically
const script = document.createElement('script');
script.src = 'https://securepubads.shareus.io/scripts/tag/js/gpt.js';
script.async = true;

script.onload = function () {
  window._shareustag = window._shareustag || { cmd: [] };
  window._shareustag.cmd.push(function () {
    window._shareustag.defineSlot(
      '/shareus-admanager/0530423619/GcCXsOwHUO/H',
      ['Responsive'],
      'shareus-admanager-0530423619-GcCXsOwHUO'
    );
  });
};

document.head.appendChild(script);
