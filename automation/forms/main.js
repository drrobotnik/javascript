// auto fill out form
function autoFill() {
    document.querySelector(".name").value = "J Moore";
    document.querySelector(".email").value = "jmoore@yourfindings.com";
    document.querySelector(".comment").value = "This form was filled out and submitted with Javascript";
    console.log("Form autofilled")
}

// submit form
function formSubmit() {
    let btn = document.querySelector('.submit-btn');

    btn.addEventListener('click', function () {
        // alert('Information Submitted');
        console.log("Submit button clicked")
    });

    let clickEvent = new Event('click');
    btn.dispatchEvent(clickEvent);
}

function clearForm() {
    document.querySelector(".form").reset();
    console.log("Form reset")
}

// main
autoFill();
formSubmit();