window.onload = function() {
    emailjs.init('LZaVaYrnq4wBK27GE'); 

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        emailjs.sendForm('service_rfe7knc', 'template_bs3u0kd', this)
            .then(() => {
                Swal.fire({
                    title: 'Message Sent!',
                    text: 'Your message was sent successfully.',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                    customClass: {
                        popup: 'custom-popup',
                        title: 'custom-title',
                        text: 'custom-text',
                        icon: 'custom-icon',
                        content: 'custom-content',
                        confirmButton: 'custom-button'
                    }
                });
                contactForm.reset();
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to send the message. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
                console.error('FAILED...', error);
            });
    });
};
