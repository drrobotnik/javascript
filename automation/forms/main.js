// typewriter effect
let a = 0;
let b = 0;
let c = 0;
let nameTxt = "J Moore";
let emailTxt = "jmoore@yourfindings.com";
let commentTxt = "This form was filled out and submitted with Javascript.";
let speed = 100;


function autoFill() {
    return new Promise((resolve) => {
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
        }
        resolve();
    });
}

// auto fill out form
// function autoFill() {
//     document.querySelector(".name").value = "J Moore";
//     document.querySelector(".email").value = "jmoore@yourfindings.com";
//     document.querySelector(".comment").value = "This form was filled out and submitted with Javascript";
//     console.log("Form autofilled")
// }

// submit form
function formSubmit() {
    return new Promise((resolve) => {
        let btn = document.querySelector('.submit-btn');

        btn.addEventListener('click', function () {
            // alert('Information Submitted');
            console.log("Submit button clicked")
        });

        let clickEvent = new Event('click');
        btn.dispatchEvent(clickEvent);

        resolve();

    });
}

function clearForm() {
    document.querySelector(".form").reset();
    console.log("Form reset")
}

// main
autoFill().then(formSubmit());