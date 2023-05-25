module.exports = (req, res) => {
    res.render('index/calculator', {
        title: 'Hesaplama',
        page: 'index/calculator',
        includes: {
            external: {
                css: ['general', 'index', 'fontawesome', 'page', 'header', 'calculator'],
                js: ['page', 'header', 'index', 'navbar']
            }
        },
        url: '/calculator',
    });
    
};