module.exports = (req, res) => {
    if(req.session.user) return res.redirect('/');
    return res.render('auth/login', {
        title: 'Login Page',
        page: 'auth/login',
        includes: {
            external: {
                css: ['general', 'auth', 'index', 'fontawesome', 'page', 'header', 'footer'],
                js: ['page', 'header', 'login', 'serverRequest']
            }
        },
            url: '/auth/login',
            user: req.session.user
        })

}