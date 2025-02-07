




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
