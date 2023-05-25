module.exports = (req, res) => {
    res.render('index/faq', {
        title: 'FAQs',
        page: 'index/faq',
        includes: {
            external: {
                css: ['general', 'index', 'fontawesome', 'page', 'header'],
                js: ['page', 'header', 'index', 'navbar']
            }
        },
        url: '/faq',
    });
    
};