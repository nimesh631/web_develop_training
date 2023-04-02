let submitButton = document.getElementById("submitButton");

let errors={};

submitButton.addEventListener("click",function(e){
    e.preventDefault();
    let signupform =document.forms["signupform"];
    // console.log(signupform);
    let firstnameinput=signupform.firstname;
    // console.log(firstnameinput.value);
    let lastnameinput=signupform.lastname;

    let emailinput=signupform.email;

    let passwordinput=signupform.password;

    if(firstnameinput.value ==""){
        errors.firstname="Firstname should not be empty"
        
    }

    if(lastnameinput.value ==""){
        errors.lastname="lastname should not be empty";     
    }

    if(emailinput.value ==""){
        errors.email="email should not be empty";     
    }

    if(passwordinput.value ==""){
        errors.password="password should not be empty ";     
    }
    
    if(passwordinput.value.length<=5){
        errors.password="password must be minimum of 5 length"; 
    }

    console.log(errors);
    for(let error in errors){
        let lastnamegroup=document.getElementById(`${error}group`);
        let lastnamemessage=document.querySelector( `#${error}group .message`);
        lastnamegroup.classList.add("error");
        lastnamemessage.textContent=errors[error];
    
    }

if(Object.keys(errors).length==0){
    signupform.submit();


}

});


