module.exports = (req, res) => {
    //if(req.session.user) return res.redirect('/');
    return res.render('auth/register', {
        title: 'Register Page',
        page: 'auth/register',
        includes: {
            external: {
                css: ['general', 'auth', 'index', 'fontawesome', 'page', 'header', 'footer'],
                js: ['page', 'header', 'register', 'serverRequest']
            }
        },
            url: '/auth/register',
            user: req.session.user
        })

}