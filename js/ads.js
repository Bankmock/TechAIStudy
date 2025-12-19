(function () {
    document.addEventListener("DOMContentLoaded", function () {

        /* ================= TOP FIXED BANNER ================= */
        var topBanner = document.createElement("div");
        topBanner.style.position = "fixed";
        topBanner.style.top = "0";
        topBanner.style.left = "0";
        topBanner.style.width = "100%";
        topBanner.style.height = "90px";
        topBanner.style.zIndex = "999999";
        topBanner.style.background = "#fff";
        topBanner.style.textAlign = "center";

        window.atOptions = {
            key: "d989003ea8480512c7e859e4a01a08d2",
            format: "iframe",
            height: 90,
            width: 728,
            params: {}
        };

        var topScript = document.createElement("script");
        topScript.src = "//www.highperformanceformat.com/d989003ea8480512c7e859e4a01a08d2/invoke.js";
        topBanner.appendChild(topScript);

        document.body.prepend(topBanner);
        document.body.style.marginTop = "90px";


        /* ================= CSS FOR H1 ADS ================= */
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


        /* ================= H1 ABOVE ADS ================= */
        var h1 = document.querySelector("h1");
        if (!h1) return;

        var adsContainer = document.createElement("div");
        adsContainer.className = "ads-container";

        /* ----- First Ad ----- */
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

        /* ----- Second Ad ----- */
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

        h1.parentNode.insertBefore(adsContainer, h1);

    });
})();