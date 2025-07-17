// In-Page Ads
(function() {
  const script1 = document.createElement('script');
  script1.src = 'https://richinfo.co/richpartners/in-page/js/richads-ob.js?pubid=952603&siteid=355035';
  script1.async = true;
  document.head.appendChild(script1);
})();

// Push Ads (module script)
(function() {
  const script2 = document.createElement('script');
  script2.src = 'https://richinfo.co/richpartners/push/js/rp-cl-ob.js?pubid=952603&siteid=355037&niche=33';
  script2.type = 'module';
  script2.async = true;
  script2.setAttribute('data-cfasync', 'false');
  document.head.appendChild(script2);
})();

// Popunder Ads
(function() {
  const script3 = document.createElement('script');
  script3.src = 'https://richinfo.co/richpartners/pops/js/richads-pu-ob.js';
  script3.async = true;
  script3.setAttribute('data-pubid', '952603');
  script3.setAttribute('data-siteid', '357344');
  script3.setAttribute('data-cfasync', 'false');
  document.head.appendChild(script3);
})();