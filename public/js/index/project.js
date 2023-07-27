window.addEventListener('load', () => {

    const errorMessage = document.getElementById('error');

    document.addEventListener('click', (event) => {
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
                    if(res.err) {
                        return errorMessage.innerHTML = 'Something went wrong, please try again later';
                    }
                    if(res.id) {
                        window.location.href = '/project/' + res.id;
                    }
                });
            }
            else {
                return errorMessage.innerHTML = 'Please fill out all fields';
            }

        };
    });
});
