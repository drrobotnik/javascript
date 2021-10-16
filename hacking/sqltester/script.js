// Set cors proxy url
// doesnt work
// const proxy = "https://cors.bridged.cc/";

// works
// const proxy = https://api.codetabs.com/v1/proxy?quest=

// doesnt work
// const proxy = "https://crossorigin.me/";

// Set variables for payloads
const singleTick = "'";
const doubleQuote = '"';
const logic = "1+1";

const results = document.getElementById("results");
const output = document.getElementById("output");
const outputProof = document.getElementById("output");
const outputResults = document.getElementById("output");


// input validation (doesnt work)
function inputValidation(input) {
    let validURL;
    if (document.getElementById("getURL").value.length == 0) {
        output.innerHTML = "Please enter in a target URL.";
    }
    try {
        validURL = new URL(input);
    } catch (error) {
        return false;
    }
    return validURL.protocol === "http:" || validURL.protocol === "https:";
}

// get date
function getDate() {
    const date = new Date();
    date.textContent = date.toDateString() + ' ' + date.toLocaleTimeString('en-US');
    output.innerHTML = "Scan time: " + date.textContent + "<br><br>";
}


// Get user input url
function getURL(input) {
    target = input.value;

    console.log("Target:" + target);
    return target;
}

// toggle switches so only 1 can be active at a time (doesnt work)
const option1Toggle = document.getElementById("1");
const option2Toggle = document.getElementById("2");
const option3Toggle = document.getElementById("3");
const option4Toggle = document.getElementById("4");

const resettableElements = [
    option1Toggle,
    option2Toggle,
    option3Toggle,
    option4Toggle,
];

function toggleElement(element) {
    resettableElements.forEach((node) => {
        node.style.display = "none";
    });
    element.style.display = "block";
}

function toggleOption1() {
    toggleElement(option1Toggle);
}

function toggleOption2() {
    toggleElement(option2Toggle);
}

function toggleOption3() {
    toggleElement(option3Toggle);
}

function toggleOption4() {
    toggleElement(option4Toggle);
}

// set proxy for cors
function getProxy() {
    if (document.getElementById("proxy").value.length == 0) {
        output.innerHTML = "Please enter in a proxy.";
        return;
    } else {
        proxy = document.getElementById("proxy").value;
        console.log("Proxy: " + proxy);
        return proxy;
    }
}

// If first payload is checked
function option1() {
    if (document.getElementById("1").checked) {
        payload = proxy + target + singleTick;
        output.insertAdjacentHTML('beforeend', 'Payload: ' + singleTick + "<br><br>")
        console.log("Payload: " + singleTick);
        console.log("Testing: " + payload);
    }
}

// If 2nd payload is checked
function option2() {
    if (document.getElementById("2").checked) {
        payload = proxy + target + doubleQuote;
        output.insertAdjacentHTML('beforeend', 'Payload: ' + doubleQuote + "<br><br>")
        console.log("Payload: " + doubleQuote);
        console.log("Testing: " + payload);
    }
}

// If 3rd payload is checked
function option3() {
    if (document.getElementById("3").checked) {
        payload = proxy + target + logic;
        output.insertAdjacentHTML('beforeend', 'Payload: ' + logic + "<br><br>")
        console.log("Payload: " + logic);
        console.log("Testing: " + payload);
    }
}

// Get custom payload
function getCustomPayload(custom) {
    customPayload = custom.value;
    console.log("Payload: " + customPayload);
}

// If custom option is checked
function option4() {
    if (document.getElementById("4").checked) {
        payload = proxy + target + customPayload;
        output.insertAdjacentHTML('beforeend', 'Payload: ' + customPayload + "<br><br>");
    }
}

// output results to test  section
function resultsProof() {
    output.insertAdjacentHTML("beforeend", "Proof: " + "<br><br>");
}

// output final results to test section
function resultsResults() {
    output.insertAdjacentHTML("beforeend", "Results: ")
}

// Show testing status spinner
function showLoading() {
    testing = document.getElementById("testing");
    if (testing.style.display === "none") {
        testing.style.display = "flex";
    } else {
        testing.style.display = "none";
    }
}
showLoading();

//Print function
function printReport() {

}

// Download function
function downloadReport(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
document.getElementById("download-btn")
    .addEventListener("click", function () {
        var text = output;
        var filename = "SqlTest.txt";
        downloadReport(filename, text);
    })


// test url
// http://www.webscantest.com/datastore/search_get_by_id.php?id=1

async function testTarget() {
    getDate();
    inputValidation();
    output.insertAdjacentHTML("beforeend", "Target: " + target + "<br><br>");
    getProxy();
    option1();
    option2();
    option3();
    option4();
    output.insertAdjacentHTML("beforeend", "Proxy: " + proxy + "<br><br>")
    showLoading();
    try {
        response = await fetch(payload);
        output.insertAdjacentHTML("beforeend", "Response Code: " + response.status + "<br><br>");
        data = await response.text();
        output.insertAdjacentHTML("beforeend", "Response Body:" + "<br><br>");
        output.insertAdjacentText("beforeend", data);
        output.insertAdjacentHTML("beforeend", "<br><br>");
        resultsProof();
        resultsResults();
    }
    catch (error) {
        showLoading();
        output.insertAdjacentText("beforeend", error);
        console.log(error);
    }
    showLoading();
    return;
}

// then search for text "error" or "syntax" in response body
    // if either are found then show fail with message else show pass with message
