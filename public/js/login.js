const loginFormHandler = async (event) => {
    event.preventdefault();
    const userName = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
      
    if (userName && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ userName, password }),
            headers: { 'Content type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to login');
        };
    };
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

