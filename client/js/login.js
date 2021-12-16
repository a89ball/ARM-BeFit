const loginFormHandler = async(event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email === '' || email === null) {
        $('#errorEmail').removeClass('hide');
        return false;
      }
}  

if (email && password) {
    const response = await fetch('../../routes/api/loginRoutes', {  method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
}