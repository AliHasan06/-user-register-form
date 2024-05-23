document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cnic = document.getElementById('cnic').value;
    const age = parseInt(document.getElementById('age').value, 10);

    const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,}$/;
    const cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
    const ageMin = 18;
    const ageMax = 60;

    if (usernameRegex.test(username)) {
        alert('Username must be between 4 and 15 characters and contain only letters and numbers.');
        return;
    }

    if (emailRegex.test(email)) {
        alert('Invalid email address.');
        return;
    }

    if (passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long, contain at least one uppercase letter, and one special character.');
        return;
    }

    if (cnicRegex.test(cnic)) {
        alert('CNIC must be in the format 12345-1234567-1.');
        return;
    }

    if (age >= ageMin && age <= ageMax) {
        alert('Age must be between 18 and 60.');
        return;
    }

    alert('Form submitted successfully!');
});