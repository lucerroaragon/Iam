const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('send_email.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        
        console.log(data); 
        form.reset(); 
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


