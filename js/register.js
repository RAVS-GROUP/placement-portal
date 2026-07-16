/* ==========================================
   UDAYAN CARE CAREER PORTAL
   Candidate Registration Wizard
   Developed By: Shubham Sharma
========================================== */

const formSteps = document.querySelectorAll(".form-step");
const stepIndicators = document.querySelectorAll(".step");
const progressBar = document.getElementById("progressBar");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentStep = 0;

// -------------------------------
// Show Current Step
// -------------------------------

function showStep(step){

    // Hide all steps
    formSteps.forEach((form)=>{
        form.classList.remove("active");
    });

    // Show current step
    formSteps[step].classList.add("active");

    // Update top circles
    stepIndicators.forEach((item,index)=>{

        if(index<=step){
            item.classList.add("active");
        }
        else{
            item.classList.remove("active");
        }

    });

    // Progress Bar
    let percent=((step+1)/formSteps.length)*100;

    progressBar.style.width=percent+"%";

    // Previous Button

    if(step===0){

        prevBtn.style.display="none";

    }else{

        prevBtn.style.display="inline-block";

    }

    // Next Button

    if(step===formSteps.length-1){

        nextBtn.innerHTML="Submit";

    }else{

        nextBtn.innerHTML="Next →";

    }

}

showStep(currentStep);

// -------------------------------
// Next Button
// -------------------------------

nextBtn.addEventListener("click",function(){

    // Last Step

    if(currentStep===formSteps.length-1){

        alert("Form Submitted Successfully.");

        return;

    }

    currentStep++;

    showStep(currentStep);

});

// -------------------------------
// Previous Button
// -------------------------------

prevBtn.addEventListener("click",function(){

    if(currentStep===0) return;

    currentStep--;

    showStep(currentStep);

});
