document.getElementById("biodataForm").addEventListener("submit", function(e) {

    var fullname = document.getElementById("fullname").value.trim();
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
    var year = document.getElementById("year").value;

    if(fullname === "") {
        alert("Full Name is required");
        e.preventDefault();
        return;
    }

    if(dob === "") {
        alert("Date of Birth is required");
        e.preventDefault();
        return;
    }

    if(email === "") {
        alert("Email is required");
        e.preventDefault();
        return;
    }

    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)) {
        alert("Enter valid email");
        e.preventDefault();
        return;
    }

    if(mobile.length !== 11 || isNaN(mobile)) {
        alert("Enter valid 11 digit mobile number");
        e.preventDefault();
        return;
    }

    if(year === "" || year < 1950 || year > 2026) {
        alert("Enter valid passing year");
        e.preventDefault();
        return;
    }

    alert("Form Submitted Successfully!");
});