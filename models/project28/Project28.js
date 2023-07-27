const mongoose = require('mongoose');
const project28Entry = require('models/project28entry/Project28Entry.js');
const setIntensity = require('./functions/setIntensity.js');
const calculateTdee = require('./functions/calculateTdee.js');
const setDays = require('./functions/setDays.js');

// Define the schema
const project28Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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
project28Schema.statics.createProject28 = function (data, callback) {

  console.log(data);

  if(!data.name || !data.email || !data.age || !data.weight || !data.height || !data.activity || !data.squat || !data.pullup || !data.pushup || !data.goals)
    return callback({ success: false, error: 'bad_request' });
  if(data.pushup < 3) 
    return callback({ success: false, error: 'not_suitable' });
  
  const Project28 = this;

  project28Entry.createEntry(data, (err, res) => {
    if (err || !res) {
      console.log(err);
      return res.status(500).send();
    }
    if (res) {
      console.log("Project28.js res!");
      const intensity = setIntensity(data);
      const tdee = calculateTdee(data.weight, data.height, data.age, data.activity);
      const days = setDays(intensity, data.pushup, data.pullup, data.squat, data.goals);

      if (tdee == 0) {
        console.log("tdee is 0");
        return callback({ success: false, error: 'bad_request' });
      }

      const project28Data = {
        name: data.name.trim(),
        intensity: intensity,
        days: days,
        tdee: tdee,
      }

      const newProject28 = new Project28(project28Data);
      newProject28.save();
      return callback({ error: null, success: true, id: newProject28._id });
    }
    return res.status(500).send();;
  })

};

module.exports = mongoose.model('Project28', project28Schema);