const mongoose = require('mongoose');
const setIntensity = require('./functions/setIntensity.js');
const calculateTdee = require('./functions/calculateTdee.js');
const setDays = require('./functions/setDays.js');

// Define the schema
const project28Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  intensity: {
    type: Number,
    required: true
  },
  days: {
    type: Array,
    required: true,
  },
  tdee: {
    type: Number,
  }
});

// Create the model
project28Schema.statics.createProject28 = async function (data, callback) {

  if(!data.name || !data.email || !data.age || !data.weight || !data.height || !data.activity || !data.squat || !data.pullup || !data.pushup || !data.goals)
    return callback({ success: false, error: 'bad_request' });

  
  const Project28 = this;

      const intensity = setIntensity(data);
      const tdee = calculateTdee(data.weight, data.height, data.age, data.activity);
      const days = setDays(intensity, data.pushup, data.pullup, data.squat, data.goals);

      if (tdee == 0) {
        return callback({ success: false, error: 'bad_request' });
      }

    const project28Data = {
      email: data.email.trim(),
      name: data.name.trim(),
      intensity: intensity,
      days: days,
      tdee: tdee,
    }

      const newProject28 = new Project28(project28Data);
      await newProject28.save();
      return callback({ error: null, success: true, id: newProject28._id });

};

module.exports = mongoose.model('Project28', project28Schema);