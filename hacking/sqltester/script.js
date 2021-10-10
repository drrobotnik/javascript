const targetURL = document.getElementById("targetURL").value;
const results = document.getElementById("results");


function testTarget() {
    results.innerHTML = "Testing....";
    try {
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) { results.innerHTML = this.responseText; }
                if (this.status == 404) { results.innerHTML = "<h1>Page not found</h1>"; }
            }
        }
        xhr.open("GET", "https://www.google.com", true);
        xhr.responseType = "document";
        xhr.send();
        console.log(xhr)
        return;
    } catch (error) {
        console.log(error);
    }
}
