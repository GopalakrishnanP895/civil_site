//validate email
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateForm (e, callback){
    
    e.preventDefault();

    let name    = $('#name');
    let email   = $('#email');
    let message = $('#message');

    //validate name
    name.val().length < 3 ? name.addClass('is-invalid') : name.removeClass('is-invalid')

    //validate email
    email.val().length < 0|| !validateEmail(email.val()) ? email.addClass('is-invalid') : email.removeClass('is-invalid');

    //validate message
    message.val().length < 5 ? message.addClass('is-invalid') : message.removeClass('is-invalid');
    
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
            $("#user_query_form").html("<p class='form_submission_text animate__animated animate__fadeIn'>Thanks for contacting us our executives will get back to you shortly</p>");
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