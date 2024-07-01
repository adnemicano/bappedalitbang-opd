function showForm(event, id) {
    event.stopPropagation();

    const formContainer = document.getElementById('form-container');
    const icon = event.target;

    // Calculate the position of the icon
    const rect = icon.getBoundingClientRect();
    const x = rect.left + window.scrollX;
    const y = rect.top + window.scrollY;

    // Position the form container near the icon
    formContainer.style.left = `${x}px`;
    formContainer.style.top = `${y + rect.height}px`;

    // Update the form content based on the id if needed
    const formTitle = formContainer.querySelector('h2');
    formTitle.textContent = `Unggah Lampiran untuk item ${id}`;

    // Display the form
    formContainer.style.display = 'block';
}

// Hide the form if user clicks outside of it
document.addEventListener('click', function (event) {
    const formContainer = document.getElementById('form-container');
    const uploadBtn = document.getElementById('uploadBtn');

    if (!formContainer.contains(event.target) && event.target !== uploadBtn) {
        formContainer.style.display = 'none';
    }
});

// Prevent click on the "Simpan" button from closing the form
document.getElementById('uploadBtn').addEventListener('click', function (event) {
    event.stopPropagation();
    // Add the logic to handle the file upload here
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        console.log(`File ready to be uploaded: ${file.name}`);
    } else {
        console.log('No file selected.');
    }
    // Hide the form after handling the upload
    document.getElementById('form-container').style.display = 'none';
});
