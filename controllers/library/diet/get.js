module.exports = (req, res) => {
    res.render('index/library/diet', {
        title: 'Diyet',
        page: 'index/library/diet',
        includes: {
            external: {
                css: ['general', 'index', 'fontawesome', 'page', 'header', 'diet'],
                js: ['page', 'header', 'index', 'navbar']
            }
        },
        url: '/library/diet',
        user: req.session.user
    });
    
};