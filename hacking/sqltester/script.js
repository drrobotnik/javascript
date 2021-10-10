const targetURL = document.getElementById("targetURL").value;
const results = document.getElementById("results");

// gets data from API and sets the content of #result div
async function testTarget() {
    results.innerHTML = "Testing....";
    try {
        const res = await fetch("https://api.github.com/users/gulshansainis");
        const data = await res;

        console.log(data);
        results.innerText = JSON.stringify(data);
    } catch (error) {
        console.log(error);
    }
}


// add event listener for #fetchdata button
// targetURL.addEventListener("click", testTarget);
