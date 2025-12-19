

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



(function () {
    document.addEventListener("DOMContentLoaded", function () {

        var h1 = document.querySelector("h1");
        if (!h1) return;

        /* ========== CSS Inject ========== */
        var style = document.createElement("style");
        style.innerHTML = `
            .ads-container {
                width: 100%;
                overflow-x: auto;
                display: flex;
                justify-content: center;
                gap: 10px;
                padding: 10px 0;
                box-sizing: border-box;
            }
            .ads-box {
                flex: 0 0 auto;
                text-align: center;
            }
            @media (max-width: 600px) {
                .ads-container {
                    flex-direction: column;
                    align-items: center;
                    overflow-x: hidden;
                }
                .ads-box {
                    width: 100%;
                }
            }
        `;
        document.head.appendChild(style);

        /* ========== Ads Container ========== */
        var adsContainer = document.createElement("div");
        adsContainer.className = "ads-container";

        /* ========== First Ad ========== */
        var adBox1 = document.createElement("div");
        adBox1.className = "ads-box";

        window.atOptions = {
            key: "3353fc740693589865911ed5c4e259c1",
            format: "iframe",
            height: 60,
            width: 468,
            params: {}
        };

        var script1 = document.createElement("script");
        script1.src = "//www.highperformanceformat.com/3353fc740693589865911ed5c4e259c1/invoke.js";

        adBox1.appendChild(script1);

        /* ========== Second Ad ========== */
        var adBox2 = document.createElement("div");
        adBox2.className = "ads-box";

        var script2 = document.createElement("script");
        script2.onload = function () {
            window.atOptions = {
                key: "b522989fcf5cdf1fbc5167845934a0a9",
                format: "iframe",
                height: 50,
                width: 320,
                params: {}
            };
        };
        script2.src = "//www.highperformanceformat.com/b522989fcf5cdf1fbc5167845934a0a9/invoke.js";

        adBox2.appendChild(script2);

        adsContainer.appendChild(adBox1);
        adsContainer.appendChild(adBox2);

        /* ========== Inject Above H1 ========== */
        h1.parentNode.insertBefore(adsContainer, h1);
    });
})();
