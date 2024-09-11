document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');

    // Example of handling form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Please fill out both fields.');
            event.preventDefault(); // Prevent form submission
        }

        // Add further logic here (e.g., send data to server) :
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> 279d3957620704986a296da0589ef8dd1002ffa3
