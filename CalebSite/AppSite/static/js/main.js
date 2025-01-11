function experience() {
            window.location.href = "experience"; // URL to navigate to
        }

 function home(){
            window.location.href= "home";
 }

function nhknews(){
            window.location.href= "nhknews";
}
 function showPanel(panelNumber) {
    // Hide all panels
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.style.display = 'none';
    });

    // Show the selected panel
    const selectedPanel = document.getElementById('panel' + panelNumber);
    selectedPanel.style.display = 'block';
}


// Only show Panel 1 if the page is experience.html
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('experience')) {
        showPanel(1);  // Show Panel 1 only on A.html
        // Select the button you want to highlight
        const buttonToHighlight = document.getElementById('firstBtn');

        // Add the 'highlighted' class to the button
        buttonToHighlight.classList.add('highlighted');
    }
});

// Get all buttons
 const buttons = document.querySelectorAll('.btn');

        // Add event listeners to each button
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove the 'highlighted' class from all buttons
                buttons.forEach(btn => btn.classList.remove('highlighted'));

                // Add the 'highlighted' class to the clicked button
                button.classList.add('highlighted');
            });
        });