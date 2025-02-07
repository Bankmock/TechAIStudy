(function () {
    var d = "gizokraijaw.net";
    var z = 8868898;
    var s = document.createElement("script");
    s.src = "https://" + d + "/401/" + z;

    try {
        (document.body || document.documentElement).appendChild(s);
    } catch (e) {
        console.error("Script injection failed:", e);
    }
})();
