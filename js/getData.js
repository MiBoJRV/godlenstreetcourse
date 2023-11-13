console.log('logo229');
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('form.dr-form');
    const firstNameField = form.querySelector('.form__input.first-name');
    const lastNameField = form.querySelector('.form__input.last-name');
    const emailField = form.querySelector('.form__input.email');
    const phoneField = form.querySelector('.form__input.phone');

    console.log(form);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const firstName = firstNameField.value;
        const lastName = lastNameField.value;
        const email = emailField.value;
        const phone = phoneField.value;
        const countryCode = '420';
        const fullNumber = `+${countryCode}${phone}`;

        // console.log('click')

        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(phone);
        console.log(fullNumber);
    });


});
