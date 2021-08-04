//validate email
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function addErrorClass(element){
    element.addClass('is-invalid')
    return true;
}

function removeErrorClass(element){
    element.removeClass('is-invalid');
    return false;
}

function validateForm (e, callback){
    
    e.preventDefault();

    let name    = $('#name');
    let mobile  = $('#mobile');
    let email   = $('#email');
    let service = $('#cservice');

    //validate name
    let hasnameError = name.val().length < 3 ? addErrorClass(name) : removeErrorClass(name);

    //validate mobile
    let hasMobileError = mobile.val().length < 10 ? addErrorClass(mobile) : removeErrorClass(mobile);

    //validate email
    let hasEmailError  = email.val().length < 0 || email.val() === '' ? '' 
    : !validateEmail(email.val()) ? addErrorClass(email) : removeErrorClass(email); 

    //validate service
    let hasServiceError = service.val() === '' ? addErrorClass(service) : removeErrorClass(service);
    
    if(!hasnameError && !hasMobileError && !hasEmailError && !hasServiceError)
        callback();
}

//submission of forms
function submitForm(){
    let contactForm   = $('#user_query_form').serialize();
    
    
    $.ajax({
        type: "POST",
        url: "./assests/helper/email.php",
        data: contactForm,
        success: function (res) {
            console.log("Submission was successful.");
            $(".form_submission_text").addClass('d-block');
        },
        error: function (res) {
            console.log("An error occurred.");
            console.log(res);
        },
    });

}

//contact form valdation and send email
$('#contact_form_submit').on('click', (e) => {
    validateForm(e, submitForm);
});
