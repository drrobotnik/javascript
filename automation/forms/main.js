// typewriter effect
let a = 0;
let b = 0;
let c = 0;
let nameTxt = "J Moore";
let emailTxt = "jmoore@yourfindings.com";
let commentTxt = "This form was filled out and submitted with Javascript.";
let speed = 100;
let btn = document.querySelector('.submit-btn');

btn.addEventListener('click', function (event) {
    // alert('Information Submitted');
    event.preventDefault();
    console.log("Submit button clicked");
    clearForm();
});

function autoFill() {
    console.log("Autofilling form...")
    if (a < nameTxt.length) {
        document.getElementById("name").value += nameTxt.charAt(a);
        a++;
        setTimeout(autoFill, speed);
    }
    else if (b < emailTxt.length) {
        document.getElementById("email").value += emailTxt.charAt(b);
        b++;
        setTimeout(autoFill, speed);
    }
    else if (c < commentTxt.length) {
        document.getElementById("comment").value += commentTxt.charAt(c);
        c++;
        setTimeout(autoFill, speed);
    }else{
        btn.click();
    }
}

// auto fill out form
// function autoFill() {
//     document.querySelector(".name").value = "J Moore";
//     document.querySelector(".email").value = "jmoore@yourfindings.com";
//     document.querySelector(".comment").value = "This form was filled out and submitted with Javascript";
//     console.log("Form autofilled")
// }

function clearForm() {
    document.querySelector(".form").reset();
    console.log("Form reset")
}

// main
autoFill();