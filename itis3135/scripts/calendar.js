// In calendar.js
document.addEventListener('DOMContentLoaded', function() {
    $('#calendar').fullCalendar({
        events: [
            { title: 'Math Test', start: '2024-05-10' },
            { title: 'Science Project Due', start: '2024-05-15' }
        ]
    });
});