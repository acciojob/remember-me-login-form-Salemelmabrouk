document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const existingUserButton = document.getElementById('existing');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = rememberMeCheckbox.checked;
		<input type="checkbox" id="checkbox">
<label for="checkbox">Remember me</label>

        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert('Logged in as ' + username);
    });

    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (existingUserButton) {
        if (savedUsername && savedPassword) {
            existingUserButton.style.display = 'block';
        } else {
            existingUserButton.style.display = 'none';
        }

        existingUserButton.addEventListener('click', function() {
            alert('Logged in as ' + savedUsername);
        });
    }
});