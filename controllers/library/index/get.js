module.exports = (req, res) => {
    res.render('index/library', {
        title: 'Kütüphane',
        page: 'index/library',
        includes: {
            external: {
                css: ['general', 'index', 'fontawesome', 'page', 'header'],
                js: ['page', 'header', 'index', 'navbar']
            }
        },
        url: '/library',
    });
    
};