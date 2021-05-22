
(function() {
            // https://dashboard.emailjs.com/admin/integration
            emailjs.init("user_1z6S9pOQure77MC4ZJQoz");
        })();



window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                
                emailjs.sendForm('contact_service', 'contact_form', this)
                    .then(function() {
                        console.alert('Your message to Tiernan sent successfully');
                    }, function(error) {
                        console.alert('Your message to Tiernan failed to send', error);
                    });
            });
        }  