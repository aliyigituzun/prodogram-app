module.exports = (intensity, pushup, pullup, squat, goals) => {
    
    const days = [];

    const adjustNumbers = (number) => {
        return Math.round(number);
    }

    const createBeginnerProgram = (pushup, pullup, squat, goals) => {
        //day 1 
        const day1Exercises = [];
        day1Exercises.push({name: 'Push', isTitle: true});
        day1Exercises.push({ name: 'Knee Push-Up', sets: 2, reps: adjustNumbers(pushup * 1.5) });
        day1Exercises.push({ name: 'Incline Push-Up', sets: 2, reps: adjustNumbers(pushup * 2) });
        day1Exercises.push({ name: 'Bench Dips', sets: 2, reps: adjustNumbers(pushup * 2) });
        day1Exercises.push({ name: 'Shoulder Taps', sets: 1, seconds: "10-20" });
        day1Exercises.push({ name: 'Sideway Bear Crawls', sets: 1, seconds: "10-20" });
        day1Exercises.push({ name: 'Superman', sets: 1, max: true });

        //day 2
        const day2Exercises = [];
        day2Exercises.push({name: 'Pull', isTitle: true});
        day2Exercises.push({name: 'Negative Pull-Up', sets: 1, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day2Exercises.push({name: 'Negative Chin-Up', sets: 2, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day2Exercises.push({name: 'Towel Lat Pull Down', sets: 2, reps: "10-12", detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day2Exercises.push({name: 'Low Towel Row', sets: 2, reps: 10, detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day2Exercises.push({name: 'Reacher Row', sets: 1, max: true, detailsEn: "Perform the first 5 reps slowly and do your best for the other reps", detailsTr: "İlk 5 tekrarı yavaşça yapın ve diğer tekrarlar için elinizden geleni yapın."});
        
        //day 3
        const day3Exercises = [];
        day3Exercises.push({name: 'Legs', isTitle: true});
        day3Exercises.push({name: 'Bodyweight Pause Squats', sets: 2, reps: adjustNumbers(squat * 0.5), detailsEn: "Pause for 3 seconds at the bottom of the squat.", detailsTr: "Squatın en alt noktasında 3 saniye bekleyin."});
        day3Exercises.push({name: 'Lunges', sets: 1, reps: adjustNumbers(squat * 0.5)});
        day3Exercises.push({name: 'Bodyweight Squats', sets: 1, reps: adjustNumbers(squat * 0.5)});
        day3Exercises.push({name: 'Climbers', sets: 1, max: true});
        day3Exercises.push({name: 'Bodyweight Squats', sets: 1, max: true});

        //day 4
        const day4Exercises = [];
        day4Exercises.push({name: 'Core', isTitle: true});
        day4Exercises.push({name: 'Mountain Climbers', sets: 1, seconds: "30"});
        day4Exercises.push({name: 'Flutter Kicks', sets: 1, seconds: "30"});
        day4Exercises.push({name: 'Push-Up Plank', sets: 1, max: true});
        day4Exercises.push({name: 'Pigeon Stretch', sets: 5, seconds: "15", detailsEn: "Each Side", detailsTr: "Her Bir Taraf"});
        day4Exercises.push({name: 'Chest Doorway Stretch', sets: 2, seconds: "15", detailsEn: "Each Side \n Stand near a doorway. With the palms facing outward, grasp the edge of the doorway with one or both arms. Keeping the elbows straight, lean forward gently.", detailsTr: "Her Bir Taraf \n Bir kapı yakınında durun. Avuç içleri dışarıya bakacak şekilde, kapının kenarını bir veya her iki kolunuzla kavrayın. Dizleri düz tutarak, yavaşça öne doğru eğilin."});

        //day 5
        const day5Exercises = [];
        day5Exercises.push({name: 'Push', isTitle: true});
        day5Exercises.push({name: 'Knee Push-Up', sets: 3, reps: adjustNumbers(pushup * 1.5)});
        day5Exercises.push({name: 'Incline Push-Up', sets: 2, reps: adjustNumbers(pushup * 2)});
        day5Exercises.push({name: 'Bench Dips', sets: 2, reps: adjustNumbers(pushup * 2)});
        day5Exercises.push({name: 'Shoulder Taps', sets: 1, seconds: "10-20"});
        day5Exercises.push({name: 'Sideway Bear Crawls', sets: 1, seconds: "10-20"});
        day5Exercises.push({name: 'Superman', sets: 1, max: true});

        //day 6
        const day6Exercises = [];
        day6Exercises.push({name: 'Pull', isTitle: true});
        day6Exercises.push({name: 'Negative Pull-Up', sets: 2, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day6Exercises.push({name: 'Negative Chin-Up', sets: 1, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day6Exercises.push({name: 'Towel Lat Pull Down', sets: 3, reps: "10-12", detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day6Exercises.push({name: 'Low Towel Row', sets: 3, reps: 10, detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day6Exercises.push({name: 'Reacher Row', sets: 2, max: true, detailsEn: "Perform the first 5 reps slowly and do your best for the other reps", detailsTr: "İlk 5 tekrarı yavaşça yapın ve diğer tekrarlar için elinizden geleni yapın."});

        //day 7
        const day7Exercises = [];
        day7Exercises.push({name: 'Cardio', isTitle: true});
        if (!goals) {
            day7Exercises.push({name: 'Walk', minutes: "45"});
        }
        if (goals) {
            day7Exercises.push({name: 'Jog', minutes: "10"});
        }

        //day 8
        const day8Exercises = [];
        day8Exercises.push({name: 'Push', isTitle: true});
        day8Exercises.push({name: 'Knee Push-Up', sets: 3, reps: adjustNumbers(pushup * 1.5)});
        day8Exercises.push({name: 'Incline Push-Up', sets: 3, reps: adjustNumbers(pushup * 2)});
        day8Exercises.push({name: 'Bench Dips', sets: 3, reps: adjustNumbers(pushup * 2)});
        day8Exercises.push({name: 'Shoulder Taps', sets: 2, seconds: "10-20"});
        day8Exercises.push({name: 'Sideway Bear Crawls', sets: 2, seconds: "10-20"});
        day8Exercises.push({name: 'Superman', sets: 2, max: true});

        //day 9
        const day9Exercises = [];
        day9Exercises.push({name: 'Pull', isTitle: true});
        day9Exercises.push({name: 'Negative Pull-Up', sets: 2, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day9Exercises.push({name: 'Negative Chin-Up', sets: 2, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day9Exercises.push({name: 'Towel Lat Pull Down', sets: 3, reps: "10-12", detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day9Exercises.push({name: 'Low Towel Row', sets: 3, reps: 10, detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day9Exercises.push({name: 'Reacher Row', sets: 2, max: true, detailsEn: "Perform the first 5 reps slowly and do your best for the other reps", detailsTr: "İlk 5 tekrarı yavaşça yapın ve diğer tekrarlar için elinizden geleni yapın."});

        //day 10
        const day10Exercises = [];
        day10Exercises.push({name: 'Legs', isTitle: true});
        day10Exercises.push({name: 'Bodyweight Pause Squats', sets: 3, reps: adjustNumbers(squat * 0.5), detailsEn: "Pause for 3 seconds at the bottom of the squat.", detailsTr: "Çömelmenin en altında 3 saniye bekleyin."});
        day10Exercises.push({name: 'Lunges', sets: 2, reps: adjustNumbers(squat * 0.5)});
        day10Exercises.push({name: 'Bodyweight Squats', sets: 3, reps: adjustNumbers(squat * 0.5)});
        day10Exercises.push({name: 'Climbers', sets: 1, max: true});
        day10Exercises.push({name: 'Bodyweight Squats', sets: 1, max: true});

        //day 11
        const day11Exercises = [];
        day11Exercises.push({name: 'Core', isTitle: true});
        day11Exercises.push({name: 'Mountain Climbers', sets: 2, seconds: "30"});
        day11Exercises.push({name: 'Flutter Kicks', sets: 2, seconds: "30"});
        day11Exercises.push({name: 'Push-Up Plank', sets: 1, max: true});
        day11Exercises.push({name: 'Pigeon Stretch', sets: 5, seconds: "15", detailsEn: "Each Side", detailsTr: "Her iki taraf"});
        day11Exercises.push({name: 'Chest Doorway Stretch', sets: 2, seconds: "15", detailsEn: "Each Side \n Stand near a doorway. With the palms facing outward, grasp the edge of the doorway with one or both arms. Keeping the elbows straight, lean forward gently.", detailsTr: "Bir kapının yakınında durun. Avuç içleri dışarıya bakacak şekilde, bir veya her iki kolunuzla kapının kenarını kavrayın. Dizleri düz tutarak, yavaşça öne doğru eğilin."});

        //day 12
        const day12Exercises = [];
        day12Exercises.push({name: 'Push', isTitle: true});
        day12Exercises.push({name: 'Knee Push-Up', sets: 4, reps: adjustNumbers(pushup * 1.5)});
        day12Exercises.push({name: 'Incline Push-Up', sets: 3, reps: adjustNumbers(pushup * 2)});
        day12Exercises.push({name: 'Bench Dips', sets: 3, reps: adjustNumbers(pushup * 2)});
        day12Exercises.push({name: 'Shoulder Taps', sets: 3, seconds: "10-20"});
        day12Exercises.push({name: 'Sideway Bear Crawls', sets: 3, seconds: "10-20"});
        day12Exercises.push({name: 'Superman', sets: 2, max: true});

        //day 13
        const day13Exercises = [];
        day13Exercises.push({name: 'Pull', isTitle: true});
        day13Exercises.push({name: 'Negative Pull-Up', sets: 3, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day13Exercises.push({name: 'Negative Chin-Up', sets: 3, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day13Exercises.push({name: 'Towel Lat Pull Down', sets: 3, reps: "10-12", detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day13Exercises.push({name: 'Low Towel Row', sets: 3, reps: 10, detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day13Exercises.push({name: 'Reacher Row', sets: 2, max: true, detailsEn: "Perform the first 5 reps slowly and do your best for the other reps", detailsTr: "İlk 5 tekrarı yavaşça yapın ve diğer tekrarlar için elinizden geleni yapın."});

        //day 14
        const day14Exercises = [];
        day14Exercises.push({name: 'Cardio', isTitle: true});
        if (!goals) {
            day14Exercises.push({name: 'Walk', minutes: "45"});
        }
        if (goals) {
            day14Exercises.push({name: 'Jog', minutes: "10"});
        }

        // day 15
        const day15Exercises = [];
        day15Exercises.push({name: 'Push', isTitle: true});
        day15Exercises.push({name: 'Knee Push-Up', sets: 4, reps: adjustNumbers(pushup * 1.5)});
        day15Exercises.push({name: 'Incline Push-Up', sets: 3, reps: adjustNumbers(pushup * 2)});
        day15Exercises.push({name: 'Bench Dips', sets: 3, reps: adjustNumbers(pushup * 2)});
        day15Exercises.push({name: 'Shoulder Taps', sets: 3, seconds: "10-20"});
        day15Exercises.push({name: 'Sideway Bear Crawls', sets: 3, seconds: "10-20"});
        day15Exercises.push({name: 'Superman', sets: 2, max: true});

        // day 16
        const day16Exercises = [];
        day16Exercises.push({name: 'Pull', isTitle: true});
        day16Exercises.push({name: 'Negative Pull-Up', sets: 3, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day16Exercises.push({name: 'Negative Chin-Up', sets: 3, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day16Exercises.push({name: 'Towel Lat Pull Down', sets: 3, reps: "10-12", detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day16Exercises.push({name: 'Low Towel Row', sets: 3, reps: 10, detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day16Exercises.push({name: 'Reacher Row', sets: 2, max: true, detailsEn: "Perform the first 5 reps slowly and do your best for the other reps", detailsTr: "İlk 5 tekrarı yavaşça yapın ve diğer tekrarlar için elinizden geleni yapın."});

        // day 17
        const day17Exercises = [];
        day17Exercises.push({name: 'Legs', isTitle: true});
        day17Exercises.push({name: 'Bodyweight Pause Squats', sets: 3, reps: adjustNumbers(squat * 0.7), detailsEn: "Pause for 3 seconds at the bottom of the squat.", detailsTr: "Squatın en altında 3 saniye bekleyin."});
        day17Exercises.push({name: 'Lunges', sets: 2, reps: adjustNumbers(squat * 0.6)});
        day17Exercises.push({name: 'Bodyweight Squats', sets: 3, reps: adjustNumbers(squat * 0.6)});
        day17Exercises.push({name: 'Climbers', sets: 2, max: true});
        day17Exercises.push({name: 'Bodyweight Squats', sets: 2, max: true});

        // day 18
        const day18Exercises = [];
        day18Exercises.push({name: 'Core', isTitle: true});
        day18Exercises.push({name: 'Mountain Climbers', sets: 3, seconds: "30"});
        day18Exercises.push({name: 'Flutter Kicks', sets: 3, seconds: "30"});
        day18Exercises.push({name: 'Push-Up Plank', sets: 3, max: true});
        day18Exercises.push({name: 'Pigeon Stretch', sets: 5, seconds: "15", detailsEn: "Each Side", detailsTr: "Her Bir Taraf"});
        day18Exercises.push({name: 'Chest Doorway Stretch', sets: 2, seconds: "15", detailsEn: "Each Side \n Stand near a doorway. With the palms facing outward, grasp the edge of the doorway with one or both arms. Keeping the elbows straight, lean forward gently.", detailsTr: "Her Bir Taraf \n Bir kapı yakınında durun. Avuç içleri dışarıya bakacak şekilde, kapının kenarını bir veya her iki kolunuzla kavrayın. Dizleri düz tutarak, yavaşça öne doğru eğilin."});

        // day 19
        const day19Exercises = [];
        day19Exercises.push({name: 'Push', isTitle: true});
        day19Exercises.push({name: 'Knee Push-Up', sets: 4, reps: adjustNumbers(pushup * 1.5)});
        day19Exercises.push({name: 'Incline Push-Up', sets: 4, reps: adjustNumbers(pushup * 2)});
        day19Exercises.push({name: 'Bench Dips', sets: 3, reps: adjustNumbers(pushup * 2)});
        day19Exercises.push({name: 'Shoulder Taps', sets: 3, seconds: "10-20"});
        day19Exercises.push({name: 'Sideway Bear Crawls', sets: 3, seconds: "10-20"});
        day19Exercises.push({name: 'Superman', sets: 2, max: true});

        // day 20
        const day20Exercises = [];
        day20Exercises.push({name: 'Pull', isTitle: true});
        day20Exercises.push({name: 'Negative Pull-Up', sets: 3, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day20Exercises.push({name: 'Negative Chin-Up', sets: 3, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day20Exercises.push({name: 'Towel Lat Pull Down', sets: 3, reps: "10-12", detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day20Exercises.push({name: 'Low Towel Row', sets: 3, reps: 10, detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day20Exercises.push({name: 'Reacher Row', sets: 3, max: true, detailsEn: "Perform the first 5 reps slowly and do your best for the other reps", detailsTr: "İlk 5 tekrarı yavaşça yapın ve diğer tekrarlar için elinizden geleni yapın."});


        // day 21
        const day21Exercises = [];
        day21Exercises.push({name: 'Cardio', isTitle: true});
        if (!goals) {
            day21Exercises.push({name: 'Walk', minutes: "45"});
        }
        if (goals) {
            day21Exercises.push({name: 'Jog', minutes: "10"});
        }

        // day 22
        const day22Exercises = [];
        day22Exercises.push({name: 'Push', isTitle: true});
        day22Exercises.push({name: 'Knee Push-Up', sets: 4, reps: adjustNumbers(pushup * 1.5), detailsEn: "Pause for 3 seconds at the bottom of the push-up.", detailsTr: "Push-up'ın en altında 3 saniye bekleyin."});
        day22Exercises.push({name: 'Incline Push-Up', sets: 4, reps: adjustNumbers(pushup * 2)});
        day22Exercises.push({name: 'Bench Dips', sets: 4, reps: adjustNumbers(pushup * 2)});
        day22Exercises.push({name: 'Shoulder Taps', sets: 3, seconds: "10-20"});
        day22Exercises.push({name: 'Sideway Bear Crawls', sets: 3, seconds: "10-20"});
        day22Exercises.push({name: 'Superman', sets: 3, max: true});

        // day 23
        const day23Exercises = [];
        day23Exercises.push({name: 'Pull', isTitle: true});
        day23Exercises.push({name: 'Negative Pull-Up', sets: 3, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day23Exercises.push({name: 'Negative Chin-Up', sets: 3, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day23Exercises.push({name: 'Towel Lat Pull Down', sets: 3, reps: "10-12", detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day23Exercises.push({name: 'Low Towel Row', sets: 3, reps: 10, detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day23Exercises.push({name: 'Reacher Row', sets: 3, max: true, detailsEn: "Perform the first 5 reps slowly and do your best for the other reps", detailsTr: "İlk 5 tekrarı yavaşça yapın ve diğer tekrarlar için elinizden geleni yapın."});

        // day 24
        const day24Exercises = [];
        day24Exercises.push({name: 'Legs', isTitle: true});
        day24Exercises.push({name: 'Bodyweight Pause Squats', sets: 3, reps: adjustNumbers(squat * 0.9), detailsEn: "Pause for 3 seconds at the bottom of the squat.", detailsTr: "Squat'ın en altında 3 saniye bekleyin."});
        day24Exercises.push({name: 'Lunges', sets: 3, reps: adjustNumbers(squat * 0.6)});
        day24Exercises.push({name: 'Bodyweight Squats', sets: 3, reps: adjustNumbers(squat * 0.8)});
        day24Exercises.push({name: 'Climbers', sets: 3, max: true});
        day24Exercises.push({name: 'Bodyweight Squats', sets: 2, max: true});

        // day 25
        const day25Exercises = [];
        day25Exercises.push({name: 'Core', isTitle: true});
        day25Exercises.push({name: 'Mountain Climbers', sets: 1, seconds: "30"});
        day25Exercises.push({name: 'Flutter Kicks', sets: 1, seconds: "30"});
        day25Exercises.push({name: 'Push-Up Plank', sets: 1, max: true});
        day25Exercises.push({name: 'Pigeon Stretch', sets: 5, seconds: "15", detailsEn: "Each Side", detailsTr: "Her Bir Taraf"});
        day25Exercises.push({name: 'Chest Doorway Stretch', sets: 2, seconds: "15", detailsEn: "Each Side \n Stand near a doorway. With the palms facing outward, grasp the edge of the doorway with one or both arms. Keeping the elbows straight, lean forward gently.", detailsTr: "Her Bir Taraf \n Bir kapı yakınında durun. Avuç içleri dışarıya bakacak şekilde, kapının kenarını bir veya her iki kolunuzla kavrayın. Dizleri düz tutarak, yavaşça öne doğru eğilin."});

        // day 26
        const day26Exercises = [];
        day26Exercises.push({name: 'Push', isTitle: true});
        day26Exercises.push({name: 'Knee Push-Up', sets: 4, reps: adjustNumbers(pushup * 1.5)});
        day26Exercises.push({name: 'Incline Push-Up', sets: 4, reps: adjustNumbers(pushup * 2)});
        day26Exercises.push({name: 'Bench Dips', sets: 4, reps: adjustNumbers(pushup * 2)});
        day26Exercises.push({name: 'Shoulder Taps', sets: 3, seconds: "10-20"});
        day26Exercises.push({name: 'Sideway Bear Crawls', sets: 3, seconds: "10-20"});
        day26Exercises.push({name: 'Superman', sets: 3, max: true});

        // day 27
        const day27Exercises = [];
        day27Exercises.push({name: 'Pull', isTitle: true});
        day27Exercises.push({name: 'Negative Pull-Up', sets: 3, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day27Exercises.push({name: 'Negative Chin-Up', sets: 3, max: true, detailsEn: "Wait at the top, go down slowly.", detailsTr: "Üstte bekleyin, yavaşça inin."});
        day27Exercises.push({name: 'Towel Lat Pull Down', sets: 4, reps: "10-12", detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day27Exercises.push({name: 'Low Towel Row', sets: 4, reps: 10, detailsEn: "Perform the motion slowly and focus on contraction.", detailsTr: "Hareketi yavaşça yapın ve kasılma üzerine odaklanın."});
        day27Exercises.push({name: 'Reacher Row', sets: 3, max: true, detailsEn: "Perform the first 5 reps slowly and do your best for the other reps", detailsTr: "İlk 5 tekrarı yavaşça yapın ve diğer tekrarlar için elinizden geleni yapın."});


        //day 28
        const day28Exercises = [];
        day28Exercises.push({name: 'Cardio', isTitle: true});
        if (!goals) {
            day28Exercises.push({name: 'Walk', minutes: "45"});
        }
        if (goals) {
            day28Exercises.push({name: 'Jog', minutes: "10"});
        }

        days.push(day1Exercises);
        days.push(day2Exercises);
        days.push(day3Exercises);
        days.push(day4Exercises);
        days.push(day5Exercises);
        days.push(day6Exercises);
        days.push(day7Exercises);
        days.push(day8Exercises);
        days.push(day9Exercises);
        days.push(day10Exercises);
        days.push(day11Exercises);
        days.push(day12Exercises);
        days.push(day13Exercises);
        days.push(day14Exercises);
        days.push(day15Exercises);
        days.push(day16Exercises);
        days.push(day17Exercises);
        days.push(day18Exercises);
        days.push(day19Exercises);
        days.push(day20Exercises);
        days.push(day21Exercises);
        days.push(day22Exercises);
        days.push(day23Exercises);
        days.push(day24Exercises);
        days.push(day25Exercises);
        days.push(day26Exercises);
        days.push(day27Exercises);
        days.push(day28Exercises);

    }

    const createIntermeditateProgram = (pushup, pullup, squat, goals) => {

        //day 1 
        const day1Exercises = [];
        day1Exercises.push({name: 'Push', isTitle: true});
        day1Exercises.push({ name: 'Decline Push-Up', sets: 4, reps: adjustNumbers(pushup * 0.6) });
        day1Exercises.push({ name: 'Wide Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.5) });
        day1Exercises.push({ name: 'Diamond Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.5) });
        day1Exercises.push({ name: 'Push-Up', sets: 2, max: true, detailsEn: "Fast in the positive and slow (about 3 seconds) in the negative.", detailsTr: "Pozitifte hızlı, negatifte (yaklaşık 3 saniye) yavaş." });
        day1Exercises.push({ name: 'Bench Dips', sets: 2, max: true, detailsEn: "Legs can be elevated.", detailsTr: "Bacaklar yukarıda olabilir." });
  
        // Day 2
        const day2Exercises = [];
        day2Exercises.push({ name: 'Pull', isTitle: true });
        day2Exercises.push({ name: 'Pull-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6) });
        day2Exercises.push({ name: 'Chin-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6) });
        day2Exercises.push({ name: 'Australian Pull-Up', sets: 3, reps: adjustNumbers(pullup * 0.7) });
        day2Exercises.push({ name: 'Reverse Grip Australian Pull-Up', sets: 3, reps: adjustNumbers(pullup * 0.7), detailsEn: "Try to feel your biceps.", detailsTr: "Bicepslerinizi hissetmeye çalışın." });
        day2Exercises.push({ name: 'Superman', sets: 2, max: true });
        
        // Day 3
        const day3Exercises = [];
        day3Exercises.push({ name: 'Legs', isTitle: true });
        day3Exercises.push({ name: 'Bodyweight Squats', sets: 2, reps: 20, detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı." });
        day3Exercises.push({ name: 'Bulgarian Split Squats', sets: 4, reps: 20, detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı." });
        day3Exercises.push({ name: 'Bodyweight Single Leg Deadlift', sets: 3, reps: 20, detailsEn: "5 reps slow - 15 reps fast.", detailsTr: "5 tekrar yavaş - 15 tekrar hızlı." });
        day3Exercises.push({ name: 'Bodyweight Squats', sets: 4, reps: adjustNumbers(squat * 0.7), detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı." });
        day3Exercises.push({ name: 'Jumping Squats', sets: 1, max: true, detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı." });
        
        // Day 4
        const day4Exercises = [];
        day4Exercises.push({ name: 'Core', isTitle: true });
        day4Exercises.push({ name: 'Mountain Climbers', sets: 1, seconds: "30" });
        day4Exercises.push({ name: 'Flutter Kicks', sets: 1, seconds: "30" });
        day4Exercises.push({ name: 'Bar Hanging Leg Raises', sets: 1, max: true });
        day4Exercises.push({ name: 'Push-Up Plank', sets: 1, max: true });
        day4Exercises.push({ name: 'Pigeon Stretch', sets: 5, seconds: "15", detailsEn: "Each Side", detailsTr: "Her Bir Taraf" });
        day4Exercises.push({ name: 'Chest Doorway Stretch', sets: 2, seconds: "15", detailsEn: "Each Side \n Stand near a doorway. With the palms facing outward, grasp the edge of the doorway with one or both arms. Keeping the elbows straight, lean forward gently.", detailsTr: "Her Bir Taraf \n Bir kapı yakınında durun. Avuç içleri dışarıya bakacak şekilde, kapının kenarını bir veya her iki kolunuzla kavrayın. Dizleri düz tutarak, yavaşça öne doğru eğilin." });
  
        // Day 5
        const day5Exercises = [];
        day5Exercises.push({ name: 'Push', isTitle: true });
        day5Exercises.push({ name: 'Pike Push-Up', sets: 5, reps: adjustNumbers(pushup * 0.3) });
        day5Exercises.push({ name: 'Hindu Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.4) });
        day5Exercises.push({ name: 'Hover Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.4) });
        day5Exercises.push({ name: 'Bench Dips', sets: 3, max: true, detailsEn: "Legs can be elevated.", detailsTr: "Bacaklar yukarıda olabilir." });
        day5Exercises.push({ name: 'Plank Front-Arm Reach', sets: 3, max: true });
        
        // Day 6
        const day6Exercises = [];
        day6Exercises.push({ name: 'Pull', isTitle: true });
        day6Exercises.push({ name: 'Chin-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6), detailsEn: "Do not hold the bar too wide or too close, try to hold it around shoulder width.", detailsTr: "Barı çok geniş veya çok yakın tutmayın, omuz genişliğinde tutmaya çalışın." });
        day6Exercises.push({ name: 'Inverted-Rows', sets: 3, reps: adjustNumbers(pullup * 0.8) });
        day6Exercises.push({ name: 'Negative Pull-Ups', sets: 2, max: true, detailsEn: "Squeeze at the top and go down slowly.", detailsTr: "En üstte kası sıkıştırın ve yavaşça aşağı inin." });
        day6Exercises.push({ name: 'Negative Chin-Ups', sets: 2, max: true, detailsEn: "Squeeze at the top and go down slowly.", detailsTr: "En üstte kası sıkıştırın ve yavaşça aşağı inin." });
        day6Exercises.push({ name: 'W-Extensions', sets: 2, max: true });
        
        // Day 7
        const day7Exercises = [];
        day7Exercises.push({ name: 'Cardio', isTitle: true });
        day7Exercises.push({ name: 'V-Ups', sets: 2, reps: "15-25" });
        day7Exercises.push({ name: 'Leg Raises', sets: 2, reps: "15-25" });
        if (!goals) {
            day7Exercises.push({ name: 'Walk', minutes: "45" });
        }
        if (goals) {
            day7Exercises.push({ name: 'Jog', minutes: "10" });
        }
        
        // Day 8
        const day8Exercises = [];
        day8Exercises.push({ name: 'Push', isTitle: true });
        day8Exercises.push({ name: 'Decline Push-Up', sets: 4, reps: adjustNumbers(pushup * 0.6) });
        day8Exercises.push({ name: 'Wide Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.5) });
        day8Exercises.push({ name: 'Diamond Push-Up', sets: 4, reps: adjustNumbers(pushup * 0.5) });
        day8Exercises.push({ name: 'Push-Up', sets: 2, max: true, detailsEn: "Fast in the positive and slow (about 3 seconds) in the negative.", detailsTr: "Pozitifte hızlı ve negatifte (yaklaşık 3 saniye) yavaş." });
        day8Exercises.push({ name: 'Bench Dips', sets: 2, max: true, detailsEn: "Legs can be elevated.", detailsTr: "Bacaklar yukarıda olabilir." });
        
        // Day 9
        const day9Exercises = [];
        day9Exercises.push({ name: 'Pull', isTitle: true });
        day9Exercises.push({ name: 'Pull-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6) });
        day9Exercises.push({ name: 'Chin-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6) });
        day9Exercises.push({ name: 'Australian Pull-Up', sets: 3, reps: adjustNumbers(pullup * 0.5) });
        day9Exercises.push({ name: 'Reverse Grip Australian Pull-Up', sets: 3, reps: adjustNumbers(pullup * 0.5), detailsEn: "Try to feel your biceps.", detailsTr: "Bicepslerinizi hissetmeye çalışın." });
        day9Exercises.push({ name: 'Superman', sets: 2, max: true });
        day9Exercises.push({ name: 'Pseudo Planche', sets: 1, max: true });
        
        // Day 10
        const day10Exercises = [];
        day10Exercises.push({ name: 'Legs', isTitle: true });
        day10Exercises.push({ name: 'Bodyweight Squats', sets: 2, reps: 20, detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı." });
        day10Exercises.push({ name: 'Bulgarian Split Squats', sets: 5, reps: 20, detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı." });
        day10Exercises.push({ name: 'Bodyweight Single Leg Deadlift', sets: 4, reps: 20, detailsEn: "5 reps slow - 15 reps fast.", detailsTr: "5 tekrar yavaş - 15 tekrar hızlı." });
        day10Exercises.push({ name: 'Bodyweight Squats', sets: 4, reps: adjustNumbers(squat * 0.7), detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı." });
        day10Exercises.push({ name: 'Jumping Squats', sets: 1, max: true, detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı." });
        
        // Day 11
        const day11Exercises = [];
        day11Exercises.push({ name: 'Core', isTitle: true });
        day11Exercises.push({ name: 'Mountain Climbers', sets: 1, seconds: "30" });
        day11Exercises.push({ name: 'Flutter Kicks', sets: 1, seconds: "30" });
        day11Exercises.push({ name: 'Bar Hanging Leg Raises', sets: 1, max: true });
        day11Exercises.push({ name: 'Push-Up Plank', sets: 1, max: true});
        day11Exercises.push({ name: 'Pigeon Stretch', sets: 5, seconds: "15", detailsEn: "Each Side", detailsTr: "Her Bir Taraf" });
        day11Exercises.push({ name: 'Chest Doorway Stretch', sets: 2, seconds: "15", detailsEn: "Each Side \n Stand near a doorway. With the palms facing outward, grasp the edge of the doorway with one or both arms. Keeping the elbows straight, lean forward gently.", detailsTr: "Her Bir Taraf \n Bir kapı yakınında durun. Avuç içleri dışarıya bakacak şekilde, kapının kenarını bir veya her iki kolunuzla kavrayın. Dizleri düz tutarak, dirsekleri yavaşça öne doğru eğin."});
        
        // Day 12
        const day12Exercises = [];
        day12Exercises.push({ name: 'Push', isTitle: true });
        day12Exercises.push({ name: 'Pike Push-Up', sets: 5, reps: adjustNumbers(pushup * 0.3) });
        day12Exercises.push({ name: 'Hindu Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.4) });
        day12Exercises.push({ name: 'Hover Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.4) });
        day12Exercises.push({ name: 'Bench Dips', sets: 3, max: true, detailsEn: "Legs can be elevated.", detailsTr: "Bacaklar yukarıda olabilir." });
        day12Exercises.push({ name: 'Plank Front-Arm Reach', sets: 3, max: true });
        
        // Day 13
        const day13Exercises = [];
        day13Exercises.push({ name: 'Pull', isTitle: true });
        day13Exercises.push({ name: 'Chin-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6), detailsEn: "Do not hold the bar too wide or too close, try to hold it around shoulder width.", detailsTr: "Barı çok geniş veya çok yakın tutmayın, omuz genişliğinde tutmaya çalışın." });
        day13Exercises.push({ name: 'Inverted-Rows', sets: 3, reps: adjustNumbers(pullup * 0.8) });
        day13Exercises.push({ name: 'Negative Pull-Ups', sets: 2, max: true, detailsEn: "Squeeze at the top and go down slowly.", detailsTr: "En üstte sıkıştırın ve yavaşça aşağı inin." });
        day13Exercises.push({ name: 'Negative Chin-Ups', sets: 2, max: true, detailsEn: "Squeeze at the top and go down slowly.", detailsTr: "En üstte sıkıştırın ve yavaşça aşağı inin." });
        day13Exercises.push({ name: 'W-Extensions', sets: 2, max: true });
  

        //day 14
        const day14Exercises = [];
        day14Exercises.push({name: 'Cardio', isTitle: true});
        day14Exercises.push({name: 'V-Ups', sets: 3, reps: "15-25"});
        day14Exercises.push({name: 'Leg Raises', sets: 3, reps: "15-25"});
        if (!goals) {
            day14Exercises.push({name: 'Walk', minutes: "45"});
        }
        if (goals) {
            day14Exercises.push({name: 'Jog', minutes: "10"});
        }
        
        // Day 15
        const day15Exercises = [];
        day15Exercises.push({ name: 'Push', isTitle: true });
        day15Exercises.push({ name: 'Decline Push-Up', sets: 5, reps: adjustNumbers(pushup * 0.7) });
        day15Exercises.push({ name: 'Wide Push-Up', sets: 4, reps: adjustNumbers(pushup * 0.6) });
        day15Exercises.push({ name: 'Diamond Push-Up', sets: 4, reps: adjustNumbers(pushup * 0.6) });
        day15Exercises.push({ name: 'Push-Up', sets: 2, max: true, detailsEn: "Fast in the positive and slow (about 3 seconds) in the negative.", detailsTr: "Pozitifte hızlı ve negatifte (yaklaşık 3 saniye) yavaş." });
        day15Exercises.push({ name: 'Bench Dips', sets: 2, max: true, detailsEn: "Legs can be elevated.", detailsTr: "Bacaklar yukarıda olabilir." });

        // Day 16
        const day16Exercises = [];
        day16Exercises.push({ name: 'Pull', isTitle: true });
        day16Exercises.push({ name: 'Pull-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6) });
        day16Exercises.push({ name: 'Chin-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6) });
        day16Exercises.push({ name: 'Australian Pull-Up', sets: 3, reps: adjustNumbers(pullup * 0.5) });
        day16Exercises.push({ name: 'Reverse Grip Australian Pull-Up', sets: 3, reps: adjustNumbers(pullup * 0.5), detailsEn: "Try to feel your biceps.", detailsTr: "Bicepslerinizi hissetmeye çalışın." });
        day16Exercises.push({ name: 'Superman', sets: 2, max: true });
        day16Exercises.push({ name: 'Pseudo Planche', sets: 2, max: true });

        //day 17
        const day17Exercises = [];
        day17Exercises.push({name: 'Legs', isTitle: true});
        day17Exercises.push({name: 'Bodyweight Squats', sets: 2, reps: 20, detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı."});
        day17Exercises.push({name: 'Bulgarian Split Squats', sets: 5, reps: 20, detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı."});
        day17Exercises.push({name: 'Bodyweight Single Leg Deadlift', sets: 4, reps: 20, detailsEn: "5 reps slow - 15 reps fast.", detailsTr: "5 tekrar yavaş - 15 tekrar hızlı."});
        day17Exercises.push({name: 'Bodyweight Squats', sets: 4, reps: adjustNumbers(squat * 0.8), detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı."});
        day17Exercises.push({name: 'Jumping Squats', sets: 2, max: true, detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı."});

        //day 18
        const day18Exercises = [];
        day18Exercises.push({name: 'Core', isTitle: true});
        day18Exercises.push({name: 'Mountain Climbers', sets: 1, seconds: "30"});
        day18Exercises.push({name: 'Flutter Kicks', sets: 1, seconds: "30"});
        day18Exercises.push({name: 'Bar Hanging Leg Raises', sets: 1, max: true});
        day18Exercises.push({name: 'Push-Up Plank', sets: 2, max: true});
        day18Exercises.push({name: 'Pigeon Stretch', sets: 5, seconds: "15", detailsEn: "Each Side", detailsTr: "Her Bir Taraf"});
        day18Exercises.push({name: 'Chest Doorway Stretch', sets: 2, seconds: "15", detailsEn: "Each Side \n Stand near a doorway. With the palms facing outward, grasp the edge of the doorway with one or both arms. Keeping the elbows straight, lean forward gently.", detailsTr: "Her Bir Taraf \n Bir kapı yakınında durun. Avuç içleri dışarıya bakacak şekilde, kapının kenarını bir veya her iki kolunuzla kavrayın. Dizleri düz tutarak, dirsekleri hafifçe öne doğru eğin."});

        //day 19
        const day19Exercises = [];
        day19Exercises.push({name: 'Push', isTitle: true});
        day19Exercises.push({name: 'Pike Push-Up', sets: 5, reps: adjustNumbers(pushup * 0.3)});
        day19Exercises.push({name: 'Hindu Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.4)});
        day19Exercises.push({name: 'Hover Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.4)});
        day19Exercises.push({name: 'Bench Dips', sets: 3, max: true, detailsEn: "Legs can be elevated.", detailsTr: "Bacaklar yukarıda olabilir."});
        day19Exercises.push({name: 'Plank Front-Arm Reach', sets: 3, max: true});

        //day 20
        const day20Exercises = [];
        day20Exercises.push({name: 'Pull', isTitle: true});
        day20Exercises.push({name: 'Chin-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6), detailsEn: "Do not hold the bar too wide or too close, try to hold it around shoulder width.", detailsTr: "Barı çok geniş veya çok yakın tutmayın, omuz genişliğinde tutmaya çalışın."});
        day20Exercises.push({name: 'Inverted-Rows', sets: 3, reps: adjustNumbers(pullup * 0.8)});
        day20Exercises.push({name: 'Negative Pull-Ups', sets: 2, max: true, detailsEn: "Squeeze at the top and go down slowly.", detailsTr: "En üstte sıkıştırın ve yavaşça aşağı inin."});
        day20Exercises.push({name: 'Negative Chin-Ups', sets: 2, max: true, detailsEn: "Squeeze at the top and go down slowly.", detailsTr: "En üstte sıkıştırın ve yavaşça aşağı inin."});
        day20Exercises.push({name: 'W-Extensions', sets: 2, max: true});

        //day 21
        const day21Exercises = [];
        day21Exercises.push({name: 'Cardio', isTitle: true});
        day21Exercises.push({name: 'V-Ups', sets: 3, reps: "15-25"});
        day21Exercises.push({name: 'Leg Raises', sets: 3, reps: "15-25"});
        if (!goals) {
            day21Exercises.push({name: 'Walk', minutes: "45"});
        }
        if (goals) {
            day21Exercises.push({name: 'Jog', minutes: "10"});
        }

        //day 22
        const day22Exercises = [];
        day22Exercises.push({name: 'Push', isTitle: true});
        day22Exercises.push({name: 'Decline Push-Up', sets: 5, reps: adjustNumbers(pushup * 0.8)});
        day22Exercises.push({name: 'Wide Push-Up', sets: 4, reps: adjustNumbers(pushup * 0.7)});
        day22Exercises.push({name: 'Diamond Push-Up', sets: 4, reps: adjustNumbers(pushup * 0.7)});
        day22Exercises.push({name: 'Push-Up', sets: 2, max: true, detailsEn: "Fast in the positive and slow (about 3 seconds) in the negative.", detailsTr: "Pozitifte hızlı ve negatifte (yaklaşık 3 saniye) yavaş."});
        day22Exercises.push({name: 'Bench Dips', sets: 3, max: true, detailsEn: "Legs can be elevated.", detailsTr: "Bacaklar yukarıda olabilir."});

        //day 23
        const day23Exercises = [];
        day23Exercises.push({name: 'Pull', isTitle: true});
        day23Exercises.push({name: 'Pull-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6)});
        day23Exercises.push({name: 'Chin-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6)});
        day23Exercises.push({name: 'Australian Pull-Up', sets: 3, reps: adjustNumbers(pullup * 0.5)});
        day23Exercises.push({name: 'Reverse Grip Australian Pull-Up', sets: 3, reps: adjustNumbers(pullup * 0.5), detailsEn: "Try to feel your biceps.", detailsTr: "Bicepslerinizi hissetmeye çalışın."});
        day23Exercises.push({name: 'Superman', sets: 2, max: true});
        day23Exercises.push({name: 'Pseudo Planche', sets: 2, max: true});

        //day 24
        const day24Exercises = [];
        day24Exercises.push({name: 'Legs', isTitle: true});
        day24Exercises.push({name: 'Bodyweight Squats', sets: 2, reps: 20, detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı."});
        day24Exercises.push({name: 'Bulgarian Split Squats', sets: 5, reps: 30, detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı."});
        day24Exercises.push({name: 'Bodyweight Single Leg Deadlift', sets: 4, reps: 30, detailsEn: "5 reps slow - 15 reps fast.", detailsTr: "5 tekrar yavaş - 15 tekrar hızlı."});
        day24Exercises.push({name: 'Bodyweight Squats', sets: 4, reps: adjustNumbers(squat * 0.9), detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı."});
        day24Exercises.push({name: 'Jumping Squats', sets: 2, max: true, detailsEn: "10 reps slow - 10 reps fast.", detailsTr: "10 tekrar yavaş - 10 tekrar hızlı."});

        //day 25
        const day25Exercises = [];
        day25Exercises.push({name: 'Core', isTitle: true});
        day25Exercises.push({name: 'Mountain Climbers', sets: 1, seconds: "30"});
        day25Exercises.push({name: 'Flutter Kicks', sets: 1, seconds: "30"});
        day25Exercises.push({name: 'Bar Hanging Leg Raises', sets: 1, max: true});
        day25Exercises.push({name: 'Push-Up Plank', sets: 2, max: true});
        day25Exercises.push({name: 'Pigeon Stretch', sets: 5, seconds: "15", detailsEn: "Each Side", detailsTr: "Her Bir Taraf"});
        day25Exercises.push({name: 'Chest Doorway Stretch', sets: 2, seconds: "15", detailsEn: "Each Side \n Stand near a doorway. With the palms facing outward, grasp the edge of the doorway with one or both arms. Keeping the elbows straight, lean forward gently.", detailsTr: "Her Bir Taraf \n Bir kapı yakınında durun. Avuç içleri dışarıya bakacak şekilde, kapının kenarını bir veya her iki kolunuzla kavrayın. Dizleri düz tutarak, dirsekleri hafifçe öne doğru eğin."});
        
        //day 26
        const day26Exercises = [];
        day26Exercises.push({name: 'Push', isTitle: true});
        day26Exercises.push({name: 'Pike Push-Up', sets: 5, reps: adjustNumbers(pushup * 0.3)});
        day26Exercises.push({name: 'Hindu Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.4)});
        day26Exercises.push({name: 'Hover Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.4)});
        day26Exercises.push({name: 'Bench Dips', sets: 3, max: true, detailsEn: "Legs can be elevated.", detailsTr: "Bacaklar yukarıda olabilir."});
        day26Exercises.push({name: 'Plank Front-Arm Reach', sets: 3, max: true});

        //day 27
        const day27Exercises = [];
        day27Exercises.push({name: 'Pull', isTitle: true});
        day27Exercises.push({name: 'Chin-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6), detailsEn: "Do not hold the bar too wide or too close, try to hold it around shoulder width.", detailsTr: "Barı çok geniş veya çok yakın tutmayın, omuz genişliğinde tutmaya çalışın."});
        day27Exercises.push({name: 'Inverted-Rows', sets: 3, reps: adjustNumbers(pullup * 0.8)});
        day27Exercises.push({name: 'Negative Pull-Ups', sets: 2, max: true, detailsEn: "Squeeze at the top and go down slowly.", detailsTr: "En üstte sıkıştırın ve yavaşça aşağı inin."});
        day27Exercises.push({name: 'Negative Chin-Ups', sets: 2, max: true, detailsEn: "Squeeze at the top and go down slowly.", detailsTr: "En üstte sıkıştırın ve yavaşça aşağı inin."});
        day27Exercises.push({name: 'W-Extensions', sets: 2, max: true});

        //day 28
        const day28Exercises = [];
        day28Exercises.push({name: 'Cardio', isTitle: true});
        if (!goals) {
            day28Exercises.push({name: 'Walk', minutes: "45"});
        }
        if (goals) {
            day28Exercises.push({name: 'Jog', minutes: "10"});
        }

        days.push(day1Exercises);
        days.push(day2Exercises);
        days.push(day3Exercises);
        days.push(day4Exercises);
        days.push(day5Exercises);
        days.push(day6Exercises);
        days.push(day7Exercises);
        days.push(day8Exercises);
        days.push(day9Exercises);
        days.push(day10Exercises);
        days.push(day11Exercises);
        days.push(day12Exercises);
        days.push(day13Exercises);
        days.push(day14Exercises);
        days.push(day15Exercises);
        days.push(day16Exercises);
        days.push(day17Exercises);
        days.push(day18Exercises);
        days.push(day19Exercises);
        days.push(day20Exercises);
        days.push(day21Exercises);
        days.push(day22Exercises);
        days.push(day23Exercises);
        days.push(day24Exercises);
        days.push(day25Exercises);
        days.push(day26Exercises);
        days.push(day27Exercises);
        days.push(day28Exercises);

    }
    
    const createAdvancedProgram = (pushup, pullup, squat, goals) => {

        //day1 
        const day1Exercises = [];
        day1Exercises.push({name: 'Push', isTitle: true});
        day1Exercises.push({name: 'Handstand Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.3), detailsEn: "Can have support from a wall.", detailsTr: "Duvar desteği olabilir."});
        day1Exercises.push({name: 'Archer Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.5)});
        day1Exercises.push({name: 'Negative One Arm Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.4)});
        day1Exercises.push({name: 'Elevated Pike Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.5), detailsEn: "Fast in the positive and slow (about 3 seconds) in the negative.", detailsTr: "Pozitifte hızlı ve negatifte (yaklaşık 3 saniye) yavaş."});
        day1Exercises.push({name: 'Cross Arm Push-Up', sets: 1, max: true, });

        //day 2
        const day2Exercises = [];
        day2Exercises.push({name: 'Pull', isTitle: true});
        day2Exercises.push({name: 'One Arm Pull-Up', sets: 1, reps: adjustNumbers(pullup * 0.2), detailsEn: "For each side.", detailsTr: "Her bir taraf için."});
        day2Exercises.push({name: 'One Arm Chin-Up', sets: 1, reps: adjustNumbers(pullup * 0.2), detailsEn: "For each side.", detailsTr: "Her bir taraf için."});
        day2Exercises.push({name: 'Backpack Pull-Ups', sets: 6, reps: 6, detailsEn: "Increase the weight of the backpack every week while maintaining the same repetition number.", detailsTr: "Aynı tekrar sayısını korurken her hafta sırt çantasının ağırlığını artırın."});
        day2Exercises.push({name: 'Wide Grip Pull-Ups', sets: 4, reps: adjustNumbers(pullup * 0.4) });
        day2Exercises.push({name: 'Towel Pull-Ups', sets: 2, max: true});

        //day 3
        const day3Exercises = [];
        day3Exercises.push({name: 'Legs', isTitle: true});
        day3Exercises.push({name: 'Bodyweight Squats', sets: 1, reps: 100, detailsEn: "Warm-up."});
        day3Exercises.push({name: 'Pistol Squats', sets: 4, reps: adjustNumbers(squat * 0.6), detailsEn: "For each leg.", detailsTr: "Her bir bacak için."});
        day3Exercises.push({name: 'Nordic Curls', sets: 4, reps: adjustNumbers(squat * 0.6),});
        day3Exercises.push({name: 'Bulgarian Split Squats', sets: 4, reps: "3 Reps in Reserve", detailsEn: "For each leg.", detailsTr: "Her bir bacak için."});
        day3Exercises.push({name: 'Bodyweight Squats', sets: 1, max: true, detailsEn: "5 reps slow - 5 reps fast until failure.", detailsTr: "Başarısız olana kadar 5 tekrar yavaş - 5 tekrar hızlı."});

        //day 4

        
        const day4Exercises = [];
        day4Exercises.push({name: 'Core', isTitle: true});
        day4Exercises.push({name: 'Planche', sets: 1, max: true});
        day4Exercises.push({name: 'Dragon Flag', sets: 1, max: true, detailsEn: "If you can't perform, try easier variations", detailsTr: "Yapamıyorsanız, daha kolay varyasyonları deneyin"});
        day4Exercises.push({name: 'L-Sits', sets: 1, max: true, detailsEn: "Hold \n If you can't perform, try easier variations", detailsTr: "Tutun \n Yapamıyorsanız, daha kolay varyasyonları deneyin"});
        day4Exercises.push({name: 'Hanging Leg Raises', sets: 3, max: true});
        day4Exercises.push({name: 'Pigeon Stretch', sets: 3, seconds: "15", detailsEn: "Each side.", detailsTr: "Her bir taraf için."});
        day4Exercises.push({name: 'Chest Doorway Stretch', sets: 2, seconds: "15", detailsEn: "Each side. \n Stand near a doorway. With the palms facing outward, grasp the edge of the doorway with one or both arms. Keeping the elbows straight, lean forward gently.", detailsTr: "Her bir taraf için. \n Bir kapı yakınında durun. Avuç içleri dışarıya bakacak şekilde, kapının kenarını bir veya her iki kolunuzla kavrayın. Dizleri düz tutarak, yavaşça öne doğru eğilin."});

        //day 5
        const day5Exercises = [];
        day5Exercises.push({name: 'Push', isTitle: true});
        day5Exercises.push({name: 'One Arm Push-Up', sets: 2, max: true});
        day5Exercises.push({name: "Spiderman Push-Up", sets: 2, reps: adjustNumbers(pushup * 0.5)});
        day5Exercises.push({name: "Bodyweight Skull Crushers & Bench Dips", sets: 3, reps: adjustNumbers(pushup * 0.5) + " & 2-3 Reps in Reserve", detailsEn: "Superset", detailsTr: "Superset"});
        day5Exercises.push({name: 'Diamond Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.5)});
        day5Exercises.push({name: 'Hindu Push-Up', sets: 1, max: true});
        day5Exercises.push({name: 'Handstand Hold', sets: 1, max: true});

        //day 6
        const day6Exercises = [];
        day6Exercises.push({name: 'Pull', isTitle: true});
        day6Exercises.push({name: 'Close-Grip Chin Up', sets: 3, reps: adjustNumbers(pullup * 0.6), detailsEn: "Biceps focused.", detailsTr: "Bicepslere odaknalarak."});
        day6Exercises.push({name: 'Chin Up', sets: 3, reps: adjustNumbers(pullup * 0.5), detailsEn: "Dead hang for 20 seconds before starting the movement.", detailsTr: "Hareketi başlatmadan önce 20 saniye boyunca asılı kalın."});
        day6Exercises.push({name: 'Chin Up', sets: 3, reps: adjustNumbers(pullup * 0.5), detailsEn: "The movement should takae 5 seconds while most of this time (3 seconds) should be spent for the negative part of this movement.", detailsTr: "Hareket 5 saniye sürmelidir ve bu sürenin çoğu (3 saniye) bu hareketin negatif kısmı için harcanmalıdır."});
        day6Exercises.push({name: "Pull Up & Australian Pull Ups Legs Elevated", sets: 3, reps: adjustNumbers(pushup * 0.5) + " & 1-2 Reps in Reserve"});
        day6Exercises.push({name: 'Side Plank', sets: 3, max: true});

        //day 7
        const day7Exercises = [];
        day7Exercises.push({name: 'Cardio', isTitle: true});
        day7Exercises.push({name: 'V-Ups', sets: 3, reps: "25-35"});
        day7Exercises.push({name: 'Leg Raises', sets: 3, reps: "25-35"});
        if (!goals) {
            day7Exercises.push({name: 'Walk', minutes: "45"});
        }
        if (goals) {
            day7Exercises.push({name: 'Jog', minutes: "10"});
        }

        //day 8
        const day8Exercises = [];
        day8Exercises.push({name: 'Push', isTitle: true});
        day8Exercises.push({name: 'Handstand Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.3), detailsEn: "Can have support from a wall.", detailsTr: "Duvar desteği alabilir."});
        day8Exercises.push({name: 'Archer Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.5)});
        day8Exercises.push({name: 'Negative One Arm Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.4)});
        day8Exercises.push({name: 'Elevated Pike Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.5), detailsEn: "Fast in the positive and slow (about 3 seconds) in the negative.", detailsTr: "Pozitif kısımda hızlı ve negatif kısımda (yaklaşık 3 saniye) yavaş."});
        day8Exercises.push({name: 'Cross Arm Push-Up', sets: 1, max: true, });

        //day 9
        const day9Exercises = [];
        day9Exercises.push({name: 'Pull', isTitle: true});
        day9Exercises.push({name: 'One Arm Pull-Up', sets: 1, reps: adjustNumbers(pullup * 0.3), detailsEn: "For each side.", detailsTr: "Her bir taraf için."});
        day9Exercises.push({name: 'One Arm Chin-Up', sets: 1, reps: adjustNumbers(pullup * 0.3), detailsEn: "For each side.", detailsTr: "Her bir taraf için."});
        day9Exercises.push({name: 'Backpack Pull-Ups', sets: 6, reps: 6, detailsEn: "Increase the weight of the backpack every week while maintaining the same repetition number.", detailsTr: "Her hafta aynı tekrar sayısını korurken sırt çantasının ağırlığını artırın."});
        day9Exercises.push({name: 'Wide Grip Pull-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6) });
        day9Exercises.push({name: 'Towel Pull-Ups', sets: 2, max: true});

        //day 10
        const day10Exercises = [];
        day10Exercises.push({name: 'Legs', isTitle: true});
        day10Exercises.push({name: 'Bodyweight Squats', sets: 1, reps: 100, detailsEn: "Warm-up."});
        day10Exercises.push({name: 'Pistol Squats', sets: 5, reps: adjustNumbers(squat * 0.6), detailsEn: "For each leg.", detailsTr: "Her bir bacak için."});
        day10Exercises.push({name: 'Nordic Curls', sets: 5, reps: adjustNumbers(squat * 0.6),});
        day10Exercises.push({name: 'Bulgarian Split Squats', sets: 4, reps: "3 Reps in Reserve", detailsEn: "For each leg.", detailsTr: "Her bir bacak için."});
        day10Exercises.push({name: 'Bodyweight Squats', sets: 1, max: true, detailsEn: "5 reps slow - 5 reps fast until failure.", detailsTr: "Bitişe kadar 5 tekrar yavaş - 5 tekrar hızlı."});

        //day 11
        const day11Exercises = [];
        day11Exercises.push({name: 'Core', isTitle: true});
        day11Exercises.push({name: 'Planche', sets: 2, max: true});
        day11Exercises.push({name: 'Dragon Flag', sets: 2, max: true, detailsEn: "If you can't perform, try easier variations", detailsTr: "Yapamıyorsanız, daha kolay varyasyonları deneyin."});
        day11Exercises.push({name: 'L-Sits', sets: 2, max: true, detailsEn: "Hold \n If you can't perform, try easier variations", detailsTr: "Tutun \n Yapamıyorsanız, daha kolay varyasyonları deneyin."});
        day11Exercises.push({name: 'Hanging Leg Raises', sets: 3, max: true});
        day11Exercises.push({name: 'Pigeon Stretch', sets: 5, seconds: "15", detailsEn: "Each side.", detailsTr: "Her bir taraf."});
        day11Exercises.push({name: 'Chest Doorway Stretch', sets: 2, seconds: "15", detailsEn: "Each side. \n Stand near a doorway. With the palms facing outward, grasp the edge of the doorway with one or both arms. Keeping the elbows straight, lean forward gently.", detailsTr: "Her bir taraf. \n Bir kapının yakınında durun. Avuç içleri dışarıya bakacak şekilde, bir veya her iki kolunuzla kapının kenarını kavrayın. Dizleri düz tutarak, dirsekleri hafifçe öne doğru eğin."});

        //day 12
        const day12Exercises = [];
        day12Exercises.push({name: 'Push', isTitle: true});
        day12Exercises.push({name: 'One Arm Push-Up', sets: 1, max: true, detailsEn: "For each side.", detailsTr: "Her bir taraf için."});
        day12Exercises.push({name: "Spiderman Push-Up", sets: 2, reps: adjustNumbers(pushup * 0.5)});
        day12Exercises.push({name: "Bodyweight Skull Crushers & Bench Dips", sets: 3, reps: adjustNumbers(pushup * 0.5) + " & 2-3 Reps in Reserve", detailsEn: "Add a little incline for the bodyweight skull crushers in order to hit the long head.", detailsTr: "odyweight skull crushers'a biraz eğim ekleyin."});
        day12Exercises.push({name: 'Diamond Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.5)});
        day12Exercises.push({name: 'Hindu Push-Up', sets: 1, max: true});
        day12Exercises.push({name: 'Handstand Hold', sets: 1, max: true});

        //day 13
        const day13Exercises = [];
        day13Exercises.push({name: 'Pull', isTitle: true});
        day13Exercises.push({name: 'Close-Grip Chin Up', sets: 3, reps: adjustNumbers(pullup * 0.7), detailsEn: "Biceps focused.", detailsTr: "Bicepslere odaklanarak."});
        day13Exercises.push({name: 'Chin Up', sets: 3, reps: adjustNumbers(pullup * 0.6), detailsEn: "Dead hang for 20 seconds before starting the movement.", detailsTr: "Harekete başlamadan önce 20 saniye boyunca asılı kalın."});
        day13Exercises.push({name: 'Chin Up', sets: 3, reps: adjustNumbers(pullup * 0.5), detailsEn: "The movement should takae 5 seconds while most of this time (3 seconds) should be spent for the negative part of this movement.", detailsTr: "Hareket 5 saniye sürmeli ve bu sürenin çoğu (3 saniye) hareketin negatif kısmı için harcanmalıdır."});
        day13Exercises.push({name: "Pull Up & Australian Pull Ups Legs Elevated", sets: 3, reps: adjustNumbers(pushup * 0.5) + " & 1-2 Reps in Reserve",});
        day13Exercises.push({name: 'Side Plank', sets: 3, max: true});

        //day 14
        const day14Exercises = [];
        day14Exercises.push({name: 'Cardio', isTitle: true});
        day14Exercises.push({name: 'V-Ups', sets: 3, reps: "25-35"});
        day14Exercises.push({name: 'Leg Raises', sets: 3, reps: "25-35"});
        if (!goals) {
            day14Exercises.push({name: 'Walk', minutes: "45"});
        }
        if (goals) {
            day14Exercises.push({name: 'Jog', minutes: "10"});
        }

        //day 15
        const day15Exercises = [];
        day15Exercises.push({name: 'Push', isTitle: true});
        day15Exercises.push({name: 'Handstand Push-Up', sets: 4, reps: adjustNumbers(pushup * 0.6), detailsEn: "Can have support from a wall.", detailsTr: "Duvara dayanarak yap."});
        day15Exercises.push({name: 'Archer Push-Up', sets: 4, reps: adjustNumbers(pushup * 0.6)});
        day15Exercises.push({name: 'Negative One Arm Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.6)});
        day15Exercises.push({name: 'Elevated Pike Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.6), detailsEn: "Fast in the positive and slow (about 3 seconds) in the negative.", detailsTr: "Pozitifte hızlı, negatifte yavaş (3 saniye) yap."});
        day15Exercises.push({name: 'Cross Arm Push-Up', sets: 1, max: true, });

        //day 16
        const day16Exercises = [];
        day16Exercises.push({name: 'Pull', isTitle: true});
        day16Exercises.push({name: 'One Arm Pull-Up', sets: 2, reps: adjustNumbers(pullup * 0.3), detailsEn: "For each side.", detailsTr: "Her iki taraf için."});
        day16Exercises.push({name: 'One Arm Chin-Up', sets: 2, reps: adjustNumbers(pullup * 0.3), detailsEn: "For each side.", detailsTr: "Her iki taraf için."});
        day16Exercises.push({name: 'Backpack Pull-Ups', sets: 6, reps: 6, detailsEn: "Increase the weight of the backpack every week while maintaining the same repetition number.", detailsTr: "Her hafta aynı tekrar sayısını korurken sırt çantasının ağırlığını artırın."});
        day16Exercises.push({name: 'Wide Grip Pull-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6) });
        day16Exercises.push({name: 'Towel Pull-Ups', sets: 2, max: true});

        //day 17
        const day17Exercises = [];
        day17Exercises.push({name: 'Legs', isTitle: true});
        day17Exercises.push({name: 'Bodyweight Squats', sets: 1, reps: 100, detailsEn: "Warm-up.", detailsTr: "Isınma"});
        day17Exercises.push({name: 'Pistol Squats', sets: 6, reps: adjustNumbers(squat * 0.6), detailsEn: "For each leg.", detailsTr: "Her bacak için."});
        day17Exercises.push({name: 'Nordic Curls', sets: 6, reps: adjustNumbers(squat * 0.6)});
        day17Exercises.push({name: 'Bulgarian Split Squats', sets: 5, reps: "3 Reps in Reserve", detailsEn: "For each leg.", detailsTr: "Her bacak için."});
        day17Exercises.push({name: 'Bodyweight Squats', sets: 1, max: true, detailsEn: "5 reps slow - 5 reps fast until failure.", detailsTr: "5 tekrar yavaş - 5 tekrar hızlı, başarısız olana kadar."});

        //day 18
        const day18Exercises = [];
        day18Exercises.push({name: 'Core', isTitle: true});
        day18Exercises.push({name: 'Planche', sets: 3, max: true});
        day18Exercises.push({name: 'Dragon Flag', sets: 3, max: true, detailsEn: "If you can't perform, try easier variations", detailsTr: "Yapamıyorsanız, daha kolay varyasyonları deneyin."});
        day18Exercises.push({name: 'L-Sits', sets: 3, max: true, detailsEn: "Hold \n If you can't perform, try easier variations", detailsTr: "Tutun \n Yapamıyorsanız, daha kolay varyasyonları deneyin."});
        day18Exercises.push({name: 'Hanging Leg Raises', sets: 3, max: true});
        day18Exercises.push({name: 'Pigeon Stretch', sets: 5, seconds: "15", detailsEn: "Each side.", detailsTr: "Her bir taraf için."});
        day18Exercises.push({name: 'Chest Doorway Stretch', sets: 2, seconds: "15", detailsEn: "Each side. \n Stand near a doorway. With the palms facing outward, grasp the edge of the doorway with one or both arms. Keeping the elbows straight, lean forward gently.", detailsTr: "Her bir taraf için. \n Bir kapının yakınında durun. Avuç içleri dışarıya bakacak şekilde, bir veya her iki kolunuzla kapının kenarını kavrayın. Dizleri düz tutarak, dirsekleri hafifçe öne doğru eğin."});

        //day 19
        const day19Exercises = [];
        day19Exercises.push({name: 'Push', isTitle: true});
        day19Exercises.push({name: 'One Arm Push-Up', sets: 1, max: true, detailsEn: "For each side.", detailsTr: "Her bir taraf için."});
        day19Exercises.push({name: "Spiderman Push-Up", sets: 2, reps: adjustNumbers(pushup * 0.5)});
        day19Exercises.push({name: "Bodyweight Skull Crushers & Bench Dips", sets: 3, reps: adjustNumbers(pushup * 0.5) + " & 2-3 Reps in Reserve", detailsEn: "Add a little incline for the bodyweight skull crushers in order to hit the long head.", detailsTr: "Bodyweight skull crushers'a biraz eğim ekleyin."});
        day19Exercises.push({name: 'Diamond Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.5)});
        day19Exercises.push({name: 'Hindu Push-Up', sets: 1, max: true});
        day19Exercises.push({name: 'Handstand Hold', sets: 1, max: true});

        //day 20
        const day20Exercises = [];
        day20Exercises.push({name: 'Pull', isTitle: true});
        day20Exercises.push({name: 'Close-Grip Chin Up', sets: 4, reps: adjustNumbers(pullup * 0.7), detailsEn: "Biceps focused.", detailsTr: "Bicepslere odaklanarak."});
        day20Exercises.push({name: 'Chin Up', sets: 4, reps: adjustNumbers(pullup * 0.6), detailsEn: "Dead hang for 20 seconds before starting the movement.", detailsTr: "Harekete başlamadan önce 20 saniye boyunca asılı kal."});
        day20Exercises.push({name: 'Chin Up', sets: 4, reps: adjustNumbers(pullup * 0.5), detailsEn: "The movement should takae 5 seconds while most of this time (3 seconds) should be spent for the negative part of this movement.", detailsTr: "Hareket 5 saniye sürmeli ve bu sürenin çoğu (3 saniye) hareketin negatif kısmına harcanmalı."});
        day20Exercises.push({name: "Pull Up & Australian Pull Ups Legs Elevated", sets: 3, reps: adjustNumbers(pushup * 0.5) + " & 1-2 Reps in Reserve"});
        day20Exercises.push({name: 'Side Plank', sets: 3, max: true});

        //day 21
        const day21Exercises = [];
        day21Exercises.push({name: 'Cardio', isTitle: true});
        day21Exercises.push({name: 'V-Ups', sets: 4, reps: "25-35"});
        day21Exercises.push({name: 'Leg Raises', sets: 4, reps: "25-35"});
        if (!goals) {
            day21Exercises.push({name: 'Walk', minutes: "45"});
        }
        if (goals) {
            day21Exercises.push({name: 'Jog', minutes: "10"});
        }

        //day 22
        const day22Exercises = [];
        day22Exercises.push({name: 'Push', isTitle: true});
        day22Exercises.push({name: 'Handstand Push-Up', sets: 4, reps: adjustNumbers(pushup * 0.5), detailsEn: "Can have support from a wall.", detailsTr: "Duvara dayanarak yapılabilir."});
        day22Exercises.push({name: 'Archer Push-Up', sets: 4, reps: adjustNumbers(pushup * 0.7)});
        day22Exercises.push({name: 'Negative One Arm Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.7)});
        day22Exercises.push({name: 'Elevated Pike Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.6), detailsEn: "Fast in the positive and slow (about 3 seconds) in the negative.", detailsTr: "Pozitifte hızlı, negatifte yavaş (3 saniye) yap."});
        day22Exercises.push({name: 'Cross Arm Push-Up', sets: 1, max: true, });

        //day 23
        const day23Exercises = [];
        day23Exercises.push({name: 'Pull', isTitle: true});
        day23Exercises.push({name: 'One Arm Pull-Up', sets: 2, reps: adjustNumbers(pullup * 0.3), detailsEn: "For each side.", detailsTr: "Her iki taraf için."});
        day23Exercises.push({name: 'One Arm Chin-Up', sets: 2, reps: adjustNumbers(pullup * 0.3), detailsEn: "For each side.", detailsTr: "Her iki taraf için."});
        day23Exercises.push({name: 'Backpack Pull-Ups', sets: 6, reps: 6, detailsEn: "Increase the weight of the backpack every week while maintaining the same repetition number.", detailsTr: "Her hafta aynı tekrar sayısını korurken sırt çantasının ağırlığını artırın."});
        day23Exercises.push({name: 'Wide Grip Pull-Ups', sets: 4, reps: adjustNumbers(pullup * 0.6) });
        day23Exercises.push({name: 'Towel Pull-Ups', sets: 2, max: true});

        //day 24
        const day24Exercises = [];
        day24Exercises.push({name: 'Legs', isTitle: true});
        day24Exercises.push({name: 'Bodyweight Squats', sets: 1, reps: 100, detailsEn: "Warm-up.", detailsTr: "Isınma."});
        day24Exercises.push({name: 'Pistol Squats', sets: 6, reps: adjustNumbers(squat * 0.6), detailsEn: "For each leg.", detailsTr: "Her bacak için."});
        day24Exercises.push({name: 'Nordic Curls', sets: 6, reps: adjustNumbers(squat * 0.6),});
        day24Exercises.push({name: 'Bulgarian Split Squats', sets: 6, reps: "3 Reps in Reserve", detailsEn: "For each leg.", detailsTr: "Her bacak için."});
        day24Exercises.push({name: 'Bodyweight Squats', sets: 1, max: true, detailsEn: "5 reps slow - 5 reps fast until failure.", detailsTr: "5 tekrar yavaş - 5 tekrar hızlı, başarısız olana kadar."});

        //day 25
        const day25Exercises = [];
        day25Exercises.push({name: 'Core', isTitle: true});
        day25Exercises.push({name: 'Planche', sets: 4, max: true});
        day25Exercises.push({name: 'Dragon Flag', sets: 3, max: true, detailsEn: "If you can't perform, try easier variations", detailsTr: "Yapamıyorsanız, daha kolay varyasyonları deneyin."});
        day25Exercises.push({name: 'L-Sits', sets: 3, max: true, detailsEn: "Hold \n If you can't perform, try easier variations", detailsTr: "Tutun \n Yapamıyorsanız, daha kolay varyasyonları deneyin."});
        day25Exercises.push({name: 'Hanging Leg Raises', sets: 4, max: true});
        day25Exercises.push({name: 'Pigeon Stretch', sets: 5, seconds: "15", detailsEn: "Each side.", detailsTr: "Her iki taraf için."});
        day25Exercises.push({name: 'Chest Doorway Stretch', sets: 2, seconds: "15", detailsEn: "Each side. \n Stand near a doorway. With the palms facing outward, grasp the edge of the doorway with one or both arms. Keeping the elbows straight, lean forward gently.", detailsTr: "Bir kapının yanına durun. Avuç içleri dışarıya bakacak şekilde, bir veya her iki kolunuzla kapının kenarını kavrayın. Dizleri düz tutarak, dirsekleri hafifçe öne doğru eğin."});

        //day 26
        const day26Exercises = [];
        day26Exercises.push({name: 'Push', isTitle: true});
        day26Exercises.push({name: 'One Arm Push-Up', sets: 1, max: true, detailsEn: "For each side."});
        day26Exercises.push({name: "Spiderman Push-Up", sets: 2, reps: adjustNumbers(pushup * 0.8)});
        day26Exercises.push({name: "Bodyweight Skull Crushers & Bench Dips", sets: 3, reps: adjustNumbers(pushup * 0.6) + " & 2-3 Reps in Reserve", detailsEn: "Add a little incline for the bodyweight skull crushers in order to hit the long head.", detailsTr: "Bodyweight skull crushers'a biraz eğim ekleyin."});
        day26Exercises.push({name: 'Diamond Push-Up', sets: 3, reps: adjustNumbers(pushup * 0.7)});
        day26Exercises.push({name: 'Hindu Push-Up', sets: 1, max: true});
        day26Exercises.push({name: 'Handstand Hold', sets: 1, max: true});

        //day 27
        const day27Exercises = [];
        day27Exercises.push({name: 'Pull', isTitle: true});
        day27Exercises.push({name: 'Close-Grip Chin Up', sets: 4, reps: adjustNumbers(pullup * 0.8), detailsEn: "Biceps focused.", detailsTr: "Bicepslere odaknalarak."});
        day27Exercises.push({name: 'Chin Up', sets: 4, reps: adjustNumbers(pullup * 0.7), detailsEn: "Dead hang for 20 seconds before starting the movement.", detailsTr: "Hareketi başlatmadan önce 20 saniye boyunca asılı kal."});
        day27Exercises.push({name: 'Chin Up', sets: 4, reps: adjustNumbers(pullup * 0.6), detailsEn: "The movement should takae 5 seconds while most of this time (3 seconds) should be spent for the negative part of this movement.", detailsTr: "Hareket 5 saniye sürmeli ve bu sürenin çoğu (3 saniye) hareketin negatif kısmına harcanmalı."});
        day27Exercises.push({name: "Pull Up & Australian Pull Ups Legs Elevated", sets: 3, reps: adjustNumbers(pushup * 0.5) + " & 1-2 Reps in Reserve"});
        day27Exercises.push({name: 'Side Plank', sets: 3, max: true});

        //day 28
        const day28Exercises = [];
        day28Exercises.push({name: 'Cardio', isTitle: true});
        day28Exercises.push({name: 'V-Ups', sets: 5, reps: "25-35"});
        day28Exercises.push({name: 'Leg Raises', sets: 5, reps: "25-35"});
        if (!goals) {
            day28Exercises.push({name: 'Walk', minutes: "45"});
        }
        if (goals) {
            day28Exercises.push({name: 'Jog', minutes: "10"});
        }

        days.push(day1Exercises);
        days.push(day2Exercises);
        days.push(day3Exercises);
        days.push(day4Exercises);
        days.push(day5Exercises);
        days.push(day6Exercises);
        days.push(day7Exercises);
        days.push(day8Exercises);
        days.push(day9Exercises);
        days.push(day10Exercises);
        days.push(day11Exercises);
        days.push(day12Exercises);
        days.push(day13Exercises);
        days.push(day14Exercises);
        days.push(day15Exercises);
        days.push(day16Exercises);
        days.push(day17Exercises);
        days.push(day18Exercises);
        days.push(day19Exercises);
        days.push(day20Exercises);
        days.push(day21Exercises);
        days.push(day22Exercises);
        days.push(day23Exercises);
        days.push(day24Exercises);
        days.push(day25Exercises);
        days.push(day26Exercises);
        days.push(day27Exercises);
        days.push(day28Exercises);

    }

    if (intensity == 0) {
        createBeginnerProgram(pushup, pullup, squat, goals);
    } 
    if (intensity == 1) {
        createIntermeditateProgram(pushup, pullup, squat, goals);
    }
    if (intensity == 2) {
        createAdvancedProgram(pushup, pullup, squat, goals);
    }

    return days;

}