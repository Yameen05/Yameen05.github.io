document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('introForm');
    const coursesContainer = document.getElementById('coursesContainer');
    const addCourseBtn = document.getElementById('addCourse');
    const resultsDiv = document.getElementById('results');
    
    let courseCount = 1;
    
    // Add course field
    addCourseBtn.addEventListener('click', function() {
        courseCount++;
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course-entry';
        courseDiv.innerHTML = `
            <input type="text" class="course" name="course${courseCount}" placeholder="Course code and title">
            <button type="button" class="delete-course" onclick="deleteCourse(this)">Delete</button>
        `;
        coursesContainer.appendChild(courseDiv);
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Generate results
        generateResults();
    });
});

// Delete course field
function deleteCourse(button) {
    const courseEntry = button.parentElement;
    if (document.querySelectorAll('.course-entry').length > 1) {
        courseEntry.remove();
    } else {
        courseEntry.querySelector('input').value = '';
    }
}

// Validate form
function validateForm() {
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.border = '1px solid red';
            isValid = false;
        } else {
            field.style.border = '';
        }
    });
    
    // Validate image file type
    const imageInput = document.getElementById('image');
    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const validTypes = ['image/jpeg', 'image/png'];
        if (!validTypes.includes(file.type)) {
            alert('Please upload a JPG or PNG image file.');
            isValid = false;
        }
    }
    
    // Validate checkbox
    if (!document.getElementById('agree').checked) {
        alert('You must agree to the terms before submitting.');
        isValid = false;
    }
    
    return isValid;
}

// Generate results page
function generateResults() {
    const form = document.getElementById('introForm');
    const resultsDiv = document.getElementById('results');
    
    // Get form values
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const imageCaption = document.getElementById('imageCaption').value;
    const personalBg = document.getElementById('personalBg').value;
    const professionalBg = document.getElementById('professionalBg').value;
    const academicBg = document.getElementById('academicBg').value;
    const webBg = document.getElementById('webBg').value;
    const platform = document.getElementById('platform').value;
    const funnyThing = document.getElementById('funnyThing').value;
    const anythingElse = document.getElementById('anythingElse').value;
    
    // Get courses
    const courses = [];
    document.querySelectorAll('.course').forEach(course => {
        if (course.value.trim()) {
            courses.push(course.value);
        }
    });
    
    // Generate courses HTML
    let coursesHtml = '';
    if (courses.length > 0) {
        coursesHtml = '<h3>Courses I\'m Taking:</h3><ul>';
        courses.forEach(course => {
            coursesHtml += `<li>${course}</li>`;
        });
        coursesHtml += '</ul>';
    }
    
    // Create results HTML
    resultsDiv.innerHTML = `
        <h2>${name} | ${mascot}</h2>
        <figure>
            <img src="${document.getElementById('image').files[0]?.name || '#'}" alt="${imageCaption}">
            <figcaption>${imageCaption}</figcaption>
        </figure>
        
        <h3>Personal Background:</h3>
        <p>${personalBg}</p>
        
        <h3>Professional Background:</h3>
        <p>${professionalBg}</p>
        
        <h3>Academic Background:</h3>
        <p>${academicBg}</p>
        
        <h3>Background in Web Development:</h3>
        <p>${webBg}</p>
        
        <h3>Primary Computer Platform:</h3>
        <p>${platform}</p>
        
        ${coursesHtml}
        
        <h3>Funny/Interesting Thing:</h3>
        <p>${funnyThing}</p>
        
        <h3>Anything Else:</h3>
        <p>${anythingElse}</p>
        
        <a href="#" onclick="resetForm()">Create Another Intro</a>
    `;
    
    // Hide form, show results
    form.style.display = 'none';
    resultsDiv.style.display = 'block';
}

// Reset form
function resetForm() {
    const form = document.getElementById('introForm');
    const resultsDiv = document.getElementById('results');
    
    form.reset();
    form.style.display = 'block';
    resultsDiv.style.display = 'none';
    
    // Reset courses to just one empty field
    const coursesContainer = document.getElementById('coursesContainer');
    coursesContainer.innerHTML = `
        <div class="course-entry">
            <input type="text" class="course" name="course1" placeholder="Course code and title">
            <button type="button" class="delete-course" onclick="deleteCourse(this)">Delete</button>
        </div>
    `;
}