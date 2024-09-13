function includeHTML() {
    let z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /* Search for elements with a certain attribute: */
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        /* Insert the response text into the element */
                        elmnt.innerHTML = this.responseText;

                        /* Process CSS and JS tags */
                        processScriptsAndStyles(elmnt);

                        /* Remove the attribute, and call this function once more: */
                        elmnt.removeAttribute("include-html");
                        includeHTML();
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

/* Function to process <script> and <link> tags */
function processScriptsAndStyles(elmnt) {
    /* Process <script> tags */
    let scripts = elmnt.getElementsByTagName("script");
    for (let script of scripts) {
        let newScript = document.createElement("script");
        if (script.src) {
            newScript.src = script.src; // External script
        } else {
            newScript.text = script.innerHTML; // Inline script
        }
        document.head.appendChild(newScript); // Append to head or body
        script.parentNode.removeChild(script); // Remove the original script tag
    }

    /* Process <link> tags for CSS */
    let links = elmnt.getElementsByTagName("link");
    for (let link of links) {
        if (link.rel === "stylesheet") {
            let newLink = document.createElement("link");
            newLink.rel = "stylesheet";
            newLink.href = link.href;
            document.head.appendChild(newLink); // Append to head
            link.parentNode.removeChild(link); // Remove the original link tag
        }
    }
}


