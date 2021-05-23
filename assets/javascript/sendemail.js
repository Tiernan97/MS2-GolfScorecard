window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                let email=document.getElementById("Email_for_form").value

                console.log(email)
                // emailjs.sendForm('contact_service', 'contact_form', this)
                // .then(function() {
                //         console.alert('Your message to Tiernan sent successfully');
                //     }, function(error) {
                //         console.alert('Your message to Tiernan failed to send', error);
                //     });
            });
        }  
        