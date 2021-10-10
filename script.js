// Load Landing Page
function initialLoad() {
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", 'templates/landing.html');
    xhttp.send();
    xhttp.onload = function () { template.innerHTML = xhttp.responseText }
};

initialLoad();

// Set active class
// var header = document.getElementById("menu");
// var links = header.getElementsByClassName("links");
// for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// };

// Load external HTML files
function loadHtml(id, filename) {
    console.log(`div id: ${id}, filename: ${filename}`);

    let xhttp;
    let element = document.getElementById(id);
    let file = filename;

    if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) { element.innerHTML = this.responseText; }
                if (this.status == 404) { element.innerHTML = "<h1>Page not found</h1>"; }
            }
        }
        xhttp.open("GET", `templates/${file}`, true);
        xhttp.send();
        return;
    }
}



/* Show time */
function formatDate() {
    const dateNode = document.getElementById('showDate');
    setInterval(() => {
        const date = new Date();
        dateNode.textContent = date.toDateString() + ' ' + date.toLocaleTimeString('en-US');
    }, 1000);
}

formatDate();