// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle mobile navigation menu
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');
  
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });
  
  // Form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form input values
    const nameInput = document.querySelector('input[type="text"]').value;
    const emailInput = document.querySelector('input[type="email"]').value;
    const messageInput = document.querySelector('textarea').value;
    
    // Perform form validation (you can customize this part)
    if (nameInput === '' || emailInput === '' || messageInput === '') {
      alert('Please fill out all fields.');
      return;
    }
    
    // Send form data to the server (you can customize this part)
    // Example using fetch API:
    fetch('/submit-form', {
      method: 'POST',
      body: JSON.stringify({
        name: nameInput,
        email: emailInput,
        message: messageInput
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Form submitted successfully!');
        form.reset();
      } else {
        alert('Error submitting form. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error submitting form. Please try again later.');
    });
  });
  