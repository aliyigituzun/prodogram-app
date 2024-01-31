module.exports = (req, res) => {
    res.render('dashboard/profile', {
        title: 'Profile',
        page: '/dashboard/profile',
        includes: {
            external: {
                css: ['general', 'fontawesome', 'page', 'header', 'profile'],
                js: ['page', 'header', 'profile', 'navbar']
            }
        },
        url: '/dashboard/profile',
    });
    
}