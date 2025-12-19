(function () {
    // Banner container
    var adDiv = document.createElement("div");
    adDiv.style.position = "fixed";
    adDiv.style.top = "0";
    adDiv.style.left = "0";
    adDiv.style.width = "100%";
    adDiv.style.height = "90px";
    adDiv.style.zIndex = "999999";
    adDiv.style.backgroundColor = "#ffffff";
    adDiv.style.textAlign = "center";

    // atOptions global
    window.atOptions = {
        key: "d989003ea8480512c7e859e4a01a08d2",
        format: "iframe",
        height: 90,
        width: 728,
        params: {}
    };

    // Ad script
    var adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.src = "//www.highperformanceformat.com/d989003ea8480512c7e859e4a01a08d2/invoke.js";

    adDiv.appendChild(adScript);

    // Body ke top me inject
    document.addEventListener("DOMContentLoaded", function () {
        document.body.prepend(adDiv);

        // Content hide na ho isliye margin
        document.body.style.marginTop = "90px";
    });
})();