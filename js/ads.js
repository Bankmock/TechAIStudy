
    	(function () {
    	
    const today = new Date().toISOString().split('T')[0];
    const STORAGE_KEY_DATE = 'ads_shown_date';
    const STORAGE_KEY_SHOWN = 'ads_shown_today';

    const adNetworks = {
        adnet1: {
            top: `<div style="background:#fdd;padding:10px;text-align:center;"><div class="admoloBanner" data-publisher="eyJpdiI6IndsMmFUZ0VrbGg5VG5UTG1OOXJnT3c9PSIsInZhbHVlIjoiVys3OFVMMDhxVk54aDdkWDluSGlFdz09IiwibWFjIjoiOGVjYWRiMDhlZTYxN2YxYTA5YzlkNDEyNmMzMDgyMjgzYWZmNDNkMmM2NDMzMDRkOWMzMWQyNGExOTg2OWM5YyIsInRhZyI6IiJ9" data-adsize="560x315"></div></div>`,
            mid: `<div style="background:#fbb;padding:10px;text-align:center;"><div class="admoloBanner" data-publisher="eyJpdiI6IkM2MFdyTFVNa2c4ZGlyeG1FeUVFTXc9PSIsInZhbHVlIjoibVdIN0VqWjF5TnloVHkvUnRLZVpWUT09IiwibWFjIjoiMTAxYmZmZmQ1MWFlYTZjMGJhYjg4NGI2NTQ4OGI5NWFiMWUwODVhNTBiMTVhNjZmZjg4YmY4ZWNmMWNiMWIwMSIsInRhZyI6IiJ9" data-adsize="300x300"></div></div>`,
            bottom: `<div style="background:#faa;padding:10px;text-align:center;"><div class="admoloBanner" data-publisher="eyJpdiI6ImhjRWhCbTl2ZFBqSFZON1hSSHFQTnc9PSIsInZhbHVlIjoiTkEyUFhqVmNNLzhMbnNlMGZUV1lldz09IiwibWFjIjoiZmUxNjQxOWM3MzZlNTVhYTJhNTBiYTkxMWY4NGQxNTNkOTkwMjkzY2M3NjljN2Y0N2I4MzQ0YjU0MjI5YTgzNCIsInRhZyI6IiJ9" data-adsize="320x180"></div></div>`
        },
        adnet2: {
            top: `<div style="background:#dfd;padding:10px;text-align:center;"><a href="https://www.eonads.com" class="ex2" target="_blank">Ads by Eonads</a>
<ins class="e300x250" id="300x250" data-revive-hash="2b8c21aa488d1df45330671cabf4dd66" data-revive-zoneid="62211" data-revive-id="f87497be83f6ed6b52c3b340d803ae0d"></ins>
<script async src="//network.eonads.com/adserver/www/delivery/asyncjs.php"></script></div>`,
            mid: `<div style="background:#bfb;padding:10px;text-align:center;"><a href="https://www.eonads.com" class="ex5" target="_blank">Ads by Eonads</a>
<ins class="e336x280" id="336x280" data-revive-hash="2b8c21aa488d1df45330671cabf4dd66" data-revive-zoneid="62650" data-revive-id="f87497be83f6ed6b52c3b340d803ae0d"></ins>
<script async src="//network.eonads.com/adserver/www/delivery/asyncjs.php"></script></div>`,
            bottom: `<div style="background:#afa;padding:10px;text-align:center;"><a href="https://www.eonads.com" class="ex5" target="_blank">Ads by Eonads</a>
<ins class="e336x280" id="336x280" data-revive-hash="2b8c21aa488d1df45330671cabf4dd66" data-revive-zoneid="62772" data-revive-id="f87497be83f6ed6b52c3b340d803ae0d"></ins>
<script async src="//network.eonads.com/adserver/www/delivery/asyncjs.php"></script></div>`
        },
        adnet3: {
            top: `<div style="background:#ddf;padding:10px;text-align:center;"><iframe src="https://multiwall-ads.shop/videom.php?mwvideo=1470&size=180" scrolling="no" style="display:block !important;vertical-align: bottom !important;border: 0px !important;width: 320px !important;height: 180px !important;"></iframe></div>`,
            mid: `<div style="background:#bbf;padding:10px;text-align:center;">AdNet3 - Middle Ad</div>`,
            bottom: `<div style="background:#aaf;padding:10px;text-align:center;"><iframe src="https://multiwall-ads.shop/vbanner.php?mwbanner=1586&size=300" scrolling="no" style="display:block !important;vertical-align: bottom !important;border: 0px !important;width: 300px !important;height: 250px !important;"></iframe></div>`
        }
    };

    const fallbackAd = {
        top: `<div style="background:#333;color:#fff;padding:10px;text-align:center;"><script type="text/javascript">
	atOptions = {
		'key' : 'd989003ea8480512c7e859e4a01a08d2',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/d989003ea8480512c7e859e4a01a08d2/invoke.js"></script></div>`,
        mid: `<div style="background:#222;color:#fff;padding:10px;text-align:center;"><script type="text/javascript">
	atOptions = {
		'key' : 'f6a50813422437971b3b8f04a6d36d5b',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/f6a50813422437971b3b8f04a6d36d5b/invoke.js"></script></div>`,
        bottom: `<div style="background:#111;color:#fff;padding:10px;text-align:center;"><script async="async" data-cfasync="false" src="//pl25250725.profitableratecpm.com/2c5610f6e714632e87626d65ca558bbd/invoke.js"></script>
<div id="container-2c5610f6e714632e87626d65ca558bbd"></div></div>`
    };






    function resetDailyStorage() {
        const lastDate = localStorage.getItem(STORAGE_KEY_DATE);
        if (lastDate !== today) {
            localStorage.setItem(STORAGE_KEY_DATE, today);
            localStorage.setItem(STORAGE_KEY_SHOWN, JSON.stringify([]));
        }
    }

    function getShownNetworks() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY_SHOWN) || '[]');
    }

    function markAsShown(network) {
        const shown = getShownNetworks();
        shown.push(network);
        localStorage.setItem(STORAGE_KEY_SHOWN, JSON.stringify(shown));
    }

    function chooseNextNetwork() {
        const shown = getShownNetworks();
        for (const key in adNetworks) {
            if (!shown.includes(key)) return key;
        }
        return null;
    }

    function insertAds(topHTML, midHTML, bottomHTML) {
        // Top Ad after <body>
        const topAd = document.createElement('div');
        topAd.innerHTML = topHTML;
        document.body.insertBefore(topAd, document.body.firstChild);

        // Middle Ad after first <h1> not inside <header>
        const header = document.querySelector('header');
        const h1Tags = document.querySelectorAll('h1');
        for (let h1 of h1Tags) {
            if (!header || !header.contains(h1)) {
                const midAd = document.createElement('div');
                midAd.innerHTML = midHTML;
                h1.parentNode.insertBefore(midAd, h1.nextSibling);
                break;
            }
        }

        // Bottom Ad inside <div class="ads9">
        const ads9 = document.querySelector('.ads9');
        if (ads9) {
            const bottomAd = document.createElement('div');
            bottomAd.innerHTML = bottomHTML;
            ads9.appendChild(bottomAd);
        }
    }

    function runAds() {
        resetDailyStorage();

        const nextNetwork = chooseNextNetwork();

        if (nextNetwork) {
            const ads = adNetworks[nextNetwork];
            insertAds(ads.top, ads.mid, ads.bottom);
            markAsShown(nextNetwork);
        } else {
            insertAds(fallbackAd.top, fallbackAd.mid, fallbackAd.bottom);
        }
    }

    document.addEventListener("DOMContentLoaded", runAds);
})();
