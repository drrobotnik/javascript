// Set cors proxy url
// const proxy = "https://cors.bridged.cc/";
const proxy = "https://api.codetabs.com/v1/proxy?quest=";
// const proxy = "https://crossorigin.me/";

// Set variables for payloads
const singleTick = "'";
const doubleQuote = '"';
const logic = "1+1";

const results = document.getElementById("results");
const output = document.getElementById("output");

// input validation
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

function getDate() {
    const date = new Date();
    date.textContent = date.toDateString() + ' ' + date.toLocaleTimeString('en-US');
    output.innerHTML = date.textContent;
}


// Get user input url
function getURL(input) {
    target = input.value;
    console.log("Target:" + target);

    return target;
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
    output.innerHTML = "Target: " + target + "<br><br>";
    option1();
    option2();
    option3();
    output.insertAdjacentHTML("beforeend", "Testing..." + "<br><br>");
    results.innerHTML = "Testing...";
    try {
        response = await fetch(payload);
        data = await response.text();
        output.insertAdjacentText("beforeend", data);
    }
    catch (error) {
        results.innerHTML = error;
        output.insertAdjacentText("beforeend", error);
        console.log(error);
    }
    return;
}

// then search for text "error" or "syntax" in response body
    // if either are found then show fail with message else show pass with message
