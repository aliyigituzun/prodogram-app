const Exercise = require('../../../../models/exercise/Exercise');

module.exports = (req, res) => {

    Exercise.createExercise(req.body, (err, exercise) => {
        if (err) {
            res.write(JSON.stringify({ error: 'database_error', success: false }));
            return res.end();
          }
        if(!exercise) {
            res.write(JSON.stringify({ error: 'database_error', success: false }));
            return res.end();
        }        
        res.write(JSON.stringify({ success: true, exercise }));
        return res.end();
        });
}