const form = document.getElementById('form');

form.addEventListener('submit', e => {
	e.preventDefault();

	// check for email validation
	const firstName = form['firstName'];
	const firstNameValue = firstName.value;
	
    const lastName = form['lastName'];
	const lastNameValue = lastName.value;

    const email = form['email'];
	const emailValue = email.value;

    const password = form['password'];
	const passwordValue = password.value;

	const smallFirstName = document.getElementById('smallFirstName');
	const smallLastName = document.getElementById('smallLastName');
	const smallEmail = document.getElementById('smallEmail');
	const smallPassword = document.getElementById('smallPassword');
      
    if (!firstNameValue) {
		firstName.classList.add('error');
		smallFirstName.innerText = 'First name cannot be empty';
		smallFirstName.style.display = 'inline-block';
	} else {
		// submit it
		firstName.classList.remove('error');
		smallFirstName.innerText = '';
		smallFirstName.style.display = 'none';
	}

    if (!lastNameValue) {
		lastName.classList.add('error');
		smallLastName.innerText = 'Last name cannot be empty';
		smallLastName.style.display = 'inline-block';
	} else {
		// submit it
		lastName.classList.remove('error');
		smallLastName.innerText = '';
		smallLastName.style.display = 'none';
	}

    if (!passwordValue) {
		password.classList.add('error');
		smallPassword.innerText = 'Password cannot be empty';
		smallPassword.style.display = 'inline-block';
	} else {
		// submit it
		password.classList.remove('error');
		smallPassword.innerText = '';
		smallPassword.style.display = 'none';
	}

	if (!emailValue) {
		// say it's empty
		email.classList.add('error');
		smallEmail.innerText = 'Email field cannot be blank';
		smallEmail.style.display = 'inline-block';
	} else if (!isValidEmail(emailValue)) {
		// say it's invalid
		email.classList.add('error');
		smallEmail.innerText = 'Looks like this not an email';
		smallEmail.style.display = 'inline-block';
	} else {
		// submit it
		email.classList.remove('error');
		smallEmail.innerText = '';
		smallEmail.style.display = 'none';
	}
});

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}