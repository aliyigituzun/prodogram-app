module.exports = (req, res) => {
    res.render('index/library/exercise', {
        title: 'Egzersiz',
        page: 'index/library/exercise',
        includes: {
            external: {
                css: ['general', 'index', 'fontawesome', 'page', 'header'],
                js: ['page', 'header', 'index', 'navbar']
            }
        },
        url: '/library/exercise',
    });
    
};