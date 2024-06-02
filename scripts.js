let mainContainer = document.getElementById("main-container");
let thanks = document.getElementById("thanks-container");
let submit = document.getElementById ("submit");
let thankSubmit = document.getElementById("thanks-button");
let error = document.getElementById("error");
let eMail = document.querySelector("#email");

function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
  }

submit.addEventListener("click", ()=> {
    
    if (validateEmail(eMail.value)) {
        mainContainer.style.display= "none";
        thanks.style.display="block";
    } else {
        error.style.display = "flex";
        eMail.classList.add("input-error");
    }

})

thankSubmit.addEventListener("click", ()=>{
    mainContainer.style.display= "flex";
    thanks.style.display="none";
})