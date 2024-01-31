const User = require('../../../../models/user/User');

module.exports = async (req, res) => {
    await User.getUsers({}) 
    .then(users => {
        if(users) {
        res.render('admin/users', {
            title: 'Users',
            page: 'admin/users',
            includes: {
            external: {
                css: ['general', 'fontawesome', 'page', 'header', 'admin', 'users'],
                js: ['page', 'header', 'admin', 'navbar', 'users', 'serverRequest']
            }
        },
        url: '/admin/users',
        users: users,
        lang: req.cookies['lang'],
        user: req.session.user
        });
    }
    });
}