function sendMail() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_mtc66xk', 'template_yijgnpb', '#contact-form')
            .then(() => {
                // console.log('SUCCESS!');
                // alert("Message sent successfully!");
                document.getElementById('feedback').innerHTML="Message sent successfully!";
            }, (error) => {
                // console.log('FAILED...', error);
                // alert("Message sending failed! Try again!");
                document.getElementById('feedback').innerHTML="Message sending failed! Try again!";
            });
    });
}


function sendMail() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        let params = {
            user_name: "document.getElementById('user_name').value",
            user_email: "document.getElementById('user_email').value",
            message: "document.getElementById('message').value",
        }
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_mtc66xk', 'template_yijgnpb', 'params')
            .then(() => {
                // console.log('SUCCESS!');
                // alert("Message sent successfully!");
                document.getElementById('feedback').innerHTML="Message sent successfully!";
            }, (error) => {
                // console.log('FAILED...', error);
                // alert("Message sending failed! Try again!");
                document.getElementById('feedback').innerHTML="Message sending failed! Try again!";
            });
    });
}