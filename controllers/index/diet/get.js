module.exports = (req, res) => {
    res.render('index/diet', {
        title: 'Diyet',
        page: 'index/diet',
        includes: {
            external: {
                css: ['general', 'index', 'fontawesome', 'page', 'header', 'diet'],
                js: ['page', 'header', 'index']
            }
        },
        url: '/diet',
    });
    
};