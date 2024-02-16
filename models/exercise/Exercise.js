const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const muscleGroups = [
    'abductors',
    'abs',
    'adductors',
    'biceps',
    'calves',
    'chest',
    'forearms',
    'glutes',
    'hamstrings',
    'hip flexors',
    'it band',
    'lats',
    'lower back',
    'upper back',
    'neck',
    'obliques',
    'palmar fascia',
    'plantar fascia',
    'quads',
    'shoulders',
    'traps',
    'triceps',
    'cardio'
  ];

const difficulty = [
    'beginner',
    'intermediate',
    'advanced'
];

const exerciseSchema = new Schema({
    name : {
        type: String,
        required: [true, 'Please enter a name'],
        unique: true,
        trim: true,
        minlength: [5, 'Name must be at least 2 characters long'],
    },
    description: {
        type: String,
        required: [true, 'Please enter a description'],
        unique: false,
        trim: true,
        minlength: [5, 'Description must be at least 5 characters long'],
    },
    primary_muscle : {
        type: String,
        required: [true, 'Please enter a primary muscle'],
        unique: false,
        trim: true,
        //enum: muscleGroups
    },
    secondary_muscle : {
        type: [],
        required: false,
        unique: false,
        trim: true,
        //enum: muscleGroups
    },
    difficulty : {
        type: String,
        required: [true, 'Please enter a difficulty'],
        unique: false,
        trim: true,
        //enum: difficulty
    },
    is_calisthenics : {
        type: Boolean,
        required: false,
        unique: false,
        default: false,
        trim: true,
    },
    thumbnail_url : {
        type: String,
        required: false,
        unique: false,
        trim: true,
    },
    video_url : {
        type: String,
        required: false,
        unique: false,
        trim: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date
    }
    
});

exerciseSchema.statics.createExercise = async function (data, callback)  {
    
        const Exercise = this;
    
        if(!data.name || !data.description || !data.primary_muscle || !data.difficulty) {
            return callback(false, null);
        }

        exerciseData = {
            name: data.name,
            description: data.description,
            primary_muscle: data.primary_muscle,
            secondary_muscle: data.secondary_muscle,
            difficulty: data.difficulty,
            is_calisthenics: data.is_calisthenics,
            thumbnail_url: data.thumbnail_url,
            video_url: data.video_url,
            created_at: Date.now()
        }
    
        const newExercise = new Exercise(exerciseData);
        await newExercise.save();

        return callback(null, newExercise); 
}

exerciseSchema.statics.getExercises = async function ()  {
    
    const Exercise = this;

    const exercises = await Exercise.find({}).limit(20);

    return exercises;
}

exerciseSchema.statics.getExercise = async function (id, callback)  {
    
    const Exercise = this;

    const exercise = await Exercise.findById(id);

    return callback(null, exercise); 
}

exerciseSchema.statics.editExercise = async function (id, data, callback)  {

    const Exercise = this;

    const updatedData = {
        name: data.name,
        description: data.description,
        primary_muscle: data.primary_muscle,
        secondary_muscle: data.secondary_muscle,
        difficulty: data.difficulty,
        is_calisthenics: data.is_calisthenics,
        thumbnail_url: data.thumbnail_url,
        video_url: data.video_url,
        updated_at: Date.now()
    }

    await Exercise.updateOne({_id: id}, updatedData);

    return callback(null, updatedData);
}

exerciseSchema.statics.deleteExercise = async function (id, callback)  {

    const Exercise = this;

    await Exercise.deleteOne({_id: id});

    return callback(null, id);

}


module.exports = mongoose.model('Exercise', exerciseSchema);

