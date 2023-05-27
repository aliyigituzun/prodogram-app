window.addEventListener('load', () => {

    const bodyfatButton = document.getElementById('bodyfat-button');
    const tdeeButton = document.getElementById('tdee-button');
    const oneRepButton = document.getElementById('one-input');

    const tdeeResult = document.getElementById('tdee-result-text');

    document.addEventListener('click', (e) => {

        if(e.target.classList.contains('bodyfat-gender')) {
            const selected = document.querySelector('.bodyfat-selected-gender');
            if(selected) {
                selected.classList.remove('bodyfat-selected-gender')
            }
            e.target.classList.add('bodyfat-selected-gender')
        }
        if(e.target.classList.contains('tdee-gender')) {
            const selected = document.querySelector('.tdee-selected-gender');
            if(selected) {
                selected.classList.remove('tdee-selected-gender')
            }
            e.target.classList.add('tdee-selected-gender')
        }
        if(e.target.classList.contains('tdee-activity')) {
            const selected = document.querySelector('.tdee-selected-activity');
            if(selected) {
                selected.classList.remove('tdee-selected-activity')
            }
            e.target.classList.add('tdee-selected-activity')
        }
        if(e.target.id === 'bodyfat-button') {

        }
        if(e.target.id === 'one-rep-button') {
        }
        if(e.target.id === 'tdee-button') {
            const weight = document.getElementById('tdee-weight').value;
            const height = document.getElementById('tdee-height').value;
            const age = document.getElementById('tdee-age').value;
            const activity = document.getElementById('tdee-activity').value;
            console.log(activity);


            if(!gender || !weight || !height || !age) {
                tdeeResult.innerHTML = 'Please fill out all fields';
            }
            console.log("anything");

            console.log(gender, weight, height, age);
        }
        
    });
});