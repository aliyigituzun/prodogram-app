window.addEventListener('load', () => {

    const bodyfatButton = document.getElementById('bodyfat-button');
    const tdeeButton = document.getElementById('tdee-button');
    const oneRepButton = document.getElementById('one-input');

    tdeeResult = document.getElementById('tdee-result-text');

    document.addEventListener('click', (e) => {

        if(e.target.id === 'bodyfat-button') {}
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