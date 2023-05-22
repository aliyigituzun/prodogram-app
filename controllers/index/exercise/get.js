module.exports = (req, res) => {
    res.render('index/exercise', {
        title: 'Egzersiz',
        page: 'index/exercise',
        includes: {
            external: {
                css: ['general', 'index', 'fontawesome', 'page', 'header'],
                js: ['page', 'header', 'index']
            }
        },
        url: '/exercise',
    });
    
};