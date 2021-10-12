const targetURL = document.getElementById('targetURL').value;
const singleTick = "'";

const url = `https://cors.bridged.cc/${targetURL}`;
const results = document.getElementById("results");

// need some function to take targetURL, remove last number and replace with payload


async function testTarget() {
    results.innerHTML = "Testing...";
    try {
        response = await fetch("https://cors.bridged.cc/http://www.webscantest.com/datastore/search_get_by_id.php?id=1");
        data = await response.text();
        console.log(data);
        console.log(targetURL.value);
    }
    catch (error) {
        console.log(error);
    }
}

// then search for text "error" or "syntax" in response body
    // if either are found then show fail with message else show pass with message
