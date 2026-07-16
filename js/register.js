// ==========================================
// UDAYAN CARE CAREER PORTAL
// Candidate Registration JS
// ==========================================


let currentStep = 0;


const steps = document.querySelectorAll(".form-step");

const indicators = document.querySelectorAll(".step");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

const progressBar = document.getElementById("progressBar");



// Initial Load

showStep(currentStep);



// NEXT BUTTON

nextBtn.addEventListener("click", function () {

    if (currentStep < steps.length - 1) {

        currentStep++;
        showStep(currentStep);

    } else {

        submitForm();

    }

});




// PREVIOUS BUTTON

prevBtn.addEventListener("click", function(){

    if(currentStep > 0){

        currentStep--;

        showStep(currentStep);

    }

});





// SHOW STEP FUNCTION

function showStep(step){


    // Hide all steps

    steps.forEach(function(item){

        item.classList.remove("active");

    });



    // Remove active indicator

    indicators.forEach(function(item){

        item.classList.remove("active");

    });



    // Show current step

    steps[step].classList.add("active");



    // Active step number

    indicators[step].classList.add("active");



    // Update progress

    let progress = ((step + 1) / steps.length) * 100;


    progressBar.style.width = progress + "%";



    // Button control


    if(step === 0){

        prevBtn.style.display="none";

    }

    else{

        prevBtn.style.display="inline-block";

    }



    if(step === steps.length - 1){

        nextBtn.innerHTML="Submit";

    }

    else{

        nextBtn.innerHTML="Next";

    }



}
