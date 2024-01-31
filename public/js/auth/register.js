window.addEventListener('load', () => {

    const errorMessage = document.getElementById('error');

    document.addEventListener('click', (e) => {
        
        if(e.target.classList.contains('register-button-wrapper') || e.target.parentElement.classList.contains('register-button-wrapper')) {

            let name = document.getElementById('name').value;
            let surname = document.getElementById('surname').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;

            if (name == '' || surname == '' || email == '' || password == '') {
                errorMessage.style.display = 'block';
                return errorMessage.innerHTML = 'Please fill out all fields';
            }
            data = {
                name,
                surname,
                email,
                password
            }
            serverRequest('/auth/register', 'POST', data, (res) => {
                if(res.success) {
                    window.location.href = '/dashboard/profile/';
                } else {
                    return;
                }
            });
            
        }
    });
    document.addEventListener('keypress', (e) => {

        if (e.key === 'Enter') {

            let name = document.getElementById('name').value;
            let surname = document.getElementById('surname').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;

            if (name == '' || surname == '' || email == '' || password == '') {
                errorMessage.style.display = 'block';
                return errorMessage.innerHTML = 'Please fill out all fields';
            }
            
            data = {
                name,
                surname,
                email,
                password
            }

            serverRequest('/auth/register', 'POST', data, (res) => {
                if(res.success) {
                    window.location.href = '/dashboard/profile/';
                } else {
                    return;
                }
            });
        }
    });
});