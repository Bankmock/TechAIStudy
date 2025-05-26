function getBasePath() {
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean); // Split and remove empty segments

    // Remove the last segment if it's a file (has an extension like .html)  
    const lastSegment = segments[segments.length - 1];  
    const isFile = lastSegment && lastSegment.includes('.');  
    const depth = isFile ? segments.length - 1 : segments.length;  

    // Root or index.html case  
    if (path === '/') {  
        return "component/";  
    } else {  
        return "../component/";  
    }
}

// Function to load header and footer
function loadComponent(file, position) {
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML(position, data);
    })
    .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load components dynamically
document.addEventListener("DOMContentLoaded", function () {
    let basePath = getBasePath(); // Auto-detect base path
    loadComponent(basePath + "header.html", "afterbegin"); // Insert header
    loadComponent(basePath + "footer.html", "beforeend");  // Insert footer
});