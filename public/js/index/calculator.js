window.addEventListener('load', () => {

    const bodyfatResult = document.getElementById('bodyfat-result-text');
    const tdeeResult = document.getElementById('tdee-result-text');
    const oneRepResult = document.getElementById('one-rep-max-result-text');

    calculateBodyfat = (gender, weight, height, waist, neck, hip) => {
        let bodyfat = 0;
        weight = weight * 2.2046;
        height = height / 2.54;
        waist = waist / 2.54;
        neck = neck / 2.54;
        hip = hip / 2.54;
        if(gender === "male") {

            bodyfat = (86.010 * Math.log10(waist - neck)) - (70.041 * Math.log10(height)) + 36.76;
            
        }
        else {
            bodyfat = (163.205 * Math.log10(waist + hip - neck)) - (97.684 * Math.log10(height)) - 78.387;
        }
        return bodyfat;
  
    }

    const calculateTDEE = (gender, activity, weight, height, age) => {
        let bmr = 0;
        if(gender === 'male') {
            bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        }
        else {
            bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        }
        switch (activity) {
            case 'sedentary':
                return bmr * 1.2;
            case 'light':
                return bmr * 1.375;
            case 'moderate':
                return bmr * 1.55;
            case 'active':
                return bmr * 1.725;
            case 'very-active':
                return bmr * 1.9;
            default: return 0;
        }
    }

    document.addEventListener('click', (e) => {

        if(e.target.classList.contains('bodyfat-gender')) {
            const hipInputWrapper = document.getElementById('hip');
            const selected = document.querySelector('.bodyfat-selected-gender');
            if(selected) {
                selected.classList.remove('bodyfat-selected-gender')
            }
            if(e.target.id === 'female') {
                hipInputWrapper.style.display = 'flex';
            }
            else {
                hipInputWrapper.style.display = 'none';
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
            let hip = 0;
            const weight = document.getElementById('bodyfat-weight').value;
            const height = document.getElementById('bodyfat-height').value;
            const waist = document.getElementById('bodyfat-waist-circumference').value;
            const neck = document.getElementById('bodyfat-neck-circumference').value;
            const gender = document.querySelector('.bodyfat-selected-gender');

            if( gender && gender.id === "female") {
                hip = document.getElementById('bodyfat-hip-circumference').value;
            }
            if((!gender || !weight || !height || !waist || !neck) || (gender.id === "female" && !hip)) {
                bodyfatResult.innerHTML = 'Please fill out all fields';
            }
            else {
                let bodyfat = calculateBodyfat(gender.id, weight, height, waist, neck, hip);
                if(bodyfat == 0) {
                    bodyfatResult.innerHTML = 'Please fill out all fields';
                }
                else {
                    bodyfatResult.innerHTML = `Your bodyfat is ${bodyfat.toFixed(2)}%`;
                }

            }
        }
        if(e.target.id === 'tdee-button') {
            const weight = document.getElementById('tdee-weight').value;
            const height = document.getElementById('tdee-height').value;
            const age = document.getElementById('tdee-age').value;
            const activity = document.querySelector('.tdee-selected-activity');
            const gender = document.querySelector('.tdee-selected-gender');

            if(!gender || !activity || !weight || !height || !age) {
                tdeeResult.innerHTML = 'Please fill out all fields';
            }
            else {
                let TDEE = calculateTDEE(gender.id, activity.id, weight, height, age)
                if(TDEE == 0) {
                    tdeeResult.innerHTML = 'Please fill out all fields';
                }
                else {
                    tdeeResult.innerHTML = `Your TDEE is ${TDEE.toFixed(2)} calories`;
                }
            }
        }
        if(e.target.id === 'one-rep-button') {
            const weight = document.getElementById('one-rep-weight').value;
            const reps = document.getElementById('one-rep-reps').value;

            if(!weight || !reps) {
                oneRepResult.innerHTML = 'Please fill out all fields';
            }
            else {
                let oneRepMax = weight * (36/(37 - reps));
                oneRepResult.innerHTML = `Your one rep max is ${oneRepMax.toFixed(2)} kilograms`;
            }
        }
    });
});