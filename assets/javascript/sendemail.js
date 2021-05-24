// Function looks for specific requirements to validate or reject inputs as emails
function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
   
    return (false)
}


window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                let email=document.getElementById("Email_for_form").value
// If email is sent successfully, an alert message is triggered
              if(ValidateEmail(email)){
                document.getElementById('Email_warning').innerHTML=null
                  emailjs.sendForm('contact_service', 'contact_form', this)
                  .then(function() {
                    document.getElementById('alert-message').innerHTML=` <div class="alert alert-success" role="alert">
                    Your message was sucessfully sent to Tiernan!
                  </div>`  
                  var hidemessage=setTimeout(() => {
                    document.getElementById('alert-message').innerHTML=null
                    clearTimeout(hidemessage)
                  }, 2000); 
                    console.log('Your message to Tiernan sent successfully');
                      }, function(error) {
                          console.log('Your message to Tiernan failed to send', error);
                      });
              }else{
                  document.getElementById('Email_warning').innerHTML='Please enter Correct Email'
              }
            });
        }  