module.exports = (weight, height, age, activity) => {
    const gender = 'male';

    let bmr = 0;

    if(gender === 'male') {
        bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    }
    else {
        bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }
    console.log("bmr:" + bmr)
    console.log("activity:" + activity);
    switch (activity) {
        case "1":
            return bmr * 1.2;
        case "2":
            return bmr * 1.375;
        case "3":
            return bmr * 1.55;
        case "4":
            return bmr * 1.725;
        case "5":
            return bmr * 1.9;
    }
    return 0;
}