import "./styles/main.sass";
import * as jQuery from "jquery";


$(function(){
    $('#forgot-pass').mouseenter(function(){
        $('.facebook-login__facebook-icon').animate({ height : "130%"}, 300);
    })
    $('#forgot-pass').mouseleave(function(){
        $('.facebook-login__facebook-icon').animate({ height : "100%"}, 300);
    })

    // Forms validation
    var emailValid = false;
    var passValid = false;

    $("input[type='email']").keypress(function() {
        
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test( $(this).val())){
                emailValid = true;
                $(this).css({'border' : '2px solid rgb(47, 197, 47)'});
            } else{
                $(this).css({'border' : '2px solid rgb(200, 0, 0)'});
            };
        };
        if (emailValid && passValid){
            $(".authorization-form__button input").css( {'background': 'rgb(32, 70, 197)'})
        }
    });
    $("input[type='password']").keypress(function() {
        if($(this).val() != '') {
            if($(this).val.length > 0){
                passValid = true;
                $(this).css({'border' : '2px solid rgb(47, 197, 47)'});
            } else{
                $(this).css({'border' : '2px solid rgb(200, 0, 0)'});
            };
        
        };
        if (emailValid && passValid){
            $(".authorization-form__button input").css( {'background': 'rgb(32, 70, 197)'})
        };
    });
    
});