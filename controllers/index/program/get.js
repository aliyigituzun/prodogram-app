module.exports = (req, res) => {
    res.render('index/program', {
        title: 'Paketler',
        page: 'index/program',
        includes: {
            external: {
                css: ['general', 'index', 'fontawesome', 'page', 'header'],
                js: ['page', 'header', 'index']
            }
        },
        url: '/program',
    });
    
};