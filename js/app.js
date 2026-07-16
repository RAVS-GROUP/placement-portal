// ==========================================
// UDAYAN CARE CAREER PORTAL
// Google Sheet Integration
// ==========================================

const scriptURL = "https://script.google.com/macros/s/AKfycbznSxz0Yo9QbfswPa3McNsVfy3rIWE2aP6-ns5tAwvyo0T5CG7Zn4uMqrgazVoeLdjuEg/exec";

nextBtn.addEventListener("click", function () {

    // Last Step = Submit

    if (currentStep === steps.length - 1) {

        submitForm();

    }

});



function submitForm() {

    if (!document.getElementById("declaration").checked) {

        alert("Please accept declaration.");

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


    fetch(scriptURL, {

        method: "POST",

        body: JSON.stringify(data)

    })

    .then(response => response.json())

    .then(result => {

        if (result.status === "success") {

            alert("Registration Successful!");

            document.getElementById("candidateForm").reset();

            location.reload();

        } else {

            alert("Error : " + result.message);

        }

    })

    .catch(error => {

        alert("Connection Failed");

        console.log(error);

    });

}
