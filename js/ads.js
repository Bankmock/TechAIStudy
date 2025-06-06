
(function () {
  document.addEventListener('DOMContentLoaded', function () {
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




(function () {
  document.addEventListener('DOMContentLoaded', function () {
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
(function () {
  document.addEventListener('DOMContentLoaded', function () {
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
