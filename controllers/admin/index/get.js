module.exports = (req, res) => {
    res.render('admin/index', {
        title: 'Admin Page',
        page: 'admin/index',
        includes: {
            external: {
                css: ['general', 'admin', 'fontawesome', 'page', 'header', 'adminauth'],
                js: ['page', 'header', 'admin']
            }
        },
        url: '/admin/index',
    });
    
}