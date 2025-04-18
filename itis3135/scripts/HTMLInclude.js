// scripts/HTMLInclude.js
function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(element => {
        const file = element.getAttribute('data-include');
        fetch(file)
            .then(response => response.text())
            .then(text => {
                element.innerHTML = text;
            })
            .catch(err => {
                console.error(`Error loading ${file}:`, err);
                element.innerHTML = "Component failed to load.";
            });
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);