module.exports = (req, res) => {
    res.render('index/project', {
        title: 'Project 28',
        page: 'index/project',
        includes: {
            external: {
                css: ['general', 'index', 'fontawesome', 'page', 'header', 'project'],
                js: ['page', 'header', 'index', 'navbar', 'serverRequest']
            }
        },
        url: '/project',
    });
    
};