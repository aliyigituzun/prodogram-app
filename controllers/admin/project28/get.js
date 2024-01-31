Project28 = require('../../../models/project28/Project28');

module.exports =  (req, res) => {
    Project28.getProject28((projects) => {
        res.render('admin/project28', {
            title: 'Admin',
            page: 'admin/project28',
            includes: {
                external: {
                    css: ['page', 'index', 'header', 'admin', 'general'],
                    js: ['page', 'index', 'header', 'admin', 'serverRequest']
                }
            },
            url: '/admin/project28',
            projects: projects
        });
    })
    
}