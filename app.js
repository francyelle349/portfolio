document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        console.log("Entries observed:", entries); // Debugging log
        entries.forEach((entry) => {
            console.log("Entry:", entry.target, "isIntersecting:", entry.isIntersecting); // Debugging log
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    console.log("Hidden elements found:", hiddenElements); // Debugging log
    hiddenElements.forEach((el) => observer.observe(el));

    const scriptURL = GOOGLE_SCRIPT_URL;
    const form = document.forms['submit-to-google-sheet'];
    const submitButton = document.getElementById("buttonSubmit");
    const linkButton = document.getElementById("linkSubmit");



    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    console.log('Success!', response);
                    alert('Mensagem enviada com sucesso!');
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message)).finally(() => {

                 

                });
        });

        if(linkButton) {
            linkButton.addEventListener('click', (e) => {
             e.preventDefault();
             form.dispatchEvent(new Event('submit'));
            });

          

        }

        form.dataset.listenerAdded = true;

     

    } else {
        console.error('Form not found!');
    }

});

