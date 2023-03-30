let submitButton = document.getElementById("submitButton");

let errors={};

submitButton.addEventListener("click",function(e){
    e.preventDefault();
    let signupform =document.forms["signupform"];
    // console.log(signupform);
    let firstnameinput=signupform.firstname;
    // console.log(firstnameinput.value);
    let lastnameinput=signupform.lastname;

    if(firstnameinput.value ==""){
        errors.firstname="Firstname should not be empty"
        
    }

    if(lastnameinput.value ==""){
        errors.lastname="lastname should not be empty";     
    }
    console.log(errors);
    for(let error in errors){

    }
});


// let lastnamegroup=document.getElementById("lastnamegroup");
// let lastnamemessage=document.querySelector("#lastnamegroup .message");
// lastnamegroup.classList.add("error");
// lastnamemessage.textContent="lastname should not be empty";