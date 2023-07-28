const mongoose = require('mongoose');
const validator = require('validator')

const project28EntrySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true
   },
    weight: { 
      type: Number,
      required: true 
   },
    height: { 
      type: Number,
      required: true
   },
    activity_level: {
      type: String, 
      required: true
   },
    max_squat: {
      type: Number, 
      required: true 
  },
    max_pullup: { 
      type: Number,
      required: true 
  },
    max_pushup: { 
      type: Number, 
      required: true 
  },
    goals: { 
      type: Boolean,
      required: true 
  },
  });

  project28EntrySchema.statics.createEntry = function (data, callback) {

    const Project28Entry = this;

    if (!data.name || !data.email || !data.age || !data.weight || !data.height || !data.activity || !data.squat || !data.pullup || !data.pushup || !data.goals)
      return callback({ success: false, error: 'bad_request' });
    if (data.pushup < 3)
      return callback({ success: false, error: 'bad_request' });
    if (isNaN(data.weight) || isNaN(data.height) || isNaN(data.age) || isNaN(data.squat) || isNaN(data.pullup) || isNaN(data.pushup)) {
      return callback({ success: false, error: 'bad_request' });
    }
    if(validator.isEmail(data.email) == false){
      return callback({ success: false, error: 'invalid_email' });
    }

    const entryData = {
      name: data.name.trim(),
      email: data.email,
      age: data.age,
      weight: data.weight,
      height: data.height,
      activity_level: data.activity,
      max_squat: data.squat,
      max_pullup: data.pullup,
      max_pushup: data.pushup,
      goals: data.goals
    }

    const newEntry = new Project28Entry(entryData);
    newEntry.save();
    callback(null, newEntry)
  }

module.exports = mongoose.model('Project28Entry', project28EntrySchema);