document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Basic form validation
    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
    } else {
        alert("Thank you, " + name + ". Your message has been sent.");
        // Add actual form submission logic here
    }
});
