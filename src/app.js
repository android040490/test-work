import "./styles/main.sass";
import * as jQuery from "jquery";


$(function(){
    
    $('#forgot-pass').mouseenter(function(){
            $('.facebook-login__facebook-icon svg').addClass("zoom-icon");
    });
    $('#forgot-pass').mouseleave(function(){
        $('.facebook-login__facebook-icon svg').removeClass("zoom-icon");
});


    // Forms validation
    var emailValid = false;
    var passValid = false;

    
    function validationForm(event){
        var elementForm = $(event.target);
        var elementValue = elementForm.val();
        
        if( elementForm.attr('type') == "email"){
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test( elementForm.val())){
                emailValid = true;
                elementForm.css({'border' : '2px solid rgb(47, 197, 47)'});
            } else{
                emailValid = false;
                elementForm.css({'border' : '2px solid rgb(200, 0, 0)'});
            };
        } else{
            
            if( elementValue.length > 1 ){
                passValid = true;
                elementForm.css({'border' : '2px solid rgb(47, 197, 47)'});
            } else{
                passValid = false;
                elementForm.css({'border' : '2px solid rgb(200, 0, 0)'});
            }
        }
        if (emailValid && passValid){
            $(".authorization-form__button input").addClass( "active-btn").removeAttr('disabled');
        
        } else {
            $(".authorization-form__button input").removeClass( "active-btn").attr('disabled', 'disabled');
        };
    };

    $("input[type='password'], input[type='email']").on("input", validationForm);
    
    
});