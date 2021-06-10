// Cache DOM
let fullName = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let submit = document.querySelector('#btn');

submit.addEventListener('click', () => {
    processDetails();
})

function processDetails() {
    alert(
        `Full-Name: ${fullName.value}
Email Address: ${email.value}
Phone-No: ${phone.value}`
    );
}   