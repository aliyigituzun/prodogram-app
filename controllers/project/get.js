const Project28 = require('../../models/project28/Project28');

module.exports = async (req, res) => {
    await Project28.findById(req.params.id)
    .then(project => {
        if(project)
        res.render('project/project', {
            title: 'Project 28',
            page: 'index/project',
            includes: {
            external: {
                css: ['general', 'index', 'fontawesome', 'page', 'header', 'project'],
                js: ['page', 'header', 'index', 'navbar', 'serverRequest']
            }
        },
        url: '/project',
        project: project,
        lang: req.cookies['lang'],
        user: req.session.user
        });
    });
};