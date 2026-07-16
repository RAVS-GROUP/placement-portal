// ======================================
// UDAYAN CARE CAREER PORTAL
// Google Sheet Integration
// ======================================

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbznSxz0Yo9QbfswPa3McNsVfy3rIWE2aP6-ns5tAwvyo0T5CG7Zn4uMqrgazVoeLdjuEg/exec";

nextBtn.addEventListener("click", function () {

    if (currentStep < steps.length - 1) {

        currentStep++;
        showStep(currentStep);

    } else {

        submitForm();

    }

});

async function submitForm() {

    if (!document.getElementById("declaration").checked) {

        alert("Please accept the declaration.");
        return;

    }

    const data = {

        fullName: document.getElementById("fullName").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        gender: document.getElementById("gender").value,
        dob: document.getElementById("dob").value,

        state: document.getElementById("state").value,
        district: document.getElementById("district").value,
        pincode: document.getElementById("pincode").value,

        qualification: document.getElementById("qualification").value,
        specialization: document.getElementById("specialization").value,
        passingYear: document.getElementById("passingYear").value,

        experienceType: document.getElementById("experienceType").value,
        totalExperience: document.getElementById("totalExperience").value,
        currentCompany: document.getElementById("currentCompany").value,
        designation: document.getElementById("designation").value,

        preferredRole: document.getElementById("preferredRole").value,
        preferredLocation: document.getElementById("preferredLocation").value,
        expectedSalary: document.getElementById("expectedSalary").value,
        lookingFor: document.getElementById("lookingFor").value

    };

    nextBtn.disabled = true;
    nextBtn.innerHTML = "Submitting...";

    try {

        const response = await fetch(SCRIPT_URL, {

            method: "POST",

            body: JSON.stringify(data),

            redirect: "follow"

        });

        const result = await response.json();

        if (result.status === "success") {

            alert("Registration Successful.");

            document.getElementById("candidateForm").reset();

            currentStep = 0;

            showStep(currentStep);

        } else {

            alert("Submission Failed");

            console.log(result);

        }

    } catch (error) {

        console.error(error);

        alert("Connection Failed");

    }

    nextBtn.disabled = false;
    nextBtn.innerHTML = "Submit";

}
