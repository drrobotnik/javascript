// Set variables for payloads
const singleTick = "'";
const doubleQuote = '"';
const logic = "1+1";

const results = document.getElementById("results");
const output = document.getElementById("output");

// input validation
function inputValidation() {
    if (document.getElementById("getURL").value.length == 0) {
        output.innerHTML = "Please enter in a target URL.";
    }
}

// Get user input url
function getURL(input) {
    target = input.value;
    newURL = target.substring(0, target.length - 1);
    console.log(newURL);
    console.log(singleTick);
    console.log(doubleQuote);
    console.log(logic);
    return target;
}

// If first payload is checked
function option1() {
    payload = newURL + singleTick;
    output.insertAdjacentHTML('beforeend', 'Payload: ' + singleTick + "<br><br>")
    console.log("Payload: " + payload);
    return payload;
}

// If 2nd payload is checked
function option2() {
    payload = newURL + doubleQuote;
    output.insertAdjacentHTML('beforeend', 'Payload: ' + doubleQuote + "<br><br>")
    console.log("Payload: " + payload);
    return payload;
}

// If 3rd payload is checked
function option3() {
    payload = newURL + logic;
    output.insertAdjacentHTML('beforeend', 'Payload: ' + logic + "<br><br>")
    console.log("Payload: " + payload);
    return payload;
}

// Combine input from user and checked payload option
function Payload(url, payload) {
    target = url + payload;
}

// test url
// http://www.webscantest.com/datastore/search_get_by_id.php?id=1

async function testTarget() {
    inputValidation();
    output.innerHTML = "Target: " + target + "<br><br>";
    option3();
    results.innerHTML = "Testing...";
    try {
        response = await fetch(`https://cors.bridged.cc/${payload}`);
        data = await response.text();
        if (!data.ok) {
            results.innerHTML = "Something went wrong: " + response;
        }
        console.log(data);
    }
    catch (error) {
        results.innerHTML = error;
        output.insertAdjacentHTML("beforeend", error);
        console.log(error);
    }
    return;
}

// then search for text "error" or "syntax" in response body
    // if either are found then show fail with message else show pass with message
