// Dark Mode Toggle Button
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '10px';
toggleButton.style.backgroundColor = '#FFD700'; /* Gold button */
toggleButton.style.color = '#000000'; /* Black text */
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.zIndex = '1000'; /* Ensure it's above other elements */

// Add the button to the page
document.body.appendChild(toggleButton);

// Add event listener to toggle dark mode
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
