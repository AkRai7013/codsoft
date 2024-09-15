// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Order Now button alert
document.querySelectorAll('.order-now-button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Thank you for your order! We will process it shortly.');
    });
});

// Form validation
document.querySelector('.contact .button button').addEventListener('click', function (e) {
    e.preventDefault();
    
    const name = document.querySelector('input[placeholder="Enter your Name here"]').value;
    const email = document.querySelector('input[placeholder="Enter your Email here"]').value;
    const password = document.querySelector('input[placeholder="Enter your Password here"]').value;

    if (!name || !email || !password) {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Sign Up successful! Welcome aboard.');
});

// Simple email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
