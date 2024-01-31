module.exports = (req, res) => {
    res.render('index/program', {
        title: 'Paketler',
        page: 'index/program',
        includes: {
            external: {
                css: ['general', 'index', 'fontawesome', 'page', 'header', 'program'],
                js: ['page', 'header', 'index', 'navbar']
            }
        },
        url: '/program',
        lang: req.cookies['lang']
    });
    
};