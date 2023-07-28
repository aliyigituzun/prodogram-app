module.exports = (req, res) => {
    console.log(req.socket.remoteAddress);
    res.render('index/index', {
        title: 'Prodogram Fit',
        page: 'index/index',
        includes: {
            external: {
                css: ['general', 'index', 'fontawesome', 'page', 'header'],
                js: ['page', 'header', 'index', 'navbar']
            }
        },
        url: '/',
    });
    
};