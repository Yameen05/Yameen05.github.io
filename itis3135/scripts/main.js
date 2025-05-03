// Tab functionality for resources page
function openCategory(categoryName) {
    // Hide all category contents
    const contents = document.getElementsByClassName('category-content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    
    // Remove active class from all buttons
    const buttons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    
    // Show current category and mark button as active
    document.getElementById(categoryName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// Project gallery filtering
function filterProjects(category) {
    const projects = document.getElementsByClassName('project-card');
    
    for (let i = 0; i < projects.length; i++) {
        if (category === 'all' || projects[i].dataset.category === category) {
            projects[i].style.display = 'block';
        } else {
            projects[i].style.display = 'none';
        }
    }
    
    // Update active button
    const buttons = document.getElementsByClassName('filter-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    event.currentTarget.classList.add('active');
}

// FAQ accordion functionality
const faqQuestions = document.getElementsByClassName('faq-question');
for (let i = 0; i < faqQuestions.length; i++) {
    faqQuestions[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    
    if (!name || !email || !subject) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! Ms. Najd will respond within 24-48 hours.');
    this.reset();
});

// Initialize page-specific features when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.querySelector('footer p').innerHTML = 
        `&copy; ${new Date().getFullYear()} Ms. Najd's Classroom | Designed by <a href="../../index.html">Yameen Alsaaidah</a>`;
    
    // Initialize first tab as active on resources page
    if (document.querySelector('.tab-button')) {
        document.querySelector('.tab-button').click();
    }
});


// In main.js
function filterResources(category) {
    document.querySelectorAll('.resource-card').forEach(card => {
        card.style.display = card.dataset.category === category || category === 'all' 
            ? 'block' : 'none';
    });
}