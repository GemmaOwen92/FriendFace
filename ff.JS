"use strict"

function verifyEmail(email){
	var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
	if (pattern.test(email)) {
        alert("Valid");
        
    } else {
        // Set the class attribute value of the feedback element to change its colour
        alert("invalid email");
	}

}

function verifyDOB(DOB){
	var pattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
	
	if (pattern.test(DOB)) {
        alert("Valid");
        
    } else {
        // Set the class attribute value of the feedback element to change its colour
        alert("invalid date of birth");
	}

}
