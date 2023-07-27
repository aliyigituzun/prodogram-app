module.exports = (req, res) => {
    res.render('admin/auth', {
        title: 'Admin Login',
        page: 'admin/auth',
        includes: {
            external: {
                css: ['general', 'admin', 'fontawesome', 'page', 'header', 'adminauth'],
                js: ['page', 'header', 'adminauth']
            }
        },
        url: '/admin/auth',
    });
    
}