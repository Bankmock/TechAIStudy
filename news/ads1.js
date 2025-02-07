
document.addEventListener("DOMContentLoaded", function () {
    let admoloBanner = document.createElement("div");

    // Add class
    admoloBanner.className = "admoloBanner";

    // Add attributes
    admoloBanner.setAttribute("data-publisher", "eyJpdiI6InRKZVVNakhWRHV4bkdTTVpVaU5Pbnc9PSIsInZhbHVlIjoicGN0VGN6VDlYK1o2Q1RJTCt3elo5dz09IiwibWFjIjoiOTgwZDk5MjlkYTA2OTg5ODYwZWNkMGM2ZDg5YmI5YjFmYjRhOTY4OWUxZTZhOGZjZGE1ZWE4MjZlNWU3NmYwMyIsInRhZyI6IiJ9");
    admoloBanner.setAttribute("data-adsize", "300x300");

    // Append to body or a specific container
    document.body.appendChild(admoloBanner);
});




(function () {
    var d = 'groleegni.net';
    var z = 8868889;
    var s = document.createElement('script');
    s.src = 'https://' + d + '/401/' + z;
    
    s.onload = function() {
        console.log('Script loaded successfully.');
    };

    s.onerror = function() {
        console.error('Failed to load script.');
    };

    try {
        (document.body || document.documentElement).appendChild(s);
    } catch (e) {
        console.error('Error appending script:', e);
    }
})();
