
//
// Scrip?ts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Frontend Validation
$(document).ready(function () {
    $("#contact").validate({
        debug:true,
        errorClass: "alert alert-danger",
        errorLabelContainer: "#output-area",
        errorElement: "div",
        // rules here define what is good or bad input
        //each rule starts with the form input element's NAME attribute
        rules:{
            name: {
                required: true
            } ,
            email: {
                email: true,
                required: true
            },
            message: {
                required: true,
                maxlength: 2000,
            }
        },
        messages:{
            name: {
                required: "Name is a required field"
            },
            email: {
                email: "Please provide a valid email address",
                required: "Email is a required field"
            },
            message: {
                required: "Message is a required field",
                maxlength: "Message is to long"
            }
        },
        submitHandler: (form) => {
            $("#contact").ajaxSubmit({
                type: "POST",
                url: $("#contact").attr('action'),
                success: (ajaxOutput) => {
                    $("#output-area").css("display", "")
                    $("#output-area").html(ajaxOutput)
                    if($(".alert-success" >= 1)) {
                        $("#contact")[0].reset()
                    }
                }
            })
        }
    })
})