const SCRIPT_URL = "YAHAN_APNA_WEB_APP_URL_PASTE_KARO";


document
.getElementById("candidateForm")
.addEventListener("submit", function(e){


    e.preventDefault();



    let candidateData = {


        candidate_id:
        "C" + Date.now(),


        full_name:
        document.getElementById("full_name").value,


        mobile:
        document.getElementById("mobile").value,


        email:
        document.getElementById("email").value,


        gender:
        document.getElementById("gender").value,


        dob:
        document.getElementById("dob").value,


        state:
        document.getElementById("state").value,


        district:
        document.getElementById("district").value,


        pincode:
        document.getElementById("pincode").value,


        qualification:
        document.getElementById("qualification").value,


        course:"",
        passing_year:"",
        experience_type:"",
        experience_years:"",
        previous_company:"",
        previous_role:"",
        job_role:"",
        location:"",
        salary:"",
        preference:"Job",
        resume:""


    };



    fetch(SCRIPT_URL, {


        method:"POST",


        body:JSON.stringify(candidateData)


    })


    .then(response=>response.json())


    .then(data=>{


        document.getElementById("message").innerHTML =

        `
        <div class="alert alert-success">
        Registration Successful!
        </div>
        `;


        document.getElementById("candidateForm").reset();


    })


    .catch(error=>{


        document.getElementById("message").innerHTML =

        `
        <div class="alert alert-danger">
        Something went wrong!
        </div>
        `;


        console.log(error);


    });



});
