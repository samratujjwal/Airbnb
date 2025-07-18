(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
/////////////
document.addEventListener('DOMContentLoaded', () => {
  
    const searchBtn = document.getElementById('searchTrigger');
    const mainContent = document.getElementById('mainContent');
    
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent form submission
      mainContent.classList.add('blur');
      document.getElementById('searchOverlay').style.display = 'block';
    });
    
    // You’ll want to remove the blur when search is closed:
    const closeBtn = document.getElementById('closeSearch'); // Make sure this button exists
    
    closeBtn.addEventListener('click', () => {
      mainContent.classList.remove('blur');
      document.getElementById('searchOverlay').style.display = 'none';
    });
});
