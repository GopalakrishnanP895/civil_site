const menuItems     = $('.nav-link');

//menu toggle between hamburger and close icon
$('#menu_btn').on('click',(e) => {
    hideAndShowElement($('.navbar-toggler-icon'));
    hideAndShowElement($('.close_icon'));
});

//menu items click event
menuItems.on('click', (e) => {
    menuItems.removeClass('active_menu');   
    $(e.target).toggleClass('active_menu');
    $('.navbar-collapse.collapse').removeClass('show');
    hideAndShowElement($('.navbar-toggler-icon'));
    hideAndShowElement($('.close_icon'));
});

//menu icon hiding operations
function hideAndShowElement(element){
        
    if(element.hasClass('d-block')){
        element.removeClass('d-block')
        element.addClass('d-none')
    }else{
        element.removeClass('d-none')
        element.addClass('d-block')
    }
}

//validate email
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validateForm = (e, callback) => {
    
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
const submitForm = () =>{
    let contactForm   = $('#user_query_form').serialize();
    $("#user_query_form").html("<p class='form_submission_text'>Thanks for contacting us our executives will get back to you shortly</p>");
    
    // $.ajax({
    //     type: "POST",
    //     url: "test.php",
    //     data: contactForm,
    //     success: function (t) {
    //         console.log("Submission was successful."), $("#user_query_form").text("Thanks for contacting us our executives will get back to you shortly");
    //     },
    //     error: function (t) {
    //         console.log("An error occurred."), console.log(t);
    //     },
    // });

}

//contact form valdation and send email
$('#contact_form_submit').on('click', (e) => {
    validateForm(e, submitForm);
});