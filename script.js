document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  const rememberMeCheckbox = document.getElementById('checkbox');
  const existingUserButton = document.getElementById('existing');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = rememberMeCheckbox.checked;

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

  if (savedUsername && savedPassword) {
    const existingUserButton = document.createElement('button');
    existingUserButton.id = 'existing';
    existingUserButton.textContent = 'Login as existing user';
    document.body.appendChild(existingUserButton);

    existingUserButton.addEventListener('click', function() {
      alert('Logged in as ' + savedUsername);
    });
  }
});