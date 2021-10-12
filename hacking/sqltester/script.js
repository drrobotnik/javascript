// const targetURL = document.getElementById('targetURL').onchange;
const singleTick = "'";

const results = document.getElementById("results");


function targetURL(input) {
    target = input.value;
}

// need some function to take targetURL, remove last number and replace with payload

// test url
// http://www.webscantest.com/datastore/search_get_by_id.php?id=1

async function testTarget() {
    results.innerHTML = "Testing...";
    try {
        response = await fetch(`https://cors.bridged.cc/${target}`);
        data = await response.text();
        console.log(data);
        console.log("Target: " + target);
    }
    catch (error) {
        console.log(error);
    }
    return;
}

// then search for text "error" or "syntax" in response body
    // if either are found then show fail with message else show pass with message
