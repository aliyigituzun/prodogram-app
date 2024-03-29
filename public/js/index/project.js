window.addEventListener('load', () => {

    const errorMessage = document.getElementById('error');

    document.addEventListener('click', (event) => {

        //upon clicking the element with copy-button class the url will be copied to the clipboard
        if(event.target.classList.contains('copy-button')) {
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = window.location.href;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);
        }
        if(event.target.classList.contains('message-close')) {
            event.target.parentNode.parentNode.remove();
        }

        if(event.target.classList.contains('translation-button')) {

            document.cookie = `lang=${event.target.id}; path=/; max-age=31536000`;
            window.location.reload();
        }

        const sidebar = document.getElementById('sidebar');
        let sidebarOpen = false;

        if(event.target.id === 'sidebar-button' && !sidebarOpen) {

            sidebar.classList.add('sidebar-open-animation');
            sidebar.classList.remove('sidebar-close-animation');
            window.setTimeout(() => {
                sidebar.style.transform = 'translateX(0%)';
                sidebarOpen = true;
            }, 50);
        }
        if(!(event.target.id === 'sidebar') && sidebarOpen) {
            sidebar.classList.add('sidebar-close-animation');
            sidebar.classList.remove('sidebar-open-animation');
            window.setTimeout(() => {
                sidebar.style.transform = 'translateX(100%)';
                sidebarOpen = false;
            }, 50);
        }

        if(event.target.classList.contains('each-option-wrapper')) {
            if(document.querySelector('.each-option-wrapper-selected')) {
                const remove = document.querySelector('.each-option-wrapper-selected');
                remove.classList.remove('each-option-wrapper-selected');
            }
            
            event.target.classList.add('each-option-wrapper-selected');
        };
        if(event.target.classList.contains('each-input-button')) {
            if(document.querySelector('.each-input-button-selected')) {
                const remove = document.querySelector('.each-input-button-selected');
                remove.classList.remove('each-input-button-selected');
            }

            event.target.classList.add('each-input-button-selected');
        };

        if(event.target.id == ('submit-button')) {
            if(document.querySelector('.each-input-button-selected') && document.querySelector('.each-option-wrapper-selected')) {


                const data = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    weight: document.getElementById('weight').value,
                    height: document.getElementById('height').value,
                    age: document.getElementById('age').value,
                    activity: document.querySelector('.each-input-button-selected').getAttribute('data-value'),
                    goals: document.querySelector('.each-option-wrapper-selected').getAttribute('data-value'),
                    pushup: document.getElementById('pushup').value,
                    pullup: document.getElementById('pullup').value,
                    squat: document.getElementById('squat').value,
                }

                if(data.name == '' || data.email == '' || data.weight == '' || data.height == '' || data.age == '' || data.activity == '' || data.goals == '' || data.pushup == '' || data.pullup == '' || data.squat == '') {
                    return errorMessage.innerHTML = 'Please fill out all fields';
                }
                if(data.pushup < 3) {
                    errorMessage.innerHTML = 'You are not suitable for Project28';
                    return errorMessage.style.color = 'rgb(255, 255, 255)';
                }
                serverRequest('/project', 'POST', data, (res) => {
                    if(res.errorMessage === 'invalid_email') {
                        return errorMessage.innerHTML = 'Please enter a valid email address';
                    }
                    else if(res.error) {
                        return errorMessage.innerHTML = 'Something went wrong, please try again later';
                    }
                    if(res.id) {
                        return window.location.href = '/project/' + res.id;
                    }
                });
            }
            else {
                return errorMessage.innerHTML = 'Please fill out all fields';
            }

        };
    });
});
