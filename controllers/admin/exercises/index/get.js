const Exercise = require('../../../../models/exercise/Exercise');


module.exports = async (req, res) => {
    await Exercise.getExercises({})
    .then(exercises => {
        if(exercises) {
        res.render('admin/exercises', {
            title: 'Exercises',
            page: 'admin/exercises',
            includes: {
            external: {
                css: ['general', 'fontawesome', 'page', 'header', 'admin', 'exercises'],
                js: ['page', 'header', 'admin', 'navbar', 'exercises', 'serverRequest']
            }
        },
        url: '/admin/exercises',
        exercises: exercises,
        lang: req.cookies['lang'],
        user: req.session.user
        })
    }
    }).catch(err => {
        console.log(err)
    });
}