const form = document.getElementById('myContactForm');

form.onsubmit = function (event) {
    event.preventDefault();

    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMsg').value;

    const contactData = {
        savedName: name,
        savedEmail: email,
        savedMessage: message,
        date: new Date().toLocaleString()
    };

    localStorage.setItem('userContactInfo', JSON.stringify(contactData));

    alert("Hello " + name + "! Your message was saved to LocalStorage successfully.");
    form.reset();
};
